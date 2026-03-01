# Copy Path and Selection

A VS Code extension that copies the file path and selection range to the clipboard in a compact, precise format — useful when referencing code in AI coding assistants or any tool that understands file references.

## Usage

Make a selection (or just place your cursor) in any editor, then press `Ctrl+Alt+Cmd+C`.

The reference is copied to your clipboard:

| Scenario              | Output                    |
| --------------------- | ------------------------- |
| Cursor only           | `src/index.js:12`         |
| Single line selection | `src/index.js:12:5-22`    |
| Multi-line selection  | `src/index.js:12:5-15:22` |

## Keybinding

| Platform        | Shortcut         |
| --------------- | ---------------- |
| Mac             | `Ctrl+Alt+Cmd+C` |
| Windows / Linux | `Ctrl+Alt+Cmd+C` |

You can override this in VS Code via **Preferences → Keyboard Shortcuts** — search for `Copy Selection Reference for Model`.

## Installation

### From source

```bash
npm install
npm run package
code --install-extension copy-path-selection-0.0.1.vsix
```

## License

MIT
