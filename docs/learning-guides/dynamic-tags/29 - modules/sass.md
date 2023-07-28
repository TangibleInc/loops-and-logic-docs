---
id: sass
title: SASS
tags:
  - Dynamic Tags
  - Modules
---

This module extends the `style` tag to render the Sass styling language ([reference](https://sass-lang.com/)).

Note that this tag is a module, which means that it loads an additional library when used.

```scss
<style type=sass>

$sunny: #fed62d;

body {
  background-color: $sunny;
}

</style>
```