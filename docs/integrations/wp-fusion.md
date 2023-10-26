---
id: wp-fusion
title: WP Fusion
tags:
  - Integration
slug: /integrations/wp-fusion
---
The [WP Fusion](https://wpfusion.com) integration adds the following fields to the [`user` loop type](/docs/dynamic-tags/loop/user). These fields will generally be used to create conditional logic to check whether a user has specific tags or has access to a specific post.

- `wp_fusion_tags` - An array of tag IDs
<br/>Type: array
- `wp_fusion_access` - User has access to current post
<br/>Type: boolean

## Tags

The `wp_fusion_tags` field can be used to check whether a user has a specific tag applied.

```html
<If user_field=wp_fusion_tags includes value="123">
  User has tag ID 123
<Else />
  User does not have tag.
</If>
```

Create powerful logic using any of the [list comparisons](/docs/dynamic-tags/if/#when-the-subject-is-a-list).

```html
<h2>Users who have made a purchase</h2>
<Loop type=user field=wp_fusion_tags field_compare=any_starts_with field_value=purchased>
  <Field full_name />
</Loop>
```

## Access

The `wp_fusion_access` field can be used to check whether a user has access to the current post.

```html
<If user_field=wp_fusion_access>
  User has access to current post.
<Else />
  User does not have access.
</If>
```