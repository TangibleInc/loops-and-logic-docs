---
id: user
title: User
tags:
  - Dynamic Tags
  - Shortcut
  - Loop
---
The `User` tag is a shortcut to get a field from the current user.

```html
<User full_name />
```

The above is the same as:

```html
<Loop type=user id=current>
  <Field full_name />
</Loop>
```

See [the User loop type](/dynamic-tags/Loop/user#fields) for available fields.