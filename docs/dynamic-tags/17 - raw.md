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

This tag can be used to stop Loops & logic from parsing incorrect HTML syntax, like `<<a <b>>` or static tags and to simply render contents of the `Raw` tag as literal text. It may be necessary in some situations when HTML tags are being passed within an attribute value.

```html
<Set html><Raw><a href="https://example.org">world</a></Raw></Set>

<Format replace="world" with="{Get html}">Hello world</Format>
```

