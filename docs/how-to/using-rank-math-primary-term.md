---
id: using-primary-term
title: How to use primary term in Loops and Logic
tags:
  - Taxonomy
  - Loop
---
## The request

> How to use primary category in Loops and Logic?


## The solution

There are several methods to incorporate primary category in WordPress, such as utilizing plugins like Rank Math and Yoast.

### Rank Math
In the Titles and Meta section of RankMath, you have the ability to customize the primary category or tag for a specific post type (such as posts, pages, products, etc.). This allows you to prioritize a specific category or tag to improve your SEO strategy and make your content more easily discoverable by search engines. For more detailed instructions on how to choose a primary category, you can refer to RankMath's [guide](https://rankmath.com/kb/how-to-choose-a-primary-category/) on the topic. After selecting the primary category, when you go to create or edit a post and choose additional categories, a dropdown menu will appear prompting you to select the primary category that you previously defined. This feature ensures that your content is properly categorized and optimized for search engine visibility, ultimately helping users find your content more effectively.

![Primary Category](./Primary%20Category.jpg)

This can now be called in via Loops and Logic as `rank_math_primary_<category-name>` or see below for an example


```html
<Set primary_term><Field rank_math_primary_plugin-category /></Set>
<Loop type=taxonomy_term taxonomy=plugin-category post="current">
  <Set loop_count ><Get loop=total /></Set>
  </Loop>
<If variable=loop_count value=1>
  <Set query=term-query type=taxonomy_term taxonomy=plugin-category post="current" />
  <Else />
  <Set query=term-query type=taxonomy_term taxonomy=plugin-category id="{Get primary_term}" />
</If>

<Loop query=term-query>
  <div class="title"><Field name /> Category</div>
</Loop>
```

This should output the `<category-name> Category`, for example

![Primary Category Example](./Primary%20Category%20Example.jpg)

### Yoast

The Yoast plugin also offers the option to assign a Primary Category, which you can set up by following this [link](https://yoast.com/help/how-to-select-a-primary-category/). This Primary Category can then be utilized in Loops and Logic using the `_yoast_wpseo_primary_<category-name>` function. Refer to the code example below to see how this function can be implemented.

```html
<Set name=term_id>
  <Field _yoast_wpseo_primary_project_type />
</Set>

<Taxonomy project_type id="{Get term_id}">
  <em><a href="{Term url}"><Term title /></a></em>
</Taxonomy>
```