---
id: resolution-size-featured-image
title: How to adjust the resolution or size of a featured image
tags:
  - Image
  - Performance
---
## The request
> Is it possible to select the render size of a featured image field? [See original thread](https://wordpress.org/support/topic/can-i-choose-the-render-size-of-an-image-field/#post-16030776)

## The solution

```html
<img src="{Field image_url size=thumbnail}" alt="{Field image_alt}" width="50">
```

```html
<img src="{Field image_url}" sizes="{Field image_sizes}" srcset="{Field image_srcset}" alt="{Field image_alt}" width="50">
```

## The explanation

The fastest way to display a post's featured image with L&L is to simply write `<Field image />`. But what happens when we want a bit more control over the resolution of the rendered image or the size it gets displayed in the browser? Instead of reinventing the wheel, the best approach is to simply use HTML's `img` tag and then use L&L's dynamic tags to fill in its attributes. When working with the post's featured image, you can dynamically fill any values you need using the `Field` tag with the `image_*` attribute (noted [here](/dynamic-tags/loop/post#core-fields)) where that asterisk can be replaced by any field available in the [attachment loop](/dynamic-tags/loop/attachment#attachment-loop-fields). If you simply want to use your site's default resolution for the image and adjust the size at which the image is displayed, the basic `width` or `height` attributes should be all you need. However, if you want to modify the actual resolution that's sent to a user's browser, there are two approaches to this.

The first approach is to use the `size` attribute that accompanies the `image_url` field, as documented in the attachment loop. In the value of this attribute, you can specify any of the [default WordPress image sizes](https://kinsta.com/blog/wordpress-image-sizes/#what-are-the-default-wordpress-image-sizes) or other image sizes you've added to your site. The second approach is to use the `img` tag's `sizes` and `srcset` attributes to [render different image resolutions on different screen sizes](https://developer.mozilla.org/en-US/Learn/HTML/Multimedia_and_embedding/Responsive_images#resolution_switching_different_sizes). While the latter is generally the best approach for performance and responsiveness, it may not be necessary in all cases.

If the image you're working with isn't the post's featured image but is instead a custom field that contains an image, the same process applies, but [you'll need to open an attachment loop to get data from the image](/how-to/custom-image-fields).