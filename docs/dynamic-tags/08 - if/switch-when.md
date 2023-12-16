---
id: switch-when
title: Switch and When
tags:
  - Logic
---
The `Switch` and `When` tags are shortcuts for combining multiple `If` conditions.

The basic structure is:

```html
<Switch field="field_name" is>
  <When value="1" />
    Value is 1.
  <When value="2" />
    Value is 2.
  <When />
    Value is something else.
</Switch>
```

How it works:

- Both tags can take any attributes of the `If` tag.
- The attributes of the `Switch` tag are combined with those of each `When` tag.
- An empty `When` tag is for matching when none of the previous conditions are true.

The above example should have the same result as:

```html
<If field="field_name" is value="1">
  Value is 1.
<Else if field="field_name" is value="2" />
  Value is 2.
<Else />
  Value is something else.
</If>
```