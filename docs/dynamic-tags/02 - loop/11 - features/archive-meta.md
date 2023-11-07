---
id: archive-meta
title: Archive pages
tags:
  - Archive
  - Taxonomy
  - Author
---

These are special loops that are available for archive pages: author, post type, and taxonomy term.

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

- [How to display term fields on a taxonomy term archive](/how-to/term-fields-on-archive)