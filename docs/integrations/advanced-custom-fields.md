---
id: acf
title: Advanced Custom Fields
tags:
  - Integration
---
The `Loop` and `Field` tags support the following ACF field types.

## Basic fields

These field types can be displayed simply with the `Field` tag.

- Text
- Textarea
- Number
- Email
- URL
- Password

## Content fields

### WYSIWYG editor

Use the `acf_editor` attribute.

```html
<Field acf_editor=field_name />
```

### OEmbed

Use the `acf_oembed` attribute.

```html
<Field acf_oembed=field_name />
```

### Template

This is for the ACF field type "Tangible Template" (under Content section) added by the plugin.

Use the `acf_template` or `template` attribute to render the template field.

```html
<Field acf_template=field_name />
```

## Date fields

### Date, date-time, and time picker

Use the `acf_date`, `acf_date_time`, or `acf_time` attribute.

```html
<Field acf_date=field_name />
<Field acf_date_time=field_name />
```

#### Date format

Optionally, use the `format` and `locale` attributes to apply date formatting.

```html
<Field acf_date=field_name format="l j F Y" locale=fr />
```

For format syntax and available locales, see [Format: Date](/docs/dynamic-tags/format#date).

Use `format=default` to use the site setting from Settings -> General -> Date Format.

## Choice

### Select

Use the `acf_select` attribute for a field with single selected value.

```html
<Field acf_select=field_name />
```

For multiple values, use the `Loop` tag.

```html
<Loop acf_select=field_name>
  <Field />
</Loop>
```

### Checkbox

Use the `Loop` tag and `acf_checkbox` attribute.

```html
<Loop acf_checkbox=field_name>
  <Field />
</Loop>
```

### Radio

Use the `acf_radio` attribute.

```html
<Field acf_radio=field_name />
```

### True/False

Use the `acf_true_false` attribute.

```html
<If acf_true_false=field_name>
  TRUE
<Else />
  FALSE
</If>
```

---

### Choice labels

Use the `Field` tag and `field=label` to get the label of the chosen value.

```html
<Field acf_select=field_name field=label />
```

Use the `Loop` tag and `field=labels` for fields with multiple values.

```html
<Loop acf_select=field_name field=labels>
  Label: <Field />
</Loop>
```

### Choices

Use the `Loop` tag and `field=choices` to loop through the available choices of a field.

```html
<Loop acf_select=field_name field=choices>
  Value: <Field value /><br/>
  Label: <Field label /><br/>
</Loop>
```

It is a list of choices with `value` and `label` fields.

## Relational

For these field types, use the `Loop` tag to get associated content.

Use the `Field` tag as a shortcut to get a subfield. For example:

```html
<Field acf_file=field_name field=title />
```

### File

Use the `acf_file` attribute.

```html
<Loop acf_file=field_name>
  <Field title />
</Loop>
```

```html
<Field acf_file=field_name field=url />
```

See [Attachment Loop](/docs/dynamic-tags/loop/attachment) for available fields.

### Image

Use the `acf_image` attribute.

```html
<Loop acf_image=field_name>
  <Field title />
</Loop>
```

```html
<Field acf_image=field_name field=url />
```

See [Attachment Loop](/docs/dynamic-tags/loop/attachment) for available fields.

### Link

Use the `acf_link` attribute.

```html
<Loop acf_link=field_name>
  <Field title />
</Loop>
```

```html
<Field acf_link=field_name field=url />
```

Available fields are: `url`, `title`, and `target`.

### Post object

Use the `acf_post` attribute.

```html
<Loop acf_post=field_name>
  <Field title />
</Loop>
```

See [Post Loop](/docs/dynamic-tags/loop/post) for available fields.

### Relationship

Use the `acf_relationship` attribute.

```html
<Loop acf_relationship=field_name>
  <Field title />
</Loop>
```

See [Post Loop](/docs/dynamic-tags/loop/post) for available fields.

### Taxonomy

Use the `acf_taxonomy` attribute.

```html
<Loop acf_taxonomy=field_name>
  <Field title />
</Loop>
```

See [Taxonomy Term Loop](/docs/dynamic-tags/loop/taxonomy-term) for available fields.

### User

Use the `acf_user` attribute.

```html
<Loop acf_user=field_name>
  <Field full_name />
</Loop>
```

See [User Loop](/docs/dynamic-tags/loop/user) for available fields.

### Gallery

Use the `acf_gallery` attribute.

```html
<Loop acf_gallery=field_name>
  <Field title />
</Loop>
```

See [Attachment Loop](/docs/dynamic-tags/loop/attachment) for available fields.

## Nested

### Repeater

Use the `acf_repeater` attribute.

```html
<Loop acf_repeater=field_name>
  <Field title />
</Loop>
```

All field types are supported inside a repeater loop, including another repeater field.

### Flexible content

Use the `acf_flexible` attribute.

```html
<Loop acf_flexible=field_name>
  <Field title />
</Loop>
```

All field types are supported inside a flexible content loop, including another flexible content field.

#### Layout

Use the field `layout` to check which layout was chosen for each item.

```html
<If field=layout value=layout_1>
  Layout 1
<Else if field=layout value=layout_2 />
  Layout 2
</If>
```

### Group

To display multiple fields, use the `acf_group` attribute.

```html
<Loop acf_group=group_field_name>
  <Field sub_field_name />
  <Field another_sub_field />
</Loop>
```

To display a single field within the group, combine the group field name with the sub-field name using an underscore.

```markup
<Field group_field_name_sub_field_name />
```

## Fields from options page

ACF provides a function called [acf_add_options_page](https://www.advancedcustomfields.com/resources/acf_add_options_page/) to add options pages to store global settings.

To get fields from an options page, use the Field or Loop tag with the attribute `from=options`.