---
id: string
title: What is a string?
description: Learn about strings in L&L
tags:
  - Reference
  - Terminology
  - Definition
---
A _string_ may not be a unique concept to the L&L templating language, but the term isn't often used in relation to HTML so it's worth defining. Simply put, a string is a type of data that consists of a sequence of characters. In the example below, the attribute values `some words` and `this <Format> tag is part of a string` are both strings. The letters and special characters are interpreted as literal text by L&L and don't have any special function.

```html
<Format replace="some words" with="this <Format> tag is part of  a string">
```
