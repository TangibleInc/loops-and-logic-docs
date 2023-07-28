---
id: aliases
title: Aliases
tags:
- Blocks
---
## Context

Alias use Controls or Bases to exist. It can't be create / used without them.

It uses the same structure as Controls.

Here are the available alias types.

- [User select](#user-select)
- [Post select](#post-select)

---

## Alias types

### User select

```html
<Control type="user_select" name="user_select_control_name" label="user select" default="15" />
```

- Attributes
    - `default` - (optional) Accepted value : `User ID`
    - `multiple` - (optional) Possibility to choose multiple value - default `false`
    - `result_length` - (optional) Number of result display in the select - default `10`
    - `role` - (optional) Get user by role - default `none`
- Context
    - `template`
    - `script`

---

### Post select

```html
<Control type="post_select" name="post_select_control_name" label="post select" default="18" />
```

- Attributes
    - `default` - (optional) Accepted value : `Post ID`
    - `multiple` - (optional) Possibility to choose multiple value - default `false`
    - `result_length` - (optional) Number of result display in the select - default `10`
    - `post_type` - (optional) Get post by type(s) - default `post`
    - `result_order` - (optional) Result order - default `ASC`
- Context
    - `template`
    - `script`