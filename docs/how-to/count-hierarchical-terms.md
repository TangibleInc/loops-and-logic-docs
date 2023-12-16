---
id: count-hierarchical-terms
title: How to add up the count of a parent taxonomy term with the count of all its children
tags:
  - Math
  - Conditional Logic
  - Taxonomy
---
## The request

> I am using following markup to get a list of taxonomies/categories with their post count.
```html
<Loop type=taxonomy_term taxonomy=category>
  <a href="{Field url}"><Field title /></a> - <Field count /><br />
</Loop>
```

> I get list of categories and post count as 0 because main parent categories have not been assigned any posts but sub-categories inside parent categories have posts. So I want to get number/count of posts in parent category including those post count in subcategories in post count field. [See original thread](https://discourse.tangible.one/t/get-number-of-all-posts-including-post-count-of-children-inside-a-taxanomy/784)

## The solution

```html
<Loop type=taxonomy_term taxonomy=category>
  <a href="{Field url}"><Field title /></a> - 
  <If loop exists type=taxonomy_term taxonomy=category id="{Field children}">
    <Math>
      <Field count />+<Loop><Field count /><If not last>+</If></Loop>
    </Math>
    <Else />
    <Field count />
  </If>
  <br />
</Loop>
```

## The explanation

The approach above uses the [If loop exists](/dynamic-tags/loop/features/exists) syntax to check whether the current term has any children and if it does, adds up all the posts belonging to those children.

To explain that in a bit more detail, our markup starts with a taxonomy term loop and for each item in that outer loop, we start by displaying the term title. Then we check whether a loop of the current term's child terms exists. We'll do this by passing the out loop's `children` field to the `id` query parameter. If that loop does exist, then we need to do some math to add up the count of all the child terms. To do that we get the count of the current term, then we open the loop that we defined in our `If` statement. For each item in that child term loop, we get the count of the current term and if it's not the last item in the loop, we add a plus. This basically results in the following output that gets processed by the surrounding `Math` tag: `parentcount+firstchildcount+secondchildcount+thirdchildcount...`. If our child term loop doesn't exist, we just display the count of the current term. One caveat with this approach is that if a post is added to multiple child categories, it'll get counted multiple times toward the total. There would be ways of getting around that but this wasn't accounted for in this template in an effort to keep things simple.