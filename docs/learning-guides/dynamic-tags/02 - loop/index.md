---
id: loop
title: Loop
tags:
- Dynamic Tags
- Loop
url: /docs/learning-guides/dynamic-tags/loop
---

The `Loop` tag gets items of site content by type and repeats its inner content for each item.

## Overview

The basic structure of a loop usually contains three parts: a loop type, some query parameters, and some attributes. In the example below, we use the `Loop` tag to loop through the three most recent posts in the "reviews" category and, for each post, display its title.

```html
<Loop type=post category=reviews orderby=date order=desc count=3>
	<Field title />
</Loop>
```

### Loop type

Unless the loop is using the default query of the current page (see [Loops without a specified type](#loops-without-a-specified-type)), it's always necessary to specify a loop type. This is usually written in the first attribute of the Loop tag to specify what type of data should be looped through. This is often done with the `type` attribute when looping through core WordPress content such as posts, taxonomies, or custom post types. Some loop types use other attributes, such as `list` to loop through data created by the `List` tag or `times` to simply repeat the inner contents of the Loop tag a specific number of times. In the example above, the attribute `type` defines the loop type (we're looping through blog posts in the default WordPress `post` post type).

#### Loops without a specified type

Every page on a WordPress site has a default query. In advanced use cases, L&L can be used to display results from that query by using the `Loop` tag without specifying a loop type. For example, the default query of a blog post archive page is a query of all blog posts on the site, so adding the template `<Loop><Field title /></Loop>` to that archive page would borrow the page's default query and loop through all the blog posts.

### Query parameters

Query parameters act like filters, making it possible to specify certain criteria about the items being looped through or modify how the loop works. Each loop type has its own query parameters that can be used, so see the links under loop types below for the parameters available in each type. While these use the same syntax as every other L&L attribute, they are referred to as query parameters because they act to modify a query as it's being run, unlike standard attributes which modify the results of the loop after the data has been queried. In the example above, the `category` parameter specifies that only posts in the "reviews" category should be looped through and the `orderby` and `order` parameters specify how the posts should be ordered during the query.

### Attributes

Like query parameters, other attributes of the `Loop` tag also modify what or how data is displayed by the query. Unlike query parameters, these attributes act after the data has been queried. For the implications of using attributes or query parameters to modify the results of a loop, see [filtering the loop](#filtering-the-loop). In the example above, the `count` attribute is being used to limit the number of items being displayed to only show the first three posts.

## Loop types

A loop *type* is the name of the type of content that should be looped through.

### Core loop types

These loop types are written in the value of the `type` attribute to define the type of content that is being looped through. The value is usually in singular form, such as `type=post`, `type=page`, or `type=user`. The name of the post type must be in lowercase letters and can only contain letters, numbers, `-` dashes, or `_` underscores. Each loop type has its own set of available query parameters and fields.

*    `attachment` - This type loops through images or other files uploaded through the media upload system, which WordPress calls attachments. See the [attachment loop](/docs/learning-guides/dynamic-tags/loop/attachment) for available query parameters and fields.
*    `calendar_*` - This type loops through generated calendar fields and can be used to build calendars. See the [calendar loop](/docs/learning-guides/dynamic-tags/loop/calendar) for available query parameters and fields.
*    `menu` - This type loops through menu items. See the [menu loop](/docs/learning-guides/dynamic-tags/loop/menu) for available query parameters and fields.
*    `post` - This type loops through posts, including core post types like `post` or `page` as well as any custom post type, including those created by third-party plugins. Use the `post_type` query parameter to specify one or many post types. See the [post loop](/docs/learning-guides/dynamic-tags/loop/post) for available query parameters and fields.
*    `type` - This type loops through all post types registered on the site. See the [post type loop](/docs/learning-guides/dynamic-tags/loop/type) for available query parameters and fields.
*    `taxonomy` - This type loops through all taxonomies registered on the site. See the [taxonomy loop](/docs/learning-guides/dynamic-tags/loop/taxonomy) for available query parameters and fields.
*    `taxonomy_term` - This type loops through taxonomy terms. See the [taxonomy term loop](/docs/learning-guides/dynamic-tags/loop/taxonomy-term) for available query parameters and fields.
*    `user` - This type loops through a site's users. See the [user loop](/docs/learning-guides/dynamic-tags/loop/user) for available query parameters and fields.

### Loop type attributes

These loop types don't require using the `type` attribute and are instead themselves attributes that accept a value.

*    `field="..."` - This type loops through a field value that is a list or map (also known as an associative array).
*    `list="..."` - This type loops through data created by the `List` tag or passed directly as the attribute's value. See the [list loop](/docs/learning-guides/dynamic-tags/list) for more information.
*    `map="..."` - This type loops through data created by the `Map` tag or passed directly as the attribute's value. See the [map loop](/docs/learning-guides/dynamic-tags/map) for more information.
*    `map_keys="..."` - This type loops through all keys in a map.
*    `query="..."` - This type loops through a stored query variable without requiring the server to run a new query. For more information, see the [query variable](/docs/learning-guides/dynamic-tags/loop/features/variables#query-variable-type).
*    `times="..."` - This type repeats its inner content a given number of times. See the [times loop](/docs/learning-guides/dynamic-tags/loop/times) for more information.
*    `user_field="..."` - This type loops through a user field value that is a list or map.

### Integrations

There are loop types that integrate with content from other plugins.

*    [Advanced Custom Fields](/docs/learning-guides/integrations/acf)

## Attributes

In addition to the specific query parameters available for each loop type (linked above), the attributes below can be used for all loop types to modify the output of a loop.

*    `count="..."` - This attribute limits the total number of items. It accepts a value of type number. The example below will display a comma-separated list of the three most recent posts with hyperlinked post titles.  
```html
Recent posts: 
<Loop type="post" count="3">
  <a href="{Field url}"><Field title /></a>
  <If not last>, </If>
</Loop>
```

*    `field="..."` - This attribute defines the field name by which to filter items in a loop. See [filtering the loop](#filtering-the-loop) for information on when this attribute should be used. The example below will display a comma-separated list of taxonomy terms that have a count field greater than ten (i.e. terms that have more than ten posts associated with them).  
```html
<Loop type="taxonomy_term" taxonomy="category" field="count" field_compare="more_than" field_value="10" field_type="number">
  <a href="{Field url}"><Field title /></a>
  <If not last>, </If>
</Loop>
```
*    `field_2="..."` - Used when filtering multiple fields. See `field`.
*    `field_3="..."` - Used when filtering multiple fields. See `field`.
*    `field_value="..."` - This attribute defines the field value that should be compared to the value of the `field` attribute.
*    `field_value_2="..."` - Used when filtering multiple fields. See `field_value`.
*    `field_value_3="..."` - Used when filtering multiple fields. See `field_value`.
*    `field_compare="..."` - This attribute defines the comparison operator, or how the field should be compared to the `field_value` - See [If tag: Common comparisons](/docs/learning-guides/dynamic-tags/if/#general-comparisons) for more information.
*    `field_compare_2="..."` - Used when filtering multiple fields. See `field_compare`.
*    `field_compare_3="..."` - Used when filtering multiple fields. See `field_compare`. 
*    `field_type="..."` - This attribute defines the field type. It accepts a value of `string` (default), `number`, or `date`. It is useful when using numerical comparisons in `field_compare`.
*    `field_type_2="..."` - Used when filtering multiple fields. See `field_type`.
*    `field_type_3="..."` - Used when filtering multiple fields. See `field_type`.
*    `paged="..."` - This attribute enables loop pagination and defines the number of items to display per page. It accepts a value of type number. For more information, see [loop pagination](/docs/learning-guides/dynamic-tags/loop/features/pagination).
*    `sort_field="..."` - This attribute defines the field by which to sort items in the loop. The example below will display the post titles of an `event` custom post type sorted in descending order based on an `event_date` custom field.
```html
<Loop type="event" sort_field="event_date" sort_type="date" sort_date_format="m/d/Y" sort_order="desc">
  <p><Field title /></p>
</Loop>
```
*    `sort_order="..."` - This attribute defines the order in which items should be sorted and accepts a value of `asc` for ascending (default), or `desc` for descending.
*    `sort_type="..."` - This attribute defines the type of field defined in `sort_field` and accepts a value of `string` (default), `number`, or `date`.

## Filtering the loop

There are many ways to filter a loop to only display items that match certain criteria, but it's important to use the most efficient technique that fits the circumstances. There are three main ways to limit the results of a query based on a field value: using the `custom_field` query parameter, using the `field` attribute, and using conditional logic. Each has its benefits and its limitations, so we'll discuss all three. In each example below, we're filtering the results of our loop to only display posts in a custom post type called `product` that has a custom `price` field that has a value lower than 50. Each of the three templates below results in the same final output but behaves slightly differently.

### Using the `custom_field` query parameter
```html
<h2>Gift ideas under $50:</h2>
<ul>
	<Loop type="product" custom_field="price" custom_field_compare="before" custom_field_value="50" custom_field_type="number">
		<li><a href="{Field url}"><Field title /></a></li>
	</Loop>
</ul>
```
Both the `attachment` and `post` loop types include support for a query parameter called `custom_field` that allows filtering a loop based on the value of a specific field. This query parameter queries raw field values in the database, where “raw” means the field values as they are stored in the database before they get processed by WordPress core or plugins. The ability to query the raw field value means that this is the fastest of the three approaches in terms of page load time. While this is the most efficient option, it is also the most limited in terms of functionality since the `custom_field_compare` attribute only allows for a handful of comparisons unlike the two options below which support all the same comparisons as the `If` tag. It can also only be used in `attachment` and `post` loop types for now and is limited to fields with simple value types like `text`, `number`, and `date` (if they’re in the right format). Still, it's the most efficient approach and should be used whenever possible.

### Using the `field` attribute
```html
<h2>Gift ideas under $50:</h2>
<ul>
	<Loop type="product" field="price" field_compare="less_than" field_value="50" field_type="number">
		<li><a href="{Field url}"><Field title /></a></li>
	</Loop>
</ul>
```

This example uses the `field` attribute to filter the loop. This attribute is compatible with all loop types and can use all the same comparisons as the If tag in its accompanying `field_compare` attribute. These attributes, along with `field_value` and `field_type`, allow filtering of the results of the loop after the database has been queried. This is an important distinction: while the `custom_field` parameter limits which posts are being queried during the query itself, the `field` attribute only acts after the query has been completed. Adding this additional step to the process makes the `field` attribute less efficient than the `custom_field` parameter. This is also true for the other loop attributes like `sort_field` which sorts loop items after they've been queried, unlike the query parameter `orderby` which sorts the items during the query.

### Using the `If` tag
```html
<h2>Gift ideas under $50:</h2>
<ul>
	<Loop type="product">
		<If field="price" less_than value="50">
		  <li><a href="{Field url}"><Field title /></a></li>
		</If>
	</Loop>
</ul>
```
The third way to filter the results of a loop is to use an `If` tag inside the `Loop` tag to conditionally display certain items. This is the most versatile option because you can create complex conditional logic within the loop to manipulate and display data exactly as needed. Despite its versatility, it's less efficient than using the `custom_field` query parameter for the same reason explained above for the field attribute. In addition to being less efficient, using this method can cause issues if you're using other attributes on the `Loop` tag, such as `paged`. In the case of loop pagination, the items to be displayed on each page are set when the loop first runs, meaning that when conditional logic is added within the loop to filter the results, the items get filtered on a per-page basis and there will be fewer items displayed on each page than expected.

## Other features

Here are some other features of the loop.

*   [Exists](/docs/learning-guides/dynamic-tags/Loop/features/exists)
*   [Variables](/docs/learning-guides/dynamic-tags/Loop/features/pagination)
*   [Pagination](/docs/learning-guides/dynamic-tags/Loop/features/variables)

## Examples

- [How to create loops within loops within loops](/docs/how-to/nested-loops)  
- [How to display WooCommerce attributes](/docs/how-to/woocommerce-attributes)  
- [How to display a custom field that contains an image](/docs/how-to/custom-image-fields)  
- [How to display a random post when your hosting provider has disabled random sorting](/docs/how-to/random-post-from-list)  
- [How to only show posts with a certain custom field filled out](/docs/how-to/filter-custom-field-has-value)  
- [How to order terms alphabetically by ACF text field and hide empty terms](/docs/how-to/order-alphabetically-acf-field-hide-empty)  
- [How to show posts only if they exist and display a message if they don’t exist](/docs/how-to/no-posts-found-conditional)  
- [How to add up the count of a parent taxonomy term with the count of all its children](/docs/how-to/count-hierarchical-terms)  
- [How to make a loop behave differently every nth item (e.g. display content every third post, change styling on even/odd posts)](/docs/how-to/varied-loop-item-behavior)  
- [How to display term fields on a taxonomy term archive](/docs/how-to/term-fields-on-archive)