---
id: prism
title: Prism
tags:
  - Dynamic Tags
  - Modules
  - Content
---
The `Prism` tag is a syntax highligher based on [PrismJS](https://prismjs.com).

It produces code blocks like below.

```html
<div class="example">...</div>
```

Note that this tag is a module, which means that it loads an additional library when used.

#### Example

```html
<Prism lang=html>
<div class="example">...</div>
</Prism>
```

Note that the immediate new line after the open tag is ignored.

The code inside must not be escaped - for example, no need to replace `<` with `&lt;`.

Indents are literally passed to the code block.

### Language

The `lang` property defines the language of the code.

Currently supported are:

- `html`
- `js`, `jsx`, `ts`, `tsx`
- `css`, `scss`
- `php`
- `json`, `bash`, `shell`