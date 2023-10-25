---
id: load
title: Load
tags:
  - Dynamic Tags
  - URLs
  - Assets
---
Use the `Load` tag to load a template or another kind of file.

Set the `file` attribute with the path to the file.

```html
<Load file="index.html" />
```

File paths typically include `/` (forward slash), so remember to quote the `file` attribute value.

### From

Optionally, use the `from` attribute to get the file from a path.

```html
<Load from=content file="/views/index.html" />
```

It takes the name of a [path variable](/docs/dynamic-tags/path).