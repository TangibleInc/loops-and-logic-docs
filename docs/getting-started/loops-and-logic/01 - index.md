---
id: intro
title: Getting started with Loops & Logic
description: Learn the syntax and accepted attributes for each dynamic tag in L&L
tags:
  - Introduction
sidebar_position: 1
---

## What is Loops & Logic?
Loops & Logic (or L&L for short) is a template system for WordPress that gives you full control over your site’s content using simple HTML-like syntax. It allows advanced developers to work more quickly and allows novices to build complex pages and even plugin-like functionality with ease. The term “L&L” is used both to refer to the templating language as well as its eponymous plugin, which is [available for free](https://wordpress.org/plugins/tangible-loops-and-logic/) on the WordPress plugin repository.

## What can I do with Loops & Logic?
The L&L templating language extends the capabilities of HTML by adding powerful tags that allow you to dynamically get and display data from your WordPress posts as well as do other cool things like build shortcodes, set variables, generate dates, redirect users, and more. We call these _dynamic tags_ to differentiate them from standard HTML tags. There are a few dozen dynamic tags in L&L that can be used in combination with each other to build powerful templates. Here’s a brief overview of some of our favourite dynamic tags:
- `Loop` – This is the most used dynamic tag in L&L. This tag allows you to look through (or loop through) the items in your site’s database to find every piece of content that matches a certain set of criteria. A loop can be created from any content type on a WordPress site, such as posts, pages, custom post types, attachments, taxonomies, users, etc. This allows you to create a query for any post type (e.g. blog posts) and loop through each post to get or display its fields (e.g. the author).
- `Field` – This tag allows you to display the contents of just about any field from a WordPress post. It can be used directly in a template to get field data from the post on which the template is placed, or it can be used inside a loop to get fields from each of the posts being looped through.
- `If` – This tag allows you to build conditional logic statements. It’s also the second half of the namesake for Loops & Logic. Not only does this tag allow you to conditionally display one piece of content if a statement is true and a different piece of content if a statement is false, but it also allows you to conditionally run sections of markup or even entire templates only when certain conditions are met.
- `Get` and `Set` – These tags allow you to set a few different types of variables and then get the value of those variables elsewhere on the template.
- `Template` – One of the most underutilized tags but also one of the most powerful; this tag allows you to embed templates inside other templates. This allows anyone to reap the benefits of following [atomic design principles](https://bradfrost.com/blog/post/atomic-web-design/) or work with HTML as an object-oriented programming language.
- `Route` – This tag allows you to reference parts of the current URL route. This might seem boring on its own, but it can be incredibly powerful when combined with conditional logic, allowing you to make a template that reacts differently depending on which part of your site a user finds themselves on. You could even create buttons with hyperlinks that change dynamically based on certain conditions.
- `Format` – This tag allows you to reformat text to make it fit your needs. For example, in combination with the `Route` tag mentioned above, you could reformat portions of the current URL to make breadcrumbs. Or convert text content into a URL query string to pass data to other pages or sites.
- `Async` and `Cache` – These two tags allow you to optimize the performance of your site by allowing you to delay loading certain pieces of content until after the initial page load (known as “lazy loading”) or to cache specific sections of your template.
- `Math` – This tag allows you to make mathematical calculations within your template.
- `Date` – Build custom calendars or write templates that take into account the current date and time using this tag.
- `Redirect` – Want to redirect a user if they match certain criteria? The Redirect tag makes that easy.

These are just a handful of our favourite tags and the examples provided above only scratch the surface of what’s possible when you combine these tags together in an L&L template.

## How can I learn to use Loops & Logic?
Learning to write functional, efficient L&L markup isn't difficult. In fact, the straightforward syntax based almost entirely on HTML means that most people can become proficient in building their own templates in just a few hours regardless of their experience level. If you don't have previous experience with advanced WordPress development, we recommend working through the beginner's guide linked below to get a good understanding of how L&L works, what's going on behind the scenes, and how you can put it to work on your own sites. Once you're comfortable with the basics, our learning guides will allow you to quickly see all the tags and attributes at your disposal.

While the links below are beginner guides, we’ll assume you have a basic understanding of HTML syntax and understand the concepts of tags and attributes. We’ll also assume you're familiar with basic WordPress concepts like post types and taxonomies. We recommend working through these guides in the following order:

1. [The inner workings of L&L](/docs/getting-started/loops-and-logic/inner-workings-loops-and-logic): start here to get a solid understanding of what's going on behind the scenes with Loops & Logic.
2. [The syntax of L&L markup](/docs/getting-started/loops-and-logic/syntax-loops-and-logic-markup): once you have a general understanding of how L&L works, learn the syntax rules to use when writing your own templates.
3. [Creating a simple template](/docs/getting-started/loops-and-logic/creating-a-simple-template): now that you know the syntax, take a look at a simple template example to get an intuitive understanding of the templating language.
4. [Displaying an L&L template](/docs/getting-started/loops-and-logic/displaying-a-template): being able to write a template is important, but you'll also need to know how to place it on a page!
5. [Importing and exporting L&L templates](/docs/getting-started/loops-and-logic/import-export): satisfied with your template? Loops & Logic makes it easy to export and import your templates to use them across multiple sites.