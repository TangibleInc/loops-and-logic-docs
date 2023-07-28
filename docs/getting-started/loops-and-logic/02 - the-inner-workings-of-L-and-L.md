---
id: inner-workings-loops-and-logic
title: The inner workings of L&L
tags:
  - Introduction
---

## Understanding dynamic tags  

The most basic superpower that L&L gives you is the ability to dynamically display content from your database—the massive spreadsheet-like tables that store all the data from your WordPress site. This is done using dynamic tags. Similar to HTML tags like `<strong>` and `<ul>` which give instructions to your browser about how to display content, dynamic tags in L&L extend the basic capabilities of HTML, often by giving instructions to the server about what content it should fetch, manipulate, or display. Any time you see a tag in L&L that’s capitalized, like `<If>` or `<Get>`, that’s a dynamic tag.

### An introduction to the `Loop` tag

The most used dynamic tag in L&L is `<Loop>`. It’s so important that we named the whole plugin after it! Think of a loop as an instruction that tells WordPress to look through (or _loop_ through) the items in your site’s database to find every piece of content that matches a certain set of criteria. The inner content of the `Loop` tag (that is, everything written between the opening `<Loop>` tag and the closing `</Loop>` tag) runs once for each item in the loop. A loop can be created from any content type on a WordPress site, such as posts, pages, custom post types, attachments, taxonomies, users, etc. This allows you to create a query for any post type (e.g. blog posts) that matches a set of criteria (e.g. posts in a certain taxonomy written in the last two months) and loop through each post to get or display its fields (e.g. the title, author, or URL).

## Understanding the inner workings of Loops & Logic

Before we take a look at an example of L&L markup in action, let’s start by getting a conceptual understanding of the way in which L&L works and how it differs from plain HTML. Some of these concepts might be familiar to you if you’re experienced with WordPress or frontend development.

### L&L markup gets rendered as HTML

As you probably know, HTML is a markup language that can be understood by web browsers. But HTML on its own is static, meaning that it can only display content that’s directly written in HTML on the page. If you had a blog that was completely created using static HTML, each time you added a new blog post, you’d also need to edit the page that lists all your blog posts (an _archive_ page in WordPress-speak) to add a link to your new post.

This would be tedious to manage, which is why WordPress sites are dynamic; they’re able to generate HTML documents based on a set of instructions written in PHP. When you click to view our blog archive on this site, our servers don’t necessarily send you a pre-made HTML document. Instead, our servers receive instructions in PHP about how to piece together—or render—an HTML document that lists all the latest blog posts. That HTML document then gets delivered to you and displayed in your browser.

It’s important to keep in mind that while L&L markup _looks_ similar to HTML, it _works_ more similarly to dynamic languages in that it needs to be rendered before it can be displayed to your site’s visitors. There are two implications of this:

1. **L&L code needs to be processed just like any other dynamic language**. This means that it’s important to keep your code lean and efficient to minimize its effect on page load times. We include tools (like the `<Timer>` tag) to help you write efficient code.
2. **L&L needs to be written inside of a template**. Neither WordPress nor browsers natively understand how to display the dynamic tags in L&L markup, so it needs to be processed first inside of an L&L template.

### A loop is a process, not a shortcut

As we noted above, the `<Loop>` tag is like an instruction that tells WordPress to look through the items in your site’s database to find every piece of content that matches a certain set of criteria. It’s important to keep in mind that in general, when you open a loop, you’re not just making data appear on the page. Instead, you’re actually telling your server to dig through all the content contained within a subset of your site’s database each time that page is loaded by a visitor on your site. Repeating loops throughout a page or creating complex nested loops can dramatically increase a page’s load time, so it’s important to consider your page’s performance by recognizing that the `<Loop>` tag is an instruction to process your site’s data, not a shortcut to the data itself.

What does this mean in practice? Let’s imagine you’re creating a user dashboard and you want to personalize it a bit by referring to your user throughout the page. You could use either of the following bits of markup to display the user’s name. Don’t worry if you don’t understand what this markup is actually _doing_ yet, we’ll get to that later.
```html
<Loop type=user id=current>
  Hey there, <Field full_name />!
</Loop>
```
Hey there, `<User full_name />`!

Since L&L makes it so simple to display dynamic data on your page (particularly with the simple `<User>` tag in this case), it could be tempting to sprinkle that markup anywhere on your dashboard where you want to refer to your user by name. But doing this would result in a new server process running in every spot where the user’s name is mentioned, which could impact the page’s load time. Instead of creating a new loop every time you want to display the user’s name, a better approach would be to use a single loop to save the user’s name to a variable and then refer to that saved variable throughout the page. Even if you don't yet know how to do that, the important takeaway here is to remember that the way you choose to write your templates has an impact on server load (and therefore page load time) so you'll want to use the tools built into L&L to help you write smart, efficient markup.

## Understanding how tags get their context  

One of the most important things to wrap your mind around when working with L&L is the _context_ of your tags. All of the dynamic tags in L&L (like `Loop` and `Field`) understand the context in which they’re placed and it's one of the reasons that L&L is such a powerful templating language. Let's use a simple `<Field title />` tag to illustrate how tags get their context. As you might guess from its syntax, this tag will always display the "title" field of the current post. But you'll notice that if you place this tag directly into a template on a blog post, it shows the title of the current post, whereas if you place that same tag inside a post loop (like `<Loop type=post><Field title /><Loop>`), it shows the title of each of the posts in the loop. Why is different content being displayed even though the tag is the same?

The simple answer: because the context surrounding the tag is different in those two cases. In the first case, you can imagine that the `<Field title />` tag looks around, sees that it’s been placed inside a Tangible Template block which is itself inside a blog post, and understands that the title field it should display is the one from the current blog post. In the second case, the `<Field title />` tag isn’t just sitting by itself on a blog post, it’s sitting inside of a `Loop` tag. So each time the loop runs (once for each post in the query), the `<Field title />` tag looks around, sees that it’s inside the current item in the loop (in this case, a new blog post each time the loop runs) and understands that the title field it should display is the one from the current blog post inside the loop. Every time you use a dynamic tag in L&L, the behaviour of that tag will be affected by the context it’s placed in. [Check out this blog post](https://loopsandlogic.com/everything-you-need-to-know-about-the-loop-tag/) for a more thorough example of how you can manipulate the context of tags to build powerful templates.