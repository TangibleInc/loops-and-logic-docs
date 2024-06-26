---
id: dynamic-tags
title: Dynamic Tags
description: Learn the syntax and accepted attributes for each dynamic tag in L&L
tags:
  - Dynamic Tags
sidebar_position: 1
---

Templates in Loops & Logic are written in familiar HTML syntax with dynamic tags. The following describes how a tag and its attributes are formed.

A tag is the basic building block of HTML documents. It is distinct from normal text and formed with angle brackets around the tag name, like `<tag>`. We'll call HTML tags like `div` and `img` _static_ tags. In contrast with HTML's static tags, tags provided by the L&L template system, like `Loop`, are _dynamic_. They perform some action, usually on the server side, to generate the output. This output result is standard HTML for the browser.


List of dynamic tags
--------------------


*   [`Date`](/dynamic-tags/date): This tag modifies, formats, or displays a date.
*   [`Embed`](/dynamic-tags/embed): This tag embeds HTML based on a URL from any [provider supported by WordPress](https://wordpress.org/support/article/embeds/).
*   [`Exit`](/dynamic-tags/exit-catch): This tag exits the current template, ignoring the rest of its content.
*   [`Field`](/dynamic-tags/field): This tag gets or displays content from a field either from the current item in a loop or the current post on which a template is placed.
*   [`Format`](/dynamic-tags/format): This tag takes given content and applies various types of formatting to it.
*   [`Get`](/dynamic-tags/set-get) and [`Set`](/dynamic-tags/set-get): These tags create and recall different types of variables.
*   [`If`](/dynamic-tags/if): This tag creates logic statements to conditionally display content or run sections of markup when certain conditions are met.
*   [`JSON-LD`](/dynamic-tags/json-ld): This tag creates structured data (schema) that can be added to the head of a web page.
*   [`List`](/dynamic-tags/list): This tag creates a list of items, also known as an array.
*   [`Load`](/dynamic-tags/load): This tag loads a template or file.
*   [`Loop`](/dynamic-tags/loop): This tag finds every item of content in the database that matches a set of criteria and loops through its inner contents once per item.
*   [`Map`](/dynamic-tags/map): This tag creates a map of items, also known as an associative array.
*   [`Meta`](/dynamic-tags/meta): This tag generates SEO meta tags.
*   [`Note`](/dynamic-tags/note): This tag displays notes within a template. Notes are not displayed when a template is rendered.
*   [`Path`](/dynamic-tags/path): This tag gets folder paths for various parts of the site.
*   [`Random`](/dynamic-tags/random): This tag generates a random number.
*   [`Raw`](/dynamic-tags/raw): This tag stops dynamic tags contained within it from being rendered. HTML tags and content will still be rendered.
*   [`Redirect`](/dynamic-tags/redirect): This tag redirects a user to a URL or route.
*   [`Route`](/dynamic-tags/route): This tag gets all or part of the current URL route (everything after the domain name).
*   [`Setting`](/dynamic-tags/setting): This tag gets site settings.
*   [`Shortcode`](/dynamic-tags/shortcode): This tag renders shortcodes inside a template.
*   [`Taxonomy`](/dynamic-tags/taxonomy-term): This tag is a shortcut for creating a taxonomy term loop from the current post.
*   [`Template`](/dynamic-tags/template): This tag runs templates inside other templates and allows for passing data between templates.
*   [`Timer`](/dynamic-tags/timer): This tag measures and displays the time it takes to render a template section.
*   [`Url`](/dynamic-tags/url): This tag gets various URLs for links.
*   [`User`](/dynamic-tags/user): This tag is a shortcut for creating a user loop for the current user.


### Modules

Most of the dynamic tags in L&L represent features that are built into the core of the plugin. Some tags, which we refer to as _modules_, represent features or functionality that depend on third-party frontend libraries bundled within the plugin. In practice, modules are written and used in the same way as tags. However, using a module in a template loads its associated library, which can have minor performance impacts. There is no impact on performance when these modules aren't used in a template.

*   [`Async`](/dynamic-tags/modules/async): This tag creates an empty HTML element and, after the page has loaded, makes an asynchronous request to the server to render the template, known as "lazy loading."
*   [`Cache`](/dynamic-tags/modules/cache): This tag stores the rendered template in the database along with an expiration time.
*   [`Glider`](/dynamic-tags/modules/glider): This tag creates a full-screen gallery glider.
*   [`Markdown`](/dynamic-tags/modules/markdown): This tag renders inner contents using Markdown formatting.
*   [`Math`](/dynamic-tags/modules/math): This tag allows for mathematical calculations within the template.
*   [`Mobile Detect`](/dynamic-tags/modules/mobile-detect): This attribute gets the type of device being used by the user; either mobile, tablet, or desktop.
*   [`Prism`](/dynamic-tags/modules/prism): This tag produces a code block with syntax highlighted in different languages. This is a module that loads a library when used.
*   [`Sass`](/dynamic-tags/modules/sass): This module extends the `style` tag to render the Sass styling language.
*   [`Slider`](/dynamic-tags/modules/slider): This tag displays a general-purpose gallery slider.

Syntax for tags
---------------

### Tag name

Dynamic tags are always capitalized, like `Loop` and `Field`. This is in contrast to static HTML tags, which are in lowercase, like `div` and `span`. You might see a resemblance to React JSX, which has a similar syntax.

### Self-closed tag

Just like in HTML, there are both open and closed dynamic tags. An example of a closed tag is `<Field />`. It can have attributes, but not inner content. Closed tags always end with `/>`.

### Wrapping tag

An open tag, for example `<Loop>`, can have both attributes and inner content. This inner content can be a simple as plain text or even other tags. Open tags are closed like `</Loop>`.

Syntax for attributes
---------------------

Tag attributes are placed between the tag name and the closing angle bracket. They pass additional information to the tag, for example, image URL, or field name.

### Key and value

An attribute is usually a pair of "key" and "value".
```html
<Field name="title" />
```
Here, `name` is the key, and `title` is the value.

### Quoted value

Note how the value is surrounded by `"`double quotes`"`. The quotes are _not necessary_ if the value contains only alphanumeric characters, `-` dash, and `_` underscore. Use quotes when a value has a space or special characters like a slash `/` or angle brackets `<>`. If a value includes double quotes, you can use `'`single quotes`'` around it.

### Key with no value

Some attributes don't accept values and are written by themselves, such as the `title` attribute below.
```html
<Field title />
```

With dynamic tags, this is usually a quick way to pass the `name` attribute, or the most commonly used attribute for that tag. The above example is equivalent to:
```html
<Field name="title" />
```

Syntax for tags within attributes
---------------------------------

To use tags inside an attribute value, replace `<>` with curly braces `{}`. This is useful for passing the result of a dynamic tag to another tag. For example, to create a link from a post URL:
```html
<a href="{Field url}" alt="{Field title}">
  <Field title />
</a>
```

Make sure to quote such attributes, as they usually contain a space. In most cases closed tags like `Field` don't need the slash `/` to close themselves inside an attribute.

## Dynamic attributes
---------------
In most cases, attributes and their values can be changed dynamically using the curly brace syntax described above. However, HTML has some attributes that don't accept a value and are simply true or false based on whether they're added to a tag. These are sometimes called boolean attributes. In these cases, L&L's `tag-attributes` attribute can be used to dynamically add these attributes to a tag. This attribute simply renders its value as an attribute.

In the example below, the audio file will only autoplay and loop if the user visiting the page is logged in.

```html
<audio src="music.mp3" tag-attributes="{If user}autoplay loop{/If}"></audio>
```

If the user is logged in, the HTML output by the template above will be:

```html
<audio controls src="music.mp3" autoplay loop></audio>
```