---
id: times
title: Times
tags:
  - Dynamic Tags
  - Loop
---
The loop type `times` simply repeats the content a given number of times.

```html
<Loop times=5>
  A
</Loop>
```

The above will show: `AAAAA`.

Use [the `loop` variable type](/dynamic-tags/loop/features/variables#loop-variable-type) to get the current loop count.

```html
<Loop times=5>
  <Get loop=count />
</Loop>
```

The above will show: `12345`.