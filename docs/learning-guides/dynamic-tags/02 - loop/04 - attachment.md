---
id: attachment
title: Attachment
tags:
  - Dynamic Tags
  - Loop
---

For loop type `attachment`, here are the query parameters and fields.

## Supported query parameters
import LoopParams from './_loop-params.md';

<LoopParams />

## Supported fields
import LoopFields from './_loop-fields.md';

<LoopFields />

### Attachment loop fields
*    `alt` - alt field of an image, useful for dynamically filling the alt attribute of an img tag
*    `caption` - Caption
*    `description` - Description
*    `extension` - File extension
*    `filename` - File name
*    `size` - File size
*    `sizes` - Responsive image attribute "sizes" for img tag - Accepts optional attribute "size" for image size name (default is "medium"), or width and height values in pixels separated by comma like "400,300"
*    `srcset` - Responsive image attribute "srcset" for img tag - Accepts optional attribute "size" for image size name (default is "medium"), or width and height values in pixels separated by comma like "400,300"
*    `type` - File type
*    `url` - URL - Accepts optional attribute "size" for image size

## Examples

- [How to display a custom field that contains an image](/how-to/custom-image-fields)  
- [How to adjust the resolution or size of a featured image](/docs/how-to/resolution-size-featured-image)