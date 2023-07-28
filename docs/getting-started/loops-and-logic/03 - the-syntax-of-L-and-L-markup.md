---
id: syntax-loops-and-logic-markup
title: The syntax of L&L markup
tags:
  - Introduction
---

Let’s take a look at some of the rules for writing L&L markup. Many tags will have their own unique format based on how the tag works, but the syntax below sets the ground rules that apply across the entire markup language.

## Writing tags

An easy way to distinguish L&L’s dynamic tags from HTML’s static tags is that dynamic tags are always capitalized, like `<User>` and `<Field>`, unlike static HTML tags which are in lowercase. Just like HTML, L&L markup has different types of tags, some of which require writing opening and closing tags, and others which are self-closing. An example of an open tag is `<Loop>`, which can have attributes and can contain inner content. Inner content is written between the opening and closing tag. In the case of our `<Loop>` tag, this would be closed using `</Loop>`.

Self-closing tags are also sometimes simply called closed tags and they can have attributes, but not inner content. An example of a closed tag is `<Field />`. Closed tags always end with `/>`. Take a look at the example below to visualize how this looks in practice.

```html
<Loop type=post>
  <Field title />
</Loop>
```
The markup above starts with an opening `<Loop>` tag, which has a `type` attribute. After that, there’s a self-closing `<Field />` tag which has an attribute called `title`. As you can see based on the indentation of the markup above, the second line, `<Field title />`, represents the entire inner content of the `<Loop>` tag, which then gets closed using `</Loop>`. Open tags like `<Loop>` can contain all sorts of things as their content: plain text, HTML markup, other dynamic tags (as is the case in this example), and even additional nested loops! The Loops & Logic documentation shows which tags are open and which are closed.

If you’re curious about what the L&L markup above is actually accomplishing, it’s creating a loop query of all the site’s `post` content (all the blog posts on a WordPress site). For every post it finds, it will display that post’s title, continuing to loop and display titles until it’s looped through all the posts in the database.

## Writing the value of an attribute or parameter

If you’re in a rush, the shortest way to define the value of an attribute or parameter is without quotes, as is the case for the `type` and `count` query parameters below. Only values that exclusively contain alphanumerical characters, `-` dashes, or `_` underscores can be defined without quotes.
```html
<Loop type=post count=3></Loop>
```
For multiple values, use a comma without any spaces.
```html
<Loop type=fruit category=apple,orange></Loop>
```
If you need to pass a value that contains a space or any special character, use quotes. Note that L&L is a bit pickier than HTML (at least at the moment) with regards to which special characters can be passed to an attribute without quotes. This means that in general, it’s wise to use quotes around any value that contains a special character, just to guarantee that your markup works.
```html
<Loop type="post" custom_field="name" custom_field_value="John Smith"></Loop>
```
If a value includes double quotes, you can use ‘ single quotes ‘ around it.
```html
<Loop type=post custom_field=name custom_field_value='Dwayne "The Rock" Johnson'></Loop>
```

## Writing dynamic values of an attribute or parameter

In the first section of this guide, we looked at how some dynamic tags, such as the `<Field />` tag, could be used to dynamically render some content from your WordPress site’s database, like a user’s name or a post’s title. But these dynamic tags aren’t _only_ useful for displaying dynamic content on the front end of your site, they can also be used to dynamically define the value of an attribute or query parameter.

To do this, replace the angle brackets that would usually surround a dynamic tag (like `<Field url />` in the example below) with curly braces. Since these attributes usually contain a space, be sure to wrap them in quotes. It's always a good idea to keep the slash `/` on closed tags like `<Field />`, but it can safely be omitted if there aren't multiple tags nested in an attribute. If you're unsure whether it will cause issues, just leave the slash in.
```html
<Loop type=post>
  <a href="{Field url /}" alt="{Field title /}">
    <Field title />
  </a>
</Loop>
```

The markup above creates a loop of all posts, then uses the URL and title fields of each post to define the values of some standard attributes of the HTML `<a>` tag.

It’s also possible to write multiple dynamic tags within an attribute value. Just as demonstrated above, this is done by replacing all the angle brackets with curly braces, like this:
```html
<Loop type=post custom_field=some_custom_field custom_field_value="{Format length=10}{Field other_custom_field /}{/Format}">
```
Remember that you can also use these kinds of tags to define attribute values in dynamic tags as well. In the somewhat advanced example below, we create a loop inside another loop, using the outer loop to define some query parameters of the inner loop.
```html
<Loop type=taxonomy_term taxonomy=category>
  <h2><Field title /></h2>
  <Loop type=post category="{Field name /}">
    <p><Field title /></p>
  </Loop>
</Loop>
```
What this markup is doing is creating a loop through all the blog post categories on our site and displaying the title of the category (its name) as a heading. Then, under each category name, we’ve created a second loop that looks for posts that are in whatever category we’re currently looping through (using the dynamic value `"{Field name /}"`), which then displays every post that matches the current category.

If you have a WordPress blog that uses categories, try [installing Loops & Logic](https://wordpress.org/plugins/tangible-loops-and-logic/) on your own site and pasting the markup above into a template to see its output!