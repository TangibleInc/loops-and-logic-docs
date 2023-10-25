---
id: conditional-logic-taxonomy-term
title: How to conditionally display something when the current post has a certain taxonomy term applied
tags:
  - Logic
  - Taxonomy
---
## The request

> How do I set up some conditional logic so that certain content is only displayed when the current post has a specific taxonomy term applied?

## The solution

```html
<If loop type=taxonomy_term taxonomy=category include="term-name" post=current>
  Conditionally display this stuff
</If>
```

## The explanation

The first step whenever working with the [`If` tag](/docs/dynamic-tags/if/) to build a conditional statement is to consider what condition should be used. In this example, we want to look through all the taxonomy terms associated with the current post and only display some text when one of the terms matches a specific term we're looking for. The simplest approach here is to use the [`Loop` condition](/docs/dynamic-tags/loop/features/exists) and to use query parameters to create a loop that only exists when a certain term is applied to the current post. In the solution outlined above, the comparison `exists` is the default and therefore even if it isn't written, our conditional statement will be true when the query exists. The query parameters we've specified create a `taxonomy_term` loop for the current post and then only include terms that match some term we've decided to call `term-name`. If that term is not applied to the current post, the loop will not exist and the conditional statement will be false and the inner contents of the `If` tag will not be displayed. But if that term _is_ applied to the current post, the loop will exist, the `If` statement will be true, and the text “Conditionally display this stuff” will be displayed. This solution isn't limited to displaying text; you could just as easily use this logic to render any other tags contained between the opening and closing `If` tags depending on the desired functionality.