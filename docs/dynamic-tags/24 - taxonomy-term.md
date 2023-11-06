---
id: taxonomy-term
title: Taxonomy and Term
tags:
  - Dynamic Tags
  - Shortcuts
  - Loop
---
The `Taxonomy` tag is a shortcut for creating a taxonomy term loop from the current post.

```html
<Taxonomy category>
  <Term title />
</Taxonomy>
```

The `Term` tag gets a field from the current taxonomy term.

The above example is the same as:

```html
<Loop taxonomy=category post=current>
  <Field title />
</Loop>
```

See [the Taxonomy Term loop type](/dynamic-tags/Loop/taxonomy-term#fields) for available fields.