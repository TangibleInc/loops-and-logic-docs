---
id: custom-image-fields
title: How to display a custom field that contains an image
tags:
  - Image
  - ACF
---
## The request

> I am using a user loop and I have ACF fields on the users. Text fields are working, but as you can see below, I have a custom field for headshot, and even though the ACF field is set to return image URL, it will only return the image ID. So I’m getting this after the template is rendered on the front end:
> 
> ```html
> <img src="18986">
> ```
> 
> Here is my loop:
> 
```html
<Loop acf_user=resource_user>
  <div class="speaker aiq-speaker">
	<img src="{Field author_headshot}">
	<div class="speaker-info">
	  <div><Field full_name /></div>
	  <Field position-title />
	</div>
  </div>
</Loop>
```
> How to I render the image URL instead of the image ID? [See original thread](https://discourse.tangible.one/t/acf-user-field-array-subfield/446/)

## The solution

```html
<Loop acf_user=resource_user>
  <div class="speaker aiq-speaker">
    <Loop type=attachment id="{Field author_headshot}">
      <img src="{Field url}" />
    </Loop>
    <div class="speaker-info">
      <div><Field full_name /></div>
      <Field position-title />
    </div>
  </div>
</Loop>
```

## The explanation

The important part of the template to pay attention to in the request is `<img src="{Field author_headshot}">`. This is placed directly inside a user loop and since this `author_headshot` field is an image field, we might expect to simply be able to display the image by rendering it with the `Field` tag, just like any other field. As this user found out, that doesn't work. So why is that?

The way WordPress works is that when you upload an image to a custom field you’ve created, you’re not actually adding an image directly to that field. Instead, you’re creating a new “attachment” post (attachments are a unique [default WordPress post type](https://developer.wordpress.org/themes/basics/post-types/#default-post-types) just like pages and posts) and you’re then telling WordPress that a certain user has an attachment post associated with it and WordPress can find that attachment using a certain post ID. That’s why when we use the `Field author_headshot` tag to try to grab the image, the only thing being displayed is the ID of that attachment. The attachment post ID is the only information that the user post has within it and all other information about the image, such as its URL, its alt text, and more is saved in the attachment post.  

The way to get the image is pretty simple, it just requires creating another loop to tell WordPress to go grab the actual image URL that’s associated with a given attachment post ID. In practice, that would look like the solution above where we're creating an attachment loop based on the post ID in the current user's `author_headshot` field (`<Loop type=attachment id="{Field author_headshot}">`) and we're getting any of [the fields available in an attachment loop](/docs/learning-guides/dynamic-tags/loop/attachment#attachment-loop-fields), in this case, the `url` field.

Now you may be asking yourself “why do I need a nested attachment loop to do this when normally I can just use tags like `<Field image>` to grab a post’s featured image directly without an attachment loop?” Well, it turns out that featured images are image arrays, which are saved differently by WordPress than image attachments and therefore don’t require a separate search through the database to get the featured image.  

### Different ways to display image fields

L&L is designed to be flexible and intuitive, which means that in some cases there are multiple ways of achieving the same output. If you're working with an image field generated through ACF, you may notice that the docs suggest a [special shortened syntax](/docs/learning-guides/integrations/acf#image) that can display all the same fields as the attachment loop. Choose whichever method fits your situation best! As a practical example, the following three templates will work the exact same way. 

This template uses ACF-specific syntax.

```html
<Loop acf_image=my_image_field>
  <img src="{Field url}" srcset="{Field srcset}">
</Loop>
```

The template below results in the exact same output as the one above but uses a more generic syntax that isn't ACF-specific.

```html
<Loop type=attachment id="{Field my_image_field}">
  <img src="{Field url}" srcset="{Field srcset}">
</Loop>
```

And again, the template below results in the exact same output. Keep in mind that in this particular example that's displaying data from two fields, the syntax below essentially creates two separate loops to get the field data, which isn’t as efficient as the options above, but the resulting output is identical.  

```html
<img src="{Field acf_image=my_image_field field=url}" srcset="{Field acf_image=my_image_field field=srcset}">
```