---
id: integrations
title: Integrations
tags:
  - Integrations
slug: /integrations
---
The dynamic tags and conditions included in [the free version of Loops & Logic](https://wordpress.org/plugins/tangible-loops-and-logic/) work with all core WordPress post types as well as custom post types. Third-party plugins often use unique data structures so we're currently building integrations that simplify working with their data in the template system.

Some integrations will be included in the **free version** and others that require more complex development to support will be included in a **Pro plugin**. Premium integrations are currently being tested by beta users through the [Tangible Blocks beta](https://loopsandlogic.com/tangible-blocks/).

## Included in free version

- **Advanced Custom Fields** - [View documentation](/integrations/acf)
- **WP Fusion** - [View documentation](/integrations/wp-fusion)

## Included in Pro version

These integrations are included in Loops & Logic Pro and Tangible Blocks Pro.

- **Easy Digital Downloads** - [View documentation](/integrations/easy-digital-downloads/)
- **Gravity Forms** - [View documentation](/integrations/gravity-forms/)
- **LearnDash** - [View documentation](/integrations/learndash/)
- **LifterLMS** - [View documentation](/integrations/lifter/)
- **The Events Calendar** - [View documentation](/integrations/events-calendar/)
- **WooCommerce** - [View documentation](/integrations/woocommerce/)

## Integrating with other plugins

Loops & Logic interacts with data in the same way that the WordPress core does: using posts. Most third-party plugins extend WordPress' functionality by adding new post types, taxonomies, and fields. If we know the name of these, we can refer to them in our markup to display data created by third-party plugins. For example, WooCommerce uses a post type called `product` that could be queried just like any other post type using a [post loop](/dynamic-tags/loop/post). Below are some examples demonstrating how to interact with data from plugins for which there isn't native support within the L&L templating language.
- [How to use Loops & Logic with FacetWP](/how-to/facet-wp-loop-tag)  
- [How to display WooCommerce attributes](/how-to/woocommerce-attributes)
