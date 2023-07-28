---
id: exit-catch
title: Exit and Catch
tags:
  - Dynamic Tags
  - Logic
---

The `Exit` tag exits from the current template post or file, ignoring the rest of the content.

```html
<If field=name value=something>
  <Exit />
</If>

This part will display only if condition above did not match.
```

It works similarly to a `return` statement in other programming languages.

#### Closing tags

It can be safely used inside HTML tags that need to be closed.

```html
<div>
  <Exit />
</div>
```

The above will correctly close the `div` tag.

## Catch

The `Catch` tag can be used to catch any exits inside of it.

```html
<Catch>

  <Exit />

  This will not show because it's after exit.
</Catch>

This will show because it's after exit was caught.
```