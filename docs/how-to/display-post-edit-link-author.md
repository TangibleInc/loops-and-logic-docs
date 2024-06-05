---
id: display-post-edit-link-author
title: How to display a post editing link only when the current user is the post's author
tags:
  - Conditional Logic
  - Author
  - User
  - Access Control
---
## The request

> I want to add a post edit link to posts and show those links to the post author only if they are logged in. [View original thread](https://discourse.tangible.one/t/display-if-user-logged-in-is-post-author/822)

## The solution

```html
<If user_field=name is value="{Field author_name}">
  <a href="{Field edit_url}">Edit post</a>
</If>
```

## The explanation

The first step is to create a conditional statement that renders true when the current user is a post's author. We can use `user_field=name` as the subject to check the user name of the currently logged-in user and then we can use `Field author_name` to get the author name of the current post. If those two match, we're golden!

The next step is to create a dynamic URL that should be rendered when our conditional logic is true. This is easy because there's a [post field](/dynamic-tags/loop/post#fields) called `edit_url` that we can use to dynamically fill the `href` value.
