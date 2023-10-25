---
id: no-posts-found-conditional
title: How to show posts only if they exist and display a message if they don’t exist
tags:
  - Loop
  - Logic
---
## The request:

> How do I only show posts when they exist and display a message when there are none?

## The solution:

```html
<If loop exists type=post>  
  <Loop>     
    <Field title />   
  </Loop> 
  <Else />  
    There are no posts!
</If>
```

## The explanation:

The basic structure of the [`If` tag](/docs/dynamic-tags/if/) involves three parts: a subject, a comparison, and a value. In practice, this is structured like `<If subject comparison value></If>`. In our case, we want to check whether a particular loop exists. For that, we can use the `loop` condition as our subject. Then we need to add a comparison and since we're wanting our code to do something if a query exists (i.e. if there are items in a query), we can use the comparison `exists`. The loop condition is a special one because it allows us to write all the query parameters we want to use to narrow our loop directly as attributes of our `If` tag. If we wanted, we could add any of the possible [query parameters available for the post loop](/docs/dynamic-tags/loop/post), or any other loop type.

Once we've set up our conditional statement and we've opened our `If` tag, we then need to write what we want to do if there are posts in the loop we've just defined. Here we get to use another convenient feature of the `loop` condition; we can open a loop without adding any query parameters, simply writing `<Loop>`. Loops & Logic already knows what loop we're working with since we defined it earlier within our `If` statement.

The rest is fairly simple. We simply write the fields or content we want to display for each item in the loop (in our example, we're simply displaying the title field of each post), then we close our loop. Adding an `<Else />` tag allows us to specify what should happen when the conditional statement is false. In our example, we've decided that if the loop does not exist, we should display the message "There are no posts!"