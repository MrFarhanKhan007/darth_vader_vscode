# Darth Vader Companion

> *"I find your lack of commits... disturbing."* 🌑

An animated Darth Vader lives in your VS Code sidebar, watches you code, and throws arrogant Star Wars quotes at your editor events. He comes with glowing eyes, a breathing suit, an animated lightsaber, and the Imperial March.

## Highlights ✨

| Event | Vader's reaction |
|---|---|
| Opening VS Code | Welcomes you from the dark side |
| Saving a file | Judges your commit discipline |
| Opening a file | Comments on your choices |
| Error / diagnostic | Mocks your bugs |
| Deleting code | Taunts your refactor |
| Creating a new file | Has opinions immediately |
| Running tests or debug | Watches with amusement |
| Opening a terminal | Notes your weakness |
| Long file / complex function | Becomes impressed or condescending |
| Idle for a while | Reminds you he is still there |
| GitHub Copilot typing | Badge appears with a special quote |
| Copilot finishes | Takes the credit |

### Animations
- **Breathing** 🌬️ - chest slowly rises and falls
- **Glowing red eyes** 🔴 - occasional flicker like a power fluctuation
- **Chest armor lights** 💡 - red and blue indicators blink on independent timers
- **Cape sway** 🖤 - subtle drift in the dark side wind
- **Lightsaber idle** ⚔️ - slow rocking, with random swing audio every 18-40 seconds

### Audio
- **Imperial March** 🎵 - toggle button at the top of the panel, off by default
- **Ignite Saber** 🔥 - when ON, triggers an immediate saber swing and keeps auto-swings going; when OFF, the saber still animates silently

## Installation 🚀

Install the packaged extension from the `.vsix` file:

```bash
code --install-extension darth-vader-companion-0.2.0.vsix --force
```

Then reload VS Code: `Ctrl+Shift+P` → **Developer: Reload Window**. The Vader icon will appear in the Activity Bar on the left.

## Usage 🎮

1. Click the **Vader helmet** icon in the Activity Bar.
2. Use **Imperial March** to toggle the theme music.
3. Use **Ignite Saber** to enable saber sound effects.
4. Trigger events like saving files, opening terminals, or causing diagnostics to see Vader react.

## Development 🛠️

```bash
# Install dependencies
npm install

# Compile TypeScript
npx tsc -p ./

# Package a VSIX
echo y | npx @vscode/vsce package --allow-missing-repository
```

Requires Node.js and npm. TypeScript is installed locally as a dev dependency.

## Project Structure 📁

```text
darth-vader-vscode/
├── src/
│   ├── extension.ts   # Extension host, editor listeners, Copilot detection
│   ├── webview.ts     # HTML/CSS/JS for the sidebar panel
│   └── quotes.ts      # Quote library grouped by event context
├── media/
│   ├── audio/         # Theme music and saber sound effect
│   └── images/        # Activity Bar icon assets
├── out/               # Generated JavaScript
├── package.json
└── tsconfig.json
```

## What You Could Add Next 💭

- **Rage mode** 😡 when too many errors appear in a short time
- **Dark Side meter** 🌘 that fills as you work longer
- **Language-aware quotes** 🧠 for Python, TypeScript, JavaScript, and more
- **Focus mode** ⏳ with a Pomodoro timer and Vader reminders
- **Git blame jokes** 🧾 based on recent file history
- **Boss fight mode** 👹 for build failures or test failures
- **Ambient UI effects** 🌌 like a subtle background glow or hologram pulse
- **Achievement system** 🏆 for long coding streaks or clean test runs

## Changelog 📝

### v0.2.0
- Sidebar webview provider with persistent context when hidden
- Imperial March toggle and saber audio controls
- Copilot detection with typing-pause and bulk-insert heuristics
- Responsive SVG Vader figure with inline lightsaber animation

### v0.1.4
- Fixed saber audio playback conflicts
- Improved the Activity Bar icon using a transparent SVG silhouette
- Fully gated saber sounds behind the Ignite Saber toggle

### v0.1.0
- Initial release with animated Vader, theme music, saber sounds, quotes, and Copilot detection

---

*May the dark side be with you.* 🖤
