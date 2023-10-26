---
id: integrations
title: Integrations
tags:
  - Integrations
slug: /integrations
---
The dynamic tags included in [the free version of Loops & Logic](https://wordpress.org/plugins/tangible-loops-and-logic/) work with all core WordPress post types as well as custom post types. Third-party plugins often use unique data structures so we're currently building integrations that simplify working with third-party data in L&L. Some integrations will be included in the free version and others that require more complex development to support will be included in a premium add-on plugin. Premium integrations are currently being tested by beta users through the [Tangible Blocks beta](https://loopsandlogic.com/tangible-blocks/).

## Integrations included in Loops & Logic

- **Advanced Custom Fields** - [View documentation](/docs/integrations/acf)
- **WP Fusion** - [View documentation](/docs/integrations/wp-fusion)

## Integrations included in Loops & Logic Pro

- **Easy Digital Downloads** (in development) - [View documentation](https://loop.tangible.one/extend/easy-digital-downloads/)
- **Gravity Forms** (in development) - [View documentation](https://loop.tangible.one/extend/gravity-forms)
- **LearnDash** (in development) - [View documentation](https://loop.tangible.one/extend/learndash/)
- **LifterLMS** (in development) - [View documentation](https://loop.tangible.one/extend/lifter/)
- **The Events Calendar** (in development) - [View documentation](https://loop.tangible.one/extend/events-calendar)
- **WooCommerce** (in development) - [View documentation](https://loop.tangible.one/extend/woocommerce/)

Integrating with non-officially supported plugins  

Loops & Logic interacts with data in the same way that the WordPress core does: using posts. Most third-party plugins extend WordPress' functionality by adding new post types, taxonomies, and fields. If we know the name of these, we can refer to them in our markup to display data created by third-party plugins. For example, WooCommerce uses a post type called `product` that could be queried just like any other post type using a [post loop](/docs/dynamic-tags/loop/post). Below are some examples demonstrating how to interact with data from plugins for which there isn't native support within the L&L templating language.
- [How to use Loops & Logic with FacetWP](/docs/how-to/facet-wp-loop-tag)  
- [How to display WooCommerce attributes](/docs/how-to/woocommerce-attributes)