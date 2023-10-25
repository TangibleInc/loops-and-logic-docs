---
id: raw
title: Raw
tags:
  - Dynamic Tags
  - Formatting
---
Use the `Raw` tag to surround content that you do not want to be rendered.

```html
<Raw>
  Template tags will not be rendered here.
</Raw>
```

This tag can also be used within an attribute's value, such as when working with HTML data or regular expressions.

```html
<If field="title" matches_pattern value="{Raw}/.{25,}/{/Raw}">
  This title is over 25 characters.
</If>
```