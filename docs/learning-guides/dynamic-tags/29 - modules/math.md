---
id: math
title: Math
tags:
  - Dynamic Tags
  - Calculation
  - Modules
---
The `Math` tag evaluates mathematical expressions.

```html
The total is $<Math><Field price /> + <Field tax /></Math>.
```

It supports basic arithmetic operations, with template tags inside.

Note that this tag is a module, which means that it loads an additional library when used.

## Variables

Use the equal sign `=` to assign a value to a variable of any name.

```html
<Math>total = 0</Math>
```

This can be used to calculate things based on loops.

```html
<Math>total = 0</Math>

<Loop type=product>
  <Math>total = total + <Field price /></Math>
</Loop>

Total: <Math>total</Math>
```

## Math variable type

Use `Get` and `Set` tag with "math" attribute to pass variables from/to the `Math` tag.

It's just a different way to get and set variables.

```html
<Get math=total />
<Set math=total>0</Set>
```

## Examples

- [How to add up the count of a parent taxonomy term with the count of all its children](/docs/how-to/count-hierarchical-terms)