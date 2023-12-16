---
id: array
title: What is an array?
description: Learn about arrays in L&L
tags:
  - Reference
  - Terminology
  - Definition
---
Common in many languages (such as PHP, the language in which WordPress itself is built), the term _array_ is also sometimes simply called a list. It's used to refer to data that represents a collection of elements. In L&L, arrays are separated by commas without spaces. In the example below, the value of the `category` attribute contains an array or a comma-separated list. Since there are no spaces and commas are not a special character in L&L, arrays within the value of attributes can be written with or without quotes around them. Attributes that accept arrays in their value are indicated in the documentation.

```html
<Loop type=post category=recipes,crafts,decor>
```

## What is an associative array?

_Associative arrays_ are similar to regular arrays and are sometimes called maps. Each item in the array contains a key which is associated with a value, also known as a key-value pair. Associative arrays are less common when working with L&L, but they can be created or looped through using [the `Map` tag](/dynamic-tags/map).