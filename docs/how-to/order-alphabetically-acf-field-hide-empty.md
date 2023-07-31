---
id: order-alphabetically-acf-field-hide-empty
title: How to order terms alphabetically by ACF text field and hide empty terms
tags:
  - Order
  - Taxonomy
  - Filtering
  - ACF
---
## The request

> I’m displaying terms and (1) want to order them alphabetically by an ACF text field, not the term’s title; and (2) hide empty terms, i.e. those terms that were created but have not been assigned to any posts. [View initial thread](https://discourse.tangible.one/t/order-terms-alphabetically-by-acf-text-field-hide-empty-terms/270)

## The solution
```html
<Loop taxonomy=guest orderby_field=name_ordering hide_empty=true>
```

## The explanation

### (1) Order terms by a custom field alphabetically

The `orderby_field` parameter accepts a field name and orders the returned items (in this case taxonomy terms) alphabetically by the custom field. It's compatible with the post loop and the taxonomy_term loop for now.

### (2) Hide empty terms in a taxonomy_term loop

The `hide_terms` parameter (false by default) hides terms which have no associated posts. Use it by adding `hide_terms=true` to your loop tag.