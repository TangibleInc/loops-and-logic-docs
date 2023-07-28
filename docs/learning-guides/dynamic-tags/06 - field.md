---
id: field
title: Field
tags:
  - Dynamic Tags
  - How-to
  - Field
---

The Field tag is used to display the value of a field. The name of the field is passed as the first attribute, or by the attribute name. The following two tags will both result in the same output.
```html
<Field title />
<Field name=title />
```
The field names available will depend on the context in which the Field tag is placed. See the Loop tag and each loop type's reference page for a list of available fields. For example, if the Field tag is placed within a post loop or on a post page, refer to the documentation for the post loop to see the available fields. Custom fields can also be displayed using the field's name.

If the Field tag is placed inside a loop, it gets a field value from the current item in the loop. For example, the following template would display the title field of each post in the loop.
```html
<Loop type=post count=3>
  <Field title />
</Loop>
```html
If there's no loop, it gets the field from the current post or page. For example, if the following template were placed on a page, it would display the publish date of the page using the format specified in the Date tag.
```html
<Date format="F j, Y, g:i a">
  <Field publish_date />
</Date>
```

## Loop type shortcut

Use the type attribute with id or name to get a field from a specific post.
```html
<Field title type=page name=example />
```

## Tag-attributes
This attribute simply renders its value as an attribute. It can be used to render multiple attributes, either as value-less keys (sometimes called boolean attributes, shown in the example below) or as key/value pairs.

In the example below, the audio file will only autoplay and loop if the user visiting the page is logged in.

```html
<audio src="music.mp3" tag-attributes="{If user}autoplay loop{/If}"></audio>
```

If the user is logged in, the HTML output will be:

```html
<audio controls src="music.mp3" autoplay loop></audio>
```