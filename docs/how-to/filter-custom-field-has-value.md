---
id: filter-custom-field-has-value
title: Only show posts with a certain custom field filled out
tags:
  - Filtering
  - ACF
---
## Request

> How do I only show posts with a certain ACF or custom field filled out? [View original thread](https://discourse.tangible.one/t/displaying-only-the-items-in-a-loop-that-have-a-certain-field-filled-out/329)

## Solution

```html
<Loop type=post_type_name custom_field=field_name>
  <Field title />
</Loop>
```

## Explanation

While this can be done with conditional logic, the best way to do this is by adding a `custom_field` query parameter that filters the query to only display items for which a specific field exists. Since we're simply wanting to show posts for which a certain custom field exists, there's no need to add any other parameters.

That being said, if we wanted to instead display posts in which a certain field matched a specific value, we could use `custom_field_value="some value"`. We could use the parameter `custom_field_compare` to choose how we're comparing the custom field to the value we're specifying, such as `custom_field_compare=not` if we wanted to only show posts that had a custom field that _didn't_ match the value specified in the `custom_field_value` parameter.
