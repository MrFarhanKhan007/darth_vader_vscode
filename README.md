# Darth Vader Companion

> *"I find your lack of commits... disturbing."*

An animated Darth Vader lives in your VS Code sidebar, watches you code, and drops arrogant quotes every time you do something. Complete with breathable armor, glowing red eyes, an animated lightsaber, and the Imperial March.

---

## Features

| Event | What Vader does |
|-------|----------------|
| Opening VS Code | Welcome quote |
| Saving a file | Judges your save |
| Opening a file | Comments on what you opened |
| Error / diagnostic | Mocks your bugs |
| Deleting code | Taunts you |
| Creating a new file | Has opinions |
| Running tests or debug | Watches with amusement |
| Opening a terminal | Notes your weakness |
| Long file / complex function | Impressed or condescending |
| Idle for a while | Reminds you he's still watching |
| GitHub Copilot typing | Badge appears + special quote |
| Copilot finishes | Takes the credit |

### Animations
- **Breathing** — chest slowly rises and falls (it keeps him alive, after all)
- **Glowing red eyes** — occasional flicker like a power fluctuation
- **Chest armor lights** — red and blue button indicators blink on independent timers
- **Cape sway** — subtle drift in the dark side wind
- **Lightsaber idle** — slow rocking; randomly swings with a sound effect every 18–40 seconds

### Audio
- **Imperial March** — toggle button at the top of the panel (off by default)
- **⚔️ Ignite Saber** — second toggle button; when ON, fires an immediate saber swing + sound, then auto-swings every 18–40 s with sound. When OFF, lightsaber still animates but silently

---

## Installation

Install from the `.vsix` file:

```bash
code --install-extension darth-vader-companion-0.1.1.vsix --force
```

Then reload the window (`Ctrl+Shift+P` → **Developer: Reload Window**). Vader appears in the Activity Bar on the left.

---

## Usage

- Click the **Vader helmet icon** in the Activity Bar to open the panel
- Click **Imperial March — OFF** to toggle the theme music
- Watch the quote bubble for Vader's running commentary on your work
- Try triggering events: save a file, introduce a syntax error, open a terminal

---

## Project Structure

```
darth-vader-vscode/
├── src/
│   ├── extension.ts   # VS Code extension host: webview provider + editor event listeners
│   ├── webview.ts     # Full HTML/CSS/JS for the sidebar panel (SVG Vader + audio)
│   └── quotes.ts      # 70+ arrogant quotes by context category
├── media/
│   ├── audio/
│   │   ├── Star Wars Main Theme (Full) - Coltsrock56 (128k).mp3
│   │   └── YTDown.com_Shorts_Lightsaber-Sound-Effect-HD-...128k.mp3
│   ├── images/
│   │   └── vader-icon.svg   # Activity bar icon
│   └── vader-icon.svg       # Legacy icon (superseded)
├── out/                     # Compiled JS (generated)
├── package.json
└── tsconfig.json
```

---

## Event Detection

**Copilot detection** uses two heuristics in `extension.ts`:
1. **Typing pause** — if the user stops typing for 1.5 s and then a bulk insertion arrives, `copilotStart` fires
2. **Bulk insertion** — `≥4 lines` inserted at once matching code patterns (`function`, `const`, `return`, `{`) triggers `copilotDone`

---

## Build

```bash
# Compile TypeScript
npx tsc -p ./

# Package VSIX
echo y | npx @vscode/vsce package --allow-missing-repository

# Install locally
code --install-extension darth-vader-companion-0.1.1.vsix --force
```

Requires Node.js and npm. TypeScript is a dev dependency — no global install needed.

---

## Changelog

### v0.1.4
- Fixed saber audio: removed conflicting audio pre-play that was fighting with actual playback and pausing it. Saber sound now plays correctly on button click
- Fixed Activity Bar icon: switched from JPG (no alpha channel → white square) to a proper SVG with `fill-rule="evenodd"` cutouts — renders as a Vader helmet silhouette in your theme colour
- **⚔️ Ignite Saber** button fully gates saber sounds: sounds only play when activated; auto-swings also respect the toggle

### v0.1.3
- Replaced "click anywhere on Vader" trigger with dedicated **⚔️ Ignite Saber** toggle button
- Saber sounds only play when the button is active (ON/OFF toggle)

### v0.1.2
- Fixed audio unlock: first click on any button now primes the audio context
- Vader figure click triggers an instant saber swing

### v0.1.1
- Vader figure is now fully responsive — scales with sidebar width, never gets clipped
- Lightsaber embedded inside the main SVG for unified scaling
- Sidebar activity bar icon updated to dedicated helmet SVG with transparent background
- Saber audio fixed: properly resets playback position before each swing; Web Audio synth fallback if MP3 unavailable

### v0.1.0
- Initial release
- Animated SVG Vader figure with breathing, eye glow, chest blink, cape sway, lightsaber
- Real MP3 Imperial March toggle
- Lightsaber swing sound effect
- 70+ arrogant/troll quotes across 20 event contexts
- GitHub Copilot activity detection

---

*May the dark side be with you.*
