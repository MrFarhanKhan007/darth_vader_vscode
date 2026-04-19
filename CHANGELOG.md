# Changelog

All notable changes to **Darth Vader Companion** are documented here.

---

## [0.2.0] — 2026-04-19

### Added
- **Breathing audio** — Vader's iconic breathing loop, independently toggleable
- **Rage alarm audio** — alarm sound plays during Rage Mode, independently toggleable
- **2×2 audio control grid** — all four sounds (Dark March, Breathing, Saber, Rage Alarm) in a clean aligned button row
- **Rage Mode** — 5 errors within 20 s triggers full rage: body shake, eye flicker, red panel pulse, `⚠ RAGE MODE` badge, and a special quote
- **Test reactions** — quotes fire when test tasks pass or fail (jest, pytest, mocha, vitest, karma)
- **Build reactions** — quotes fire on build start and build failure
- **Debug end reaction** — quote fires when a debug session closes
- **Copilot detection** — typing-pause heuristic (1.5 s silence) and bulk-insertion heuristic (≥ 4 lines) trigger Copilot-aware quotes and a pulsing badge
- 40+ new quotes across rage, test, build, debug, and Copilot contexts
- `retainContextWhenHidden: true` — webview stays alive when sidebar is hidden; audio stays buffered
- Typing latency fix: 400 ms debounce replaces the old 50-keystroke counter
- Browser autoplay priming — rage alarm reliably plays when Rage Mode fires from a VS Code event
- Original copyright-free audio replacing all prior audio files
- Original Activity Bar icon (alpha-channel PNG helmet silhouette)
- MIT License

### Fixed
- Rage Mode now exits within ~500 ms of all workspace errors clearing (500 ms poll interval)
- Rage Mode threshold debounced to 3 s between counted error events — a single burst of `onDidChangeDiagnostics` callbacks no longer fills the threshold instantly
- Saber audio resets `currentTime` before each swing; toggle gates auto-swings too
- Removed dead `vaderImageUri` code referencing a non-existent image file

---

## [0.1.0] — Initial release

### Added
- Animated SVG Vader figure (breathing, eye glow, chest blink, cape sway, lightsaber idle)
- Inline lightsaber with swing animation and sound effect
- Dark march toggle (MP3, looping)
- 70+ arrogant quotes across 20 event contexts
- Editor event listeners: save, open, text change, diagnostics, terminal, debug, idle
- GitHub Copilot activity detection


### Added
- **Breathing audio** — Vader's iconic breathing loop, independently toggleable
- **Rage alarm audio** — alarm sound plays during Rage Mode, independently toggleable
- **2×2 audio control grid** — all four sounds (Dark March, Breathing, Saber, Rage Alarm) in a clean, aligned button row replacing the old stacked pills
- Browser autoplay priming: rage alarm is primed from within the toggle click so it reliably plays when Rage Mode fires from a VS Code event (bypasses browser autoplay restrictions)

### Fixed
- Rage Mode exiting instantly (within ~500ms) when all workspace errors clear, via a 500ms poll interval rather than waiting for the next diagnostic event
- Rage Mode threshold debounced to 3 s between counted error events — a single burst of `onDidChangeDiagnostics` callbacks from one typo no longer fills the threshold
- Removed hardcoded "FIVE ERRORS" quote text that showed regardless of actual error count

---

## [0.2.1] — 2026-04-18

### Changed
- Rage Mode auto-reset reduced from 15 s to 10 s
- Error accumulation window reduced from 30 s to 20 s
- `checkRageClear()` added: exits Rage Mode the moment workspace has zero errors (no longer relies solely on the auto-reset timer)

---

## [0.2.0] — 2026-04-18

### Added
- **Rage Mode** — 5 errors within 20 s triggers full rage: body shake, eye flicker, red panel pulse, `⚠ RAGE MODE` badge, special quote
- **Test reactions** — `testPass` and `testFail` events fire when test tasks exit (detects jest, pytest, mocha, vitest, karma, and the Test task group)
- **Build reactions** — `buildStart` and `buildFail` events
- **Debug end reaction** — quote fires when a debug session closes
- 40+ new quotes across rage, test pass/fail, build start/fail, and debug-end contexts
- Typing latency fix: replaced 50-keystroke counter with a 400 ms debounce — Vader reacts within half a second of you pausing

### Changed
- `sendMessage` type widened to accept `active?: boolean`

---

## [0.1.9 → 0.1.5] — Prior sessions

### Added
- `retainContextWhenHidden: true` — webview stays alive in memory when sidebar is hidden; audio stays buffered
- Copilot detection: typing-pause heuristic (1.5 s silence → `copilotStart`) and bulk-insertion heuristic (≥4 lines with code patterns → `copilotDone`)
- Copilot badge in webview that pulses while Copilot is generating

### Fixed
- Activity Bar icon: switched from JPEG (no alpha channel) to PNG with transparent background
- Saber audio: removed conflicting pre-play; properly resets `currentTime` before each swing
- Saber toggle fully gates sounds — auto-swings also respect the toggle

---

## [0.1.0] — Initial release

### Added
- Animated SVG Vader figure (breathing, eye glow, chest blink, cape sway, lightsaber idle)
- Inline lightsaber in SVG with swing animation and sound effect
- Dark march toggle (MP3, looping)
- 70+ arrogant quotes across 20 event contexts
- Editor event listeners: save, open, text change, diagnostics, terminal, debug, idle
- GitHub Copilot activity detection
