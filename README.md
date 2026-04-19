# Darth Vader Companion

> *"I find your lack of commits... disturbing."* 🌑

**Darth Vader lives in your VS Code sidebar.** He watches you code, drops arrogant Star Wars quotes on every editor event, breathes at you, ignites his saber, and enters full **RAGE MODE** when your errors pile up.

---

## Features ✨

### Reactions

| Event | What Vader does |
|---|---|
| Opening VS Code | Welcomes you to the dark side |
| Saving a file | Judges your commit discipline |
| Opening a file | Comments on your choices |
| Error / diagnostic | Mocks your bugs — or enters Rage Mode |
| Deleting code | Taunts your refactor |
| Creating a new file | Has opinions immediately |
| Running tests | Praises reluctantly or mocks failure |
| Build start / fail | Notes your ambition and your failure |
| Starting debugger | Watches your archaeological dig |
| Opening a terminal | Notes your weakness |
| Idling | Reminds you he is still watching |
| GitHub Copilot generating | Badge appears, snark quote fires |
| Copilot finishes | Takes all the credit |

### Animations

- 🌬️ **Breathing** — chest rises and falls, 3.5 s cycle
- 🔴 **Glowing red eyes** — occasional power-fluctuation flicker
- 💡 **Chest armor lights** — red and blue indicators blink on independent timers
- 🖤 **Cape sway** — subtle drift in the dark side wind
- ⚔️ **Saber idle** — slow rocking; random audio swing every 18–40 s

### 😡 Rage Mode

When **5+ errors accumulate within 20 seconds**, Vader loses it:
- Body shakes violently
- Eyes flicker and overbrighten
- A red pulse washes the panel
- The rage alarm fires (if enabled)
- A special rage quote fires immediately
- Rage clears the moment all errors resolve — no waiting

### 🎵 Audio Controls

Four independent toggles in a 2×2 grid — all **off by default**:

| Button | Sound |
|---|---|
| 🎵 Dark March | Cinematic dark orchestral loop |
| 🌬️ Breathing | Lord's iconic breathing loop |
| ⚔️ Saber | Swing sound + auto-swings every 18–40 s |
| ⚠️ Rage Alarm | Sci-fi alarm plays during Rage Mode |

---

## Installation 🚀

### From VSIX

```bash
code --install-extension darth-vader-companion-0.3.0.vsix --force
```

Then: `Ctrl+Shift+P` → **Developer: Reload Window**

The Vader helmet icon appears in the Activity Bar on the left. Click it.

### From source

```bash
git clone https://github.com/your-username/darth-vader-vscode
cd darth-vader-vscode
npm install
npx tsc -p ./
echo y | npx @vscode/vsce package --allow-missing-repository
code --install-extension darth-vader-companion-*.vsix --force
```

---

## Usage 🎮

1. Click the **Vader helmet** in the Activity Bar to open the panel.
2. Enable the sounds you want from the 2×2 control grid.
3. Code normally — Vader reacts to what you do.
4. Break enough things fast enough and he will enter **Rage Mode**.

---

## Development 🛠️

```bash
npm install          # install dev dependencies
npx tsc -p ./        # compile TypeScript → out/
```

Press **F5** to open an Extension Development Host for live testing. Edit → save → `Ctrl+R` in the host window to reload.

**Requires** Node.js ≥ 18 and npm.

---

## Project Structure 📁

```text
darth-vader-vscode/
├── src/
│   ├── extension.ts   # Extension host, editor event listeners, rage tracking
│   ├── webview.ts     # Full HTML/CSS/JS sidebar panel (SVG Vader + audio)
│   └── quotes.ts      # 100+ quotes grouped by context
├── media/
│   ├── audio/         # Dark March, saber, breathing, rage alarm
│   └── images/        # Activity Bar icon
├── out/               # Compiled JS (git-ignored)
├── package.json
└── tsconfig.json
```

---

## What Could Come Next 💭

- 🌘 **Dark Side meter** — fills as errors accumulate, drains when tests pass
- 🧠 **Language-aware quotes** — Python snark vs TypeScript lectures vs "you're using Notepad?"
- ⏳ **Focus / Pomodoro mode** — Vader enforces your work sessions
- 🧾 **Git blame quotes** — taunts based on your last commit message
- 🏆 **Achievement system** — badges for clean test runs, long streaks, zero-error days
- 🎨 **Themes** — Classic Vader, Lego Vader, Halloween Vader
- 🔊 **More audio events** — unique sounds for test pass, build fail, debug start
- ⚙️ **Settings panel** — configurable quote frequency, sound volume, rage threshold

See [CHANGELOG.md](CHANGELOG.md) for full version history.

---

*May the dark side be with you.* 🖤

---

## ⚠️ Disclaimer

This is a free, fan-made project created for fun. It is not affiliated with, endorsed by, or sponsored by any official franchise or rights holder.
