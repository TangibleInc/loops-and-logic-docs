---
id: default-query
title: What is the default loop or default query?
description: Learn about the default query
tags:
  - Reference
  - Terminology
  - Definition
---
Just about every page of a WordPress site has a [query](/getting-started/terminology-definitions/query) associated with it. In most cases, this query is defined through the global  [`wp_query` system](https://developer.wordpress.org/reference/classes/wp_query/). The query associated with each post or page is called the default query or the default loop context and it informs what type of data gets displayed on the page as well as what data is available by default to L&L templates.

To better understand this concept, let's look at an example. Let's say you have an online shop. You'll probably have an archive page that lists all the products you have for sale. The default query of that archive page is a loop of all the products in your shop. You'll probably also have a product page that features specific information about the product. The default query of that singular post page is a loop of one single product.

## How the default query affects Loops & Logic

Whenever a Loops & Logic template is loaded, the template looks to the default loop context to understand what data is available on the current page (or more specifically, the current loop context). That's why when you place a template on a product page and write `<Field title />` it will display the title of the current product whereas when you place that same template on a blog post it will display the title of the post. The default loop context in which the template is placed is different, which means that the data available to Loops & Logic by default (that is, without changing the loop context with the [`Loop` tag](http://localhost:3000/dynamic-tags/Loop/)) will be different.

### On a singular post

On a singular post, such as a blog post, the default query is essentially a loop of one single post. The [`Field` tag](http://localhost:3000/dynamic-tags/field) can be used to display data from the fields of the current post. For example, if an L&L template was placed on a blog post, the post's publish date field could be displayed by simply writing this in the template.

```html
<Field publish_date />
```

This would be the same as manually defining a query using the `Loop` tag and then displaying the field within the loop.

```html
<Loop type=post name=my-blog-post-slug>
  <Field publish_date />
</Loop>
```

It's not necessary to manually define a query in each template since you can instead simply rely on the default query wherever the template is placed.

### On an archive page

On an archive page, such as a blog archive, the default query is a loop of all the posts that relate to the archive. As mentioned under "Loops without a specified type" on [the `Loop` tag documentation](http://localhost:3000/dynamic-tags/Loop#loops-without-a-specified-type), L&L can be used to display results from that default query by using the `Loop` tag without specifying a loop type. For example, if an L&L template was placed on a taxonomy term archive, a list of post titles belonging to that term could be displayed using the template below.

```html
<ul>
  <Loop>
    <li><Field title /></li>
  </Loop>
</ul>
```

This would be the same as manually defining a query of posts belonging to a specific taxonomy term using the `Loop` tag.

```html
<ul>
  <Loop type=post taxonomy=category terms=movie-reviews>
    <li><Field title /></li>
  </Loop>
</ul>
```

Note that on an archive page, using the `Field` tag on its own outside of a loop will display field data from the first post in the default query. This could lead to unexpected results, so it's generally best to use the `Loop` tag without a specified type as shown above when working with L&L templates on an archive page.