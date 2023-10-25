---
id: meta
title: Meta
tags:
  - Dynamic Tags
  - SEO
---
Use the `Meta` tag to generate SEO meta tags.

```html
<Meta title><Field title /> | <Site name /></Meta>

<Meta description><Format length=60><Field content format=false /></Format></Meta>

<Meta image><Field image /></Meta>
```

This is suitable for use with the Tangible Views theme, which renders templates before the `<head>` tag, where the meta tags belong.

## Fields

Available fields are:

- `title` - Page title
    
    To set the browser tab title differently, use the `<title>` tag, which takes precedence over `<Meta title>`.
    
- `author` - Author name
    
- `description` - Page description
    
- `image` - Featured image URL
    

## Open graph and Twitter

For all available fields, corresponding `og:` and `twitter:` meta tags are generated.