# Darth Vader Companion

> *"I find your lack of commits... disturbing."*

**Darth Vader lives in your VS Code sidebar.** He watches you code, drops arrogant Star Wars quotes on every editor event, breathes at you, ignites his lightsaber, and enters full **RAGE MODE** when your error count gets out of hand.

---

## Demo 🎬

[https://github.com/user-attachments/assets/darth_vader_companion_demo.mp4](https://github.com/user-attachments/assets/a362f0ab-3066-45cd-9191-dbe098185c4a
)

> Click the Vader helmet in the Activity Bar → enable sounds → code normally → break enough things to summon Rage Mode.

---

## Features ✨

### 😡 Rage Mode

When **5+ errors pile up within 20 seconds**, Vader snaps:

- Body shakes violently
- Eyes flicker and overbrighten
- A red pulse floods the panel
- Rage alarm fires (if enabled)
- A special rage quote drops immediately
- Clears **the moment** all errors resolve — no timer, instant

### 🎵 Four Independent Audio Controls

All **off by default** — turn on what you want:

| Button | Sound |
|---|---|
| 🎵 Dark March | Cinematic dark orchestral loop |
| 🌬️ Breathing | The iconic breathing loop |
| ⚔️ Saber | Swing on click + random auto-swings every 18–40 s |
| ⚠️ Rage Alarm | Sci-fi alarm plays during Rage Mode only |

### 🗣️ Quote Reactions

Vader reacts to **everything**:

| Event | What he does |
|---|---|
| Opening VS Code | Welcomes you to the dark side |
| Saving a file | Judges your commit discipline |
| Code errors | Mocks your bugs — or snaps into Rage Mode |
| Deleting code | Taunts your refactor |
| Running tests | Grudging praise or immediate mockery |
| Build fail | Notes your ambition, then your failure |
| GitHub Copilot generating | Badge pulses, snark quote fires |
| Idling 60 s | Reminds you he is still watching |
| …and 15 more | Save, open, terminal, debug, import, comment… |

### 🎭 Animations

- 🌬️ **Breathing** — chest rises and falls every 3.5 s
- 🔴 **Red eyes** — occasional power-fluctuation flicker
- 💡 **Chest armor** — red and blue lights blink on independent timers
- 🖤 **Cape** — subtle drift in the dark side wind
- ⚔️ **Saber** — slow idle rock; random swing audio

---

## Installation 🚀

### From VS Code Marketplace

Search for **Darth Vader Companion** in the Extensions panel, or:

```
ext install mrfarhankhan007.darth-vader-companion
```

### From VSIX

```bash
code --install-extension mrfarhankhan007.darth-vader-companion-0.2.0.vsix --force
```

Then `Ctrl+Shift+P` → **Developer: Reload Window**

### From source

```bash
git clone https://github.com/MrFarhanKhan007/darth_vader_vscode
cd darth_vader_vscode
npm install
npx tsc -p ./
echo y | npx @vscode/vsce package --allow-missing-repository
code --install-extension darth-vader-companion-*.vsix --force
```

---

## Usage 🎮

1. Click the **Vader helmet icon** in the Activity Bar (left sidebar).
2. Toggle the sounds you want using the 2×2 control grid.
3. Code normally — Vader reacts automatically.
4. Accumulate enough errors fast enough to trigger **Rage Mode**.

---

## Development 🛠️

```bash
npm install      # install dev dependencies
npx tsc -p ./    # compile TypeScript → out/
```

Press **F5** to launch an Extension Development Host. Edit → save → `Ctrl+R` in the host window to reload instantly.

---

## Project Structure 📁

```
darth-vader-vscode/
├── src/
│   ├── extension.ts   # Extension host, event listeners, rage tracking
│   ├── webview.ts     # Sidebar panel — SVG Vader, audio, animations
│   └── quotes.ts      # 100+ original quotes across 20 contexts
├── media/
│   ├── audio/         # Dark March, saber, breathing, rage alarm
│   ├── demo/          # Demo video
│   └── images/        # Activity Bar icon
└── package.json
```

---

## What Could Come Next 💭

- 🌘 **Dark Side meter** — fills with errors, drains when tests pass
- 🧠 **Language-aware quotes** — Python snark vs TypeScript lectures
- ⏳ **Pomodoro mode** — Vader enforces your work sessions
- 🧾 **Git blame quotes** — based on your last commit message
- 🏆 **Achievement system** — badges for clean builds and zero-error streaks
- 🎨 **Themes** — Classic Vader, Lego Vader, Halloween Vader
- ⚙️ **Settings panel** — configurable quote frequency, volume, rage threshold

---

*May the dark side be with you.* 🖤

See [CHANGELOG.md](CHANGELOG.md) for version history.

---

## ⚠️ Disclaimer

All audio and visual assets are either original or sourced under appropriate licenses. This extension is not affiliated with, endorsed by, or sponsored by any official franchise or rights holder.
