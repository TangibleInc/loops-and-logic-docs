---
id: term-fields-on-archive
title: How to display term fields on a taxonomy term archive
tags:
  - Archive
  - Taxonomy
---
## The request

> I created a simple list of taxonomies to generate a navigation menu.
> 
> When on the archive page of a taxonomy item, I want that taxonomy item to display differently (i.e., a different color background.)
> 
> Can I grab the current page’s taxonomy ID with If?

## The solution

```html
<Loop field=archive_term>
  <Set currentID><Field id /></Set>
</Loop>

<Loop type=taxonomy_term taxonomy=my-tax-slug>
  <If field=id value="{Get currentID}">
    <div class="terms current-term"><Field title /></div>
  <Else />
    <div class="terms"><Field title /></div>
  </If>
</Loop>
```

## The explanation

Each page or post or archive on a WordPress site has a [default loop context](/getting-started/terminology-definitions/default-query). This context is what L&L uses to get data and fields about the current page. The default loop context of an archive page is a loop of all the posts that belong to that archive. It's possible to display fields from each post in the archive using the `Loop` tag without specifying a type, like `<Loop><Field title /></Loop>`. While this is great for displaying fields from posts, this syntax doesn't allow us to get information about the current archive itself within our template. Luckily, there's a field that can be used for this that only exists on archive pages.

When you're on a taxonomy archive, there is an `archive_term` field that contains all the data about the current taxonomy term that the archive relates to. There are also similar fields on author archives (`archive_author`) and post type archives (`archive_post_type`). In this example, we're placing our template on a taxonomy term archive, so we'll use `archive_term`. To grab the data that is within that field, we need to use a field loop, which looks like `<Loop field=archive_term>`. This loop is essentially a single-item taxonomy term loop, so all the same fields that are available within a [taxonomy term loop](/dynamic-tags/loop/taxonomy-term) are available here. In our example, we've saved the `id` field of the term so that we can refer to it later.

Then we create a taxonomy term loop to display a list of all our terms. We want to style the term related to the current page differently than the others, so we can use the `If` tag for that. We'll pass the variable we saved earlier to the `value` attribute of our `If` tag so that each time the loop runs, it will check whether the current term ID in the loop matches the term ID from our archive page. If it does, we could display the term title with specific classes or do any number of other things to conditionally style the item just the way we want.