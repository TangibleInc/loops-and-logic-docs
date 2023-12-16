---
id: embed
title: Embed
tags:
  - Dynamic Tags
  - Content
---
The `Embed` tag embeds HTML for a provided URL using oEmbed. oEmbed is an open format designed to allow embedding content from a website into another page.

Example:

```html
<Embed>https://vimeo.com/105089367</Embed>
```

For a list of supported oEmbed providers, see [Embeds | WordPress.org](https://wordpress.org/support/article/embeds/).

## Responsive

By default, the `Embed` tag includes a small script to make embedded content responsive. This supports content of any proportions.

Optionally, use the `ratio` attribute to provide a fixed ratio of width to height, separated by `:` a colon.

```html
<Embed ratio="1:1">..</Embed>
<Embed ratio="4:3">..</Embed>
```

This will use a CSS solution to make content responsive, which is more efficient than using JavaScript.