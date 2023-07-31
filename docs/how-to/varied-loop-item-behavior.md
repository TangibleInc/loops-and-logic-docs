---
id: varied-loop-item-behavior
title: How to make a loop behave differently every nth item (e.g. display content every third post, change styling on even/odd posts)
tags:
  - Logic
  - Loop
  - Styling
---
## The request

> I’m trying to add a condition to a loop so that the background color of odd posts is different than the background of even posts. In other words:  
> item 1: `background-color: white;`  
> item 2: `background-color: red;`  
> item 3: `background-color: white;`  
> item 4: `background-color: red;`  
> [View original thread](https://discourse.tangible.one/t/loop-item-number/765)

  

Or, asked in a different context:

> I want to place adsense ads after every 3 blog items on archive page. My archive page is made using a Tangible template. Is there any way to achieve this? [View original thread](https://discourse.tangible.one/t/show-ads-after-every-3-blog-posts-in-archive/821)

## The solution

While these may seem like similar requests, the solution differed depending on the needs of the template. See below for an explanation.

When simply modifying CSS styling of a loop item, the best approach is to use CSS `:nth-child` selectors

```css
.item-class:nth-child(2n+1) { background-color: white; }
.item-class:nth-child(2n) { background-color: red; }
```

When the HTML output of the loop needs to change based on the loop count, it's possible to use conditional logic in combination with a modulus operator (`%`).

```html
<Loop type=post>
  <If check="{Math}{Get loop=count}%3{/Math}" is value=0>
    This item's count is a multiple of three.
  </If>
</Loop>
```

## The explanation

Loops & Logic is extremely flexible, which means it can be used to build a wide variety of functionality. However, with great power comes great responsibility so it's important to recognize when to use the features in L&L and when not to. In this case, L&L makes it possible to check the current loop count (that is, the numerical position of the loop item within the loop) and modify the inner contents of the loop based on whether the count is even or odd or a multiple of any number. That being said, running any server-side script on your site can have performance tradeoffs for your users, so it's important to be smart about when you choose to use L&L.

### Using CSS

Here, we're discussing how to modify the design or content of the loop based on the loop count. In the first example, the user is simply wanting to change the background color on even and odd posts. CSS already includes a convenient `:nth-child` selector that allows the creation of different declarations depending on the position of a particular item. This is the preferred way to make CSS changes based on the loop count since it relies on CSS running in the user's browser instead of a script running on the server, which results in better performance.

### Using conditional logic in L&L

In the second example, we're not simply modifying the style of certain items in the loop, but we're actually wanting to display entirely different content (e.g. an Adsense script) based on the loop count. In this case, it wouldn't make sense to use CSS to achieve this and we should instead use some conditional logic to evaluate whether the current loop count matches our intended pattern (e.g. being a multiple of 3) and then display certain content when that condition is true.

We can do this using something called a _modulus operator_, which is represented by the `%` symbol. This isn't an L&L-specific feature; it's a mathematical operator that's commonly used in math and programming. There are plenty of resources on the web explaining how the modulus operator works, but it essentially tells you what's left over after you divide one number by another number. For example, the result of the mathematical equation 7 % 3 would be 1, because 7 is divisible by 3 twice and then the amount left over that isn't neatly divisible by 3 is 1. On the other hand, 9 % 3 is equal to 0, because the number 3 fits neatly into the number 9 three times with nothing left over. When the result is 0, it means that the number is a multiple of 3 (or whatever number we decide to use in our equation). If we wanted to display some additional markup for every third post, we would use the `Math` tag to calculate the value of `<Get loop=count /> % 3` and whenever the result is 0, we'll know that our post count is a multiple of 3.

If you're not clear on why this conditional logic works, look into how the modulus operator works and try adding this to your loop to visualize what's going on:

```html
The current loop count is: <Get loop=count /><br />
If we divide that by 3, there's this much leftover: <Math><Get loop=count /> % 3 </Math>
```

### How to choose which approach to use

The approach you take will depend on how your template needs to behave and what will result in the best performance given your use case. In general, when styling needs to be changed based on the loop count, use CSS. When the content or template needs to change based on the loop count, use Loops & Logic.

To some degree, the CSS-based approach can also be used to show or hide entire pieces of content with a simple `display: none;`. However, when using CSS to hide content, it's important to consider performance tradeoffs between using L&L or CSS. If you need to hide a large quantity of content, the benefits of using CSS to improve server performance may be outweighed by the benefits of using L&L to avoid sending unnecessary data in the first place. The choice of approach also depends on what kind of content is being displayed. If the user shouldn't be able to access the data at all, then server-side tools like L&L should be used to avoid the user being able to gain access to the data by modifying some CSS in their browser.