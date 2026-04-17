"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const webview_1 = require("./webview");
const quotes_1 = require("./quotes");
class DarthVaderViewProvider {
    _extensionUri;
    static viewType = 'darthVader.companion';
    _view;
    _idleTimer;
    _lastQuoteTime = 0;
    _minQuoteInterval = 8000; // minimum ms between quotes
    constructor(_extensionUri) {
        this._extensionUri = _extensionUri;
    }
    resolveWebviewView(webviewView, _context, _token) {
        this._view = webviewView;
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this._extensionUri],
        };
        const nonce = getNonce();
        const themeUri = webviewView.webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'audio', 'star_wars_theme.mp3')).toString();
        const saberUri = webviewView.webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'audio', 'YTDown.com_Shorts_Lightsaber-Sound-Effect-HD-How-to_Media_LJwMGsBIc-0_008_128k.mp3')).toString();
        const vaderImageUri = webviewView.webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'images', 'Darth-Vader-SVG-Free-Star-Wars-Vector-for-DIY-Projects.jpg')).toString();
        webviewView.webview.html = (0, webview_1.getWebviewContent)(nonce, webviewView.webview.cspSource, { themeUri, saberUri, vaderImageUri });
    }
    sendMessage(msg) {
        if (this._view) {
            this._view.webview.postMessage(msg);
        }
    }
    _canSendQuote() {
        const now = Date.now();
        if (now - this._lastQuoteTime < this._minQuoteInterval) {
            return false;
        }
        this._lastQuoteTime = now;
        return true;
    }
    triggerQuote(context) {
        if (!this._canSendQuote()) {
            return;
        }
        const quote = (0, quotes_1.getQuoteForContext)(context);
        const contextLabels = {
            save: '— on saving',
            error: '— sensing errors',
            delete: '— on deletion',
            newFile: '— new file opened',
            typing: '— while you code',
            idle: '— you seem idle',
            longFile: '— file is growing',
            function: '— new function detected',
            class: '— new class detected',
            comment: '— a comment',
            import: '— new import',
            debug: '— debugging',
            terminal: '— terminal activity',
            git: '— version control',
            swing: '— lightsaber swing',
            welcome: '',
            emptyFile: '— empty file',
            copilotStart: '— Copilot is generating',
            copilotDone: '— Copilot finished',
            copilotError: '— Copilot stumbled',
        };
        const msgType = context === 'error' ? 'forceChoke' : 'quote';
        this.sendMessage({
            type: msgType,
            text: quote.text,
            context: contextLabels[context] || '',
        });
    }
    triggerCopilot(active, context) {
        const quote = (0, quotes_1.getQuoteForContext)(context);
        const contextLabel = context === 'copilotStart' ? '— Copilot is generating'
            : context === 'copilotDone' ? '— Copilot finished'
                : '— Copilot stumbled';
        this._lastQuoteTime = Date.now();
        this.sendMessage({
            type: 'copilot',
            active,
            text: quote.text,
            context: contextLabel,
        });
    }
    resetIdleTimer() {
        if (this._idleTimer) {
            clearTimeout(this._idleTimer);
        }
        this._idleTimer = setTimeout(() => {
            this.triggerQuote('idle');
        }, 60000); // 60s idle → quote
    }
    triggerSwing() {
        this.sendMessage({ type: 'swing' });
    }
}
function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
function activate(context) {
    const provider = new DarthVaderViewProvider(context.extensionUri);
    context.subscriptions.push(vscode.window.registerWebviewViewProvider(DarthVaderViewProvider.viewType, provider, { webviewOptions: { retainContextWhenHidden: true } }));
    // ─── Command: Darth Vader Speak ───
    context.subscriptions.push(vscode.commands.registerCommand('darthVader.newQuote', () => {
        const contexts = ['typing', 'idle', 'swing', 'welcome'];
        const ctx = contexts[Math.floor(Math.random() * contexts.length)];
        provider.triggerQuote(ctx);
    }));
    // ─── On Save ───
    context.subscriptions.push(vscode.workspace.onDidSaveTextDocument(() => {
        provider.triggerQuote('save');
    }));
    // ─── On File Open ───
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (!editor) {
            return;
        }
        const doc = editor.document;
        if (doc.lineCount <= 1 && doc.getText().trim() === '') {
            provider.triggerQuote('emptyFile');
        }
        else if (doc.lineCount > 500) {
            if (Math.random() < 0.3) { // don't nag every time
                provider.triggerQuote('longFile');
            }
        }
        else if (doc.isUntitled) {
            provider.triggerQuote('newFile');
        }
        provider.resetIdleTimer();
    }));
    // ─── On Text Change (typing detection) ───
    let changeCounter = 0;
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument((e) => {
        if (e.document.uri.scheme !== 'file') {
            return;
        }
        provider.resetIdleTimer();
        changeCounter++;
        // Every ~50 edits, maybe drop a quote
        if (changeCounter >= 50) {
            changeCounter = 0;
            if (Math.random() < 0.4) {
                // Detect context from content changes
                const change = e.contentChanges[0];
                if (change) {
                    const text = change.text;
                    if (text.includes('//') || text.includes('/*') || text.includes('#')) {
                        provider.triggerQuote('comment');
                    }
                    else if (/\bfunction\b|\bconst\s+\w+\s*=\s*\(/.test(text) || /\bdef\b/.test(text)) {
                        provider.triggerQuote('function');
                    }
                    else if (/\bclass\b/.test(text)) {
                        provider.triggerQuote('class');
                    }
                    else if (/\bimport\b|\brequire\b|\bfrom\b/.test(text)) {
                        provider.triggerQuote('import');
                    }
                    else {
                        provider.triggerQuote('typing');
                    }
                }
            }
        }
        // Detect large deletions
        for (const change of e.contentChanges) {
            if (change.rangeLength > 50 && change.text.length === 0) {
                provider.triggerQuote('delete');
                break;
            }
        }
    }));
    // ─── Diagnostics (errors) ───
    context.subscriptions.push(vscode.languages.onDidChangeDiagnostics((e) => {
        for (const uri of e.uris) {
            const diags = vscode.languages.getDiagnostics(uri);
            const errors = diags.filter(d => d.severity === vscode.DiagnosticSeverity.Error);
            if (errors.length > 0) {
                if (Math.random() < 0.5) { // don't trigger on every error event
                    provider.triggerQuote('error');
                }
                break;
            }
        }
    }));
    // ─── Terminal ───
    context.subscriptions.push(vscode.window.onDidOpenTerminal(() => {
        if (Math.random() < 0.3) {
            provider.triggerQuote('terminal');
        }
    }));
    // ─── Debug ───
    context.subscriptions.push(vscode.debug.onDidStartDebugSession(() => {
        provider.triggerQuote('debug');
    }));
    // ─── Copilot Detection ───
    // Strategy: detect large multi-line insertions that are characteristic of
    // Copilot completions (sudden insertion of 3+ lines of code).
    // We also watch for the inline completion / ghost text patterns via
    // document change events with specific heuristics.
    let copilotCooldown = false;
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument((e) => {
        if (copilotCooldown) {
            return;
        }
        if (e.document.uri.scheme !== 'file') {
            return;
        }
        for (const change of e.contentChanges) {
            const lines = change.text.split('\n');
            const isLargeInsertion = lines.length >= 4 && change.text.trim().length > 60;
            const hasCodePatterns = /function|const|class|def |=>|return|import|if\s*\(/.test(change.text);
            if (isLargeInsertion && hasCodePatterns) {
                // Looks like a Copilot bulk insertion
                copilotCooldown = true;
                setTimeout(() => { copilotCooldown = false; }, 15000);
                provider.triggerCopilot(false, 'copilotDone');
                break;
            }
        }
    }));
    // Also listen for the Copilot extension's status bar activity via
    // workspace configuration changes / commands if accessible
    // We watch for the 'github.copilot' extension being active and use
    // vscode.window.onDidChangeWindowState as a proxy for Copilot thinking
    const copilotExt = vscode.extensions.getExtension('GitHub.copilot') ||
        vscode.extensions.getExtension('GitHub.copilot-nightly');
    if (copilotExt) {
        // Patch: watch for status bar item changes by monitoring
        // rapid successive document changes (typing pause → big insert)
        let typingPauseTimer;
        let wasTyping = false;
        context.subscriptions.push(vscode.workspace.onDidChangeTextDocument((e) => {
            if (e.document.uri.scheme !== 'file') {
                return;
            }
            // User is typing (small changes)
            const isSmallChange = e.contentChanges.every(c => c.text.length < 5);
            if (isSmallChange) {
                wasTyping = true;
                if (typingPauseTimer) {
                    clearTimeout(typingPauseTimer);
                }
                // After a 1.5s pause, Copilot is likely generating
                typingPauseTimer = setTimeout(() => {
                    if (wasTyping && Math.random() < 0.35) {
                        provider.triggerCopilot(true, 'copilotStart');
                    }
                    wasTyping = false;
                }, 1500);
            }
        }));
    }
}
function deactivate() { }
//# sourceMappingURL=extension.js.map