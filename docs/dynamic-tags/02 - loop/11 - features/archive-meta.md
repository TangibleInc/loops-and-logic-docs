---
id: archive-meta
title: Getting metadata from the current archive
tags:
  - Archive
  - Taxonomy
  - Author
---
- `archive_author` - On an author archive page, looping through this field creates a user loop of the current author
- `archive_post_type` - On a post type archive page, looping through this field creates a post loop of the current post type  
- `archive_term` - On a taxonomy archive page, looping through this field creates a taxonomy term loop of the current term

```html
<Loop field=archive_term>
	<Set term_id><Field id /></Set>
	<h1><Field title /></h1>
	<p><Field description /></p>
</Loop>
```

## Examples

- [How to display term fields on a taxonomy term archive](/docs/how-to/term-fields-on-archive)