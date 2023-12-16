---
id: legacy-controls
title: Legacy Controls
tags:
- Blocks
- Controls
---
Here are the legacy control types.

- [Align](#align)
- [Color](#color)
- [Date](#date)
- [Dimension](#dimension)
- [Gallery](#gallery)
- [Gradient](#gradient)
- [Image](#image)
- [Number](#number)
- [Post Query](#post-query)
- [Rich text editor](#editor)
- [Select](#select)
- [Switch](#switch)
- [Text](#text)
- [Select2](#select2)

## Displaying a legacy control value

The control values that the user enters (or selects) in legacy controls can be referenced as placeholders in HTML, Sass, or JavaScript.

Each placeholder is the control name surrounded by `{{` and `}}`.

The HTML template may look like this.

```html
<h1>{{ text }}</h1>
```

For Sass, the control value will also be defined as a variable starting with `$`.

```scss
h1 {
  color: $text-color;
}
```

Note that Sass styles are automatically wrapped in a unique class name (not shown in the code) to target the block only.

It's possible to get this unique class name in templates, scripts and styles by using the `{{ wrapper-class }}` value.

---

## Control types

### Align

```html
<Control type="align" name="align_control_name" label="Align" default="right" />
```

- Attributes
    - `default` - (optional) Accepted value: `right`, `center`, `left`
- Context
    - `template`
    - `style`
    - `script`

---

### Color

```html
<Control type="color" name="color_control_name" label="Color control" default="#FFFFFF" />
```

- Attributes
    - `alpha` - (optional) If opacity is enable - default `true`
    - `default` - (optional) Accepted value: `rgb()`, `rgba()`, `hex`
- Context
    - `template`
    - `style`
    - `script`

---

### Date

```html
<Control type="date" name="date_control_name" label="Date" format="Y-m-d H:i:s" />
```

- Attributes
    - `format` - (optional) Date format - default `d/m/Y`
- Context
    - `template`
    - `style`
    - `script`

---

### Dimension

```html
<Control type="dimension" name="dimension_control_name" label="Dimension control">
  <Key units>px,vh,vw</Key>
  <Key default_unit>px</Key>
</Control>
```

- Attributes
    - `default` - (optional) Default value - default `0,0,0,0` ( `default="0"` if `multiple_values` is `false` )
    - `units` - (optional) Accepted units - default `px`
    - `default_unit` - (optional) Default unit - default `px`
    - `multiple_values` - (optional) Enter 1 or 4 values - default `true`
- Subvalues
    - `top` - Top value
    - `right` - Right value
    - `bottom` - Bottom value
    - `left` - Left value
    - `unit` - Unit used
- Context
    - `template`
    - `style`
    - `script`

---

### Gallery

```html
<Control type="gallery" name="gallery_control_name" label="Gallery control" size="full" />
```

- Attributes
    - `default` - (optional) Attachment ID(s)
    - `size` - (optional) Size of the images - default `full`
- Subvalues
    - `ids` - Attachment ids
- Context
    - `template`
    - `style`
    - `script`

---

### Gradient

```html
<Control type="gradient" name="gradient_control_name" label="Gradient control" />
```

- Context
    - `template`
    - `style`
    - `script`

---

### Image

```html
<Control type="image" name="image_control_name" label="Image control">
  <Key default>https://ps.w.org/tangible-loops-and-logic/assets/banner-1544x500.jpg</Key>
</Control>
```

- Attributes
    - `default` - (optional) Accepted value: `url`, `attachment id`
- Subvalues
    - `id` - Get attachment id
    - `title` - Get attachment title
    - `alt` - Get attachment alt
    - `caption` - Get attachment caption
    - `description` - Get attachment description
- Context:
    - `template`
    - `style`
    - `script`

---

### Number

```html
<Control type="number" name="number_control_name" label="Number control" min="0" max="100">
  <Key default>50</Key>
</Control>
```

- Attributes
    - `min` - (optional) Minimum value. Example : if min equal 0, so your number can't be less than 0.
    - `max` - (optional) Maximum value. Example : if max equal 100, so your number can't be better than 100.
- Context
    - `template`
    - `style`
    - `script`

---

### Post Query

```html
<Control type="post_query" name="post_query_control_name" label="Post query control" include_fields="taxonomy, type, order, orderby" />
```

- Attributes
    - `include_fields` - (optional) Fields displayed for query options - default `type, order, orderby`
- Context
    - `template`
    - `style`
    - `script`

---

### Rich text editor

```html
<Control type="editor" name="editor_control_name" label="Rich text editor control">
  <Key default>Some <strong>text</strong></Key>
</Control>
```

- Attributes
    - `default` - (optional) Accepted value: `html`
- Context
    - `template`

---

### Select

```html
<Control type="select" name="select_control_name" label="Select control" default="one">
  <Map options>
    <Key one>Option one</Key>
    <Key two>Option two</Key>
    <Key three>Option three</Key>
  </Map>
</Control>
```

- Attributes
    - `options` - (required) Value and label of the options
    - `multiple` - (optional) If the control allows mutiple values - default `false`
- Context
    - `template`
    - `style`
    - `script`

---

### Switch

```html
<Control type="switch" name="switch_control_name" label="Switch control">
  <Key value_on>on</Key>
  <Key label_on>On</Key>
  <Key value_off>off</Key>
  <Key label_off>Off</Key>
</Control>
```

In Beaver Builder, a switch control will be displayed as a select.

- Attributes
    - `value_on` - (optional) Value returned when switch enabled - default `on`
    - `value_off` - (optional) Value returned when switch disabled - default `off`
    - `label_on` - (optional) Text displayed in the builder when switch enabled - default `none`
    - `label_off` - (optional) Text displayed in the builder when switch disabled - default `none`
- Context
    - `template`
    - `style`
    - `script`

---

### Text

```html
<Control type="text" name="text_control_name" label="Text control" default="default text" />
```

- Context
    - `template`
    - `style`
    - `script` - In scripts, text will be outputed with quotes

---

### Select2

```html
<Control type="select2" name="select2_control_name" label="Select2" />
```

- Attributes
    - `multiple` - (optional) Select multiple value - default `false`
    - `options` - (optional) Options display in the select - default `none`
- Context
    - `template`
    - `style`
    - `script`