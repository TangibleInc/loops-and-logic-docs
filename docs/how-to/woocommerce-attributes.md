---
id: woocommerce-attributes
title: How to display WooCommerce attributes
tags:
  - Woocommerce
  - Taxonomy
  - Loop
---
## The request

> How would I got about displaying the WooCommerce attributes associated with the current product?

## The solution

```html
<Loop type=taxonomy_term taxonomy=pa_flavors post=current>
   <Field title />
</Loop>
```

## The explanation

WooCommerce saves attributes as custom taxonomies, prefixed with `pa_`. Attributes can be accessed with a [taxonomy_term loop](/dynamic-tags/loop/taxonomy-term) just like any other taxonomy. The solution above presents a loop that filters taxonomy terms by the current post id and the taxonomy name `pa_flavors` and displays the term title.