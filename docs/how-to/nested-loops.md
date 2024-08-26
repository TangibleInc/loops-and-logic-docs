---
id: nested-loops
title: Create loops within loops within loops
tags:
  - Loop
  - Taxonomy
---
## Request

> Is it possible to nest a Loop tag inside another Loop tag?

## Solution

```html
<Loop type=taxonomy_term taxonomy=category>
  <Field title />
  <Loop type=post taxonomy=category terms="{Field name}">
    <Field title />
  </Loop>
</Loop>
```

## Explanation

Not only is it possible, but nesting loops is one of the most powerful ways to use Loops & Logic to display exactly the content you need. Every time a Loop is created, it draws on the context of the loop that surrounds it. Every page or post on a WordPress site has a loop associated with it, often called the default loop. This is why you can add L&L's dynamic tags directly to the root of a template and it will know to get field data from the current post. It's as if the whole template is surrounded by a loop like `<Loop type=post id=current>`.

But we can change that loop context by adding loops to our template or nesting loops. In the example above, the inner `<Field title />` tag gets its context from the post loop because it's placed inside that post loop. The post loop tag itself (`<Loop type=post ...`) gets its context from the outer taxonomy term loop. This is why it's able to get taxonomy term names dynamically. We're using the `taxonomy_term` loop to pass the value `{Field name}` to the terms parameter.
