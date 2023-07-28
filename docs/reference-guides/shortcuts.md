---
id: shortcuts
title: Template editor shortcuts
description: Become an L&L power-user with these shortcuts
tags:
  - Reference
  - Keyboard Shortcuts
---
Become an L&L power-user with these shortcuts

A template editor based on [CodeMirror](https://codemirror.net/index.html) is included.

It comes with a set of add-ons, including syntax highlight, lint/hinting, and [Emmet abbreviations](https://docs.emmet.io/abbreviations/).

## Keyboard shortcuts

Here is a list of common keyboard shortcuts.

* <kbd>Enter</kbd> - Insert a new line and auto-indent the new line.
* <kbd>Tab</kbd> - Indent/expand Emmet abbreviation
  
    - If something is selected, indent it by one indent unit.
    - If nothing is selected, insert a tab character.
    - If tab is pressed after an [Emmet abbreviation](https://docs.emmet.io/abbreviations/), it is expanded.
- <kbd>Shift</kbd> + <kbd>Tab</kbd> - Auto-indent the current line or selection.
- <kbd>Home</kbd> - Move to the start of the text on the line, or if we are already there, to the actual start of the line (including whitespace).
- <kbd>Ctrl</kbd> + <kbd>S</kbd> (PC), <kbd>⌘</kbd> + <kbd>S</kbd> (Mac) - Save
- <kbd>Ctrl</kbd> + <kbd>A</kbd> (PC), <kbd>⌘</kbd> + <kbd>A</kbd> (Mac) - Select the whole content of the editor.
- <kbd>Ctrl</kbd> + <kbd>D</kbd> (PC), <kbd>⌘</kbd> + <kbd>D</kbd> (Mac) - Deletes the whole line under the cursor, including newline at the end.
- <kbd>Ctrl</kbd> + <kbd>Z</kbd> (PC), <kbd>⌘</kbd> + <kbd>Z</kbd> (Mac) - Undo the last change.
- <kbd>Ctrl</kbd> + <kbd>Y</kbd> (PC), <kbd>⌘</kbd> + <kbd>Y</kbd> (Mac) - Redo the last undone change.
- <kbd>Ctrl</kbd> + <kbd>Home</kbd> (PC), <kbd>⌘</kbd> + <kbd>Up</kbd> (Mac), <kbd>⌘</kbd> + <kbd>Home</kbd> (Mac) - Move the cursor to the start of the document.
- <kbd>Ctrl</kbd> + <kbd>End</kbd> (PC), <kbd>⌘</kbd> + <kbd>End</kbd> (Mac), <kbd>⌘</kbd> + <kbd>Down</kbd> (Mac) - Move the cursor to the end of the document.
- <kbd>Alt</kbd> + <kbd>Left</kbd> (PC), <kbd>Ctrl</kbd> + <kbd>A</kbd> (Mac) - Move the cursor to the start of the line.
- <kbd>Alt</kbd> + <kbd>Right</kbd> (PC), <kbd>Ctrl</kbd> + <kbd>E</kbd> (Mac) - Move the cursor to the end of the line.
- <kbd>Ctrl</kbd> + <kbd>]</kbd> (PC), <kbd>⌘</kbd> + <kbd>]</kbd> (Mac) - Indent the current line or selection by one indent unit.
- <kbd>Ctrl</kbd> + <kbd>[</kbd> (PC), <kbd>⌘</kbd> + <kbd>[</kbd> (Mac) - Dedent the current line or selection by one indent unit.

See [here](https://codemirror.net/doc/manual.html#commands) for the complete list.