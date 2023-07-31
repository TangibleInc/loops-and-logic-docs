---
id: exists
title: Exists
tags:
  - Dynamic Tags
  - How-to
  - Loop
---

Use the `If` tag with `loop exists` to check if a loop has any items.

It is followed by a list of attributes for the Loop tag.

```html
<If loop exists type=post name=example>
```

Inside the condition, use the Loop tag without attributes to loop through the result.

```html
<If loop exists type=post name=example>
  <Loop>
    <Field title />
    ...
  </Loop>
</If>
```

For example, this lets you wrap the loop with a container element only when it has items.

## Else

Use the `Else` tag for when the loop has no result.

```html
<If loop exists type=post name=example>
  <Loop>
    ...
  </Loop>
<Else />
  Nothing found.
</If>
```

## Not exists

Use the `not` attribute to only check if nothing exists.

```html
<If not loop exists type=post name=example>
  Nothing found.
</If>
```

This may be useful if you don't need to loop through the results.

## Examples

- [How to show posts only if they exist and display a message if they don’t exist](/docs/how-to/no-posts-found-conditional)
- [How to add up the count of a parent taxonomy term with the count of all its children](/docs/how-to/count-hierarchical-terms)