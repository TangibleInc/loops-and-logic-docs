---
id: random-post-from-list
title: Display a random post when your hosting provider has disabled random sorting
tags:
  - Random
  - List
  - Set and Get
  - Variables
---
## Request

> I have a post loop that uses the parameter `orderby=random` to display a random post. The displayed post is random when I'm logged in, but always shows the most recent post when logged out or in incognito. Why is this happening and how do I display a random post?

## Solution

```html
<Set maxCount>0</Set>
<List recentPosts>
  <Loop type=post count=10>
    <Item><Field id /></Item>
    <Set maxCount><Get loop=count /></Set>
  </Loop>
</List>

<Set randomNumber><Random from=1 to="{Get maxCount}"></Set>
<Set randomPostID><Field list=recentPosts item="{Get randomNumber}" /></Set>

<Loop type=post include="{Get randomPostID}">
  Random post: <Field title />
</Loop>
```
## Explanation

Some hosting platforms, such as WP Engine, disable the ability to order posts randomly or enforce caching for logged-out users that limits the effectiveness of random post ordering. If you find that adding the `orderby=random` parameter to your `Loop` tag, you may want to look into your hosting provider's options related to caching and disabling random ordering, such as [these instructions for WP Engine](https://wpengine.com/support/about-order-by-rand/). Most hosting providers should allow you to control caching, but not all will allow you to use random post ordering due to its potential impact on server performance. If that's the case, the template above should allow faking the functionality of the `orderby=random` parameter to display one post at random from the ten most recent posts.

Here's what's going on in the solution template:

1. We start by setting a maxCount variable to 0 to account for instances where we might be looping through less than 10 posts.
2. We then generate a list of post IDs from the 10 most recent posts. This can be as long as you like, but here we’ve limited it to the 10 most recent posts.  
3. Then we create a variable with that is a random integer between 1 and the number of posts we've looped through. You can change the upper limit by changing the count of the post loop inside the `List` tag.
4. Then we create another variable that gets the list item at the index that matches the random variable. This final variable outputs the post ID stored in the item, so we can pass that to the post loop to get a random post from the set each time a user visits the page.
5. Finally, we have our post loop which only includes the post ID that matches the variable we set earlier.

There are many other ways to use the [`Random` tag](/dynamic-tags/random) to generate random numbers to mimic random post ordering, though this will depend on exactly what you're trying to achieve. We hope this example has provided some inspiration if your host blocks the functionality of `orderby=random`.
