---
id: shortcode
title: Shortcode
tags:
  - Dynamic Tags
---
Use the `Shortcode` tag to render shortcodes inside a template.

## Block with shortcodes

If you pass no attributes to the `Shortcode` tag, it will simply render the inner content with any shortcodes.

```html
<Shortcode>
  [a_shortcode]
  [another_shortcode]
</Shortcode>
```

## Single shortcode

To run a single shortcode, pass its name as the first attribute.

```html
<Shortcode audio src="example.mp3" />
```

The rest of tag attributes will be passed to the shortcode.

Use the "open tag" syntax to pass inner content, for shortcodes that support it.

```html
<Shortcode example_shortcode>
  Content to pass to shortcode
</Shortcode>
```

## Render dynamic tags

By default, dynamic tags in the inner content are rendered _before_ running the shortcode.

To prevent rendering them at all, use `render=false`.

To render dynamic tags after running the shortcode, use `render=after`.