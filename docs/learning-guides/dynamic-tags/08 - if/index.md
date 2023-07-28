---
id: if
title: If
tags:
- Dynamic Tags
- Logic
---

The `If` tag evaluates whether a condition is true or false. When the condition is true, its inner content is displayed.

The basic structure is:
```html
<If subject comparison value>
The condition is true.
</If>
```
## Overview

The condition is expressed using tag attributes to define the subject, the comparison, and the value. These attributes are commonly written in the following order:

*   ### Subject (required)

The subject defines what data is being evaluated. The `If` tag must always contain a subject. This subject can use any of the attributes listed as *core conditions* below when working with WordPress core content and may use other conditions when working with content from third-party plugins.

#### Subject without a value

In some cases, the subject is given without a value, like in the example below in which the condition is true when the item being looped through is the first item in the loop:
```html
<If first>
```
Here's another example of an attribute given without a value. The condition is true when the `Loop` count is more than two:
```html
<If count more_than value="2">
```
 #### Subject with a value

Other subjects like `check` and `field` require a value. In this example, the condition is true when the `title` field is not empty:
```html
<If field="title" exists>
```
 #### Comparison (optional)

The comparison defines what to do with the subject, such as comparing it to another value or simply checking if it exists. Usually, this is written as a second attribute without a value, like `is`, `more_than`, or `less_than`. It can also be given as an attribute with a value, like `is="something"`. If no value is specified, the default comparison is exists. If a value is specified, the default comparison is `is`. An `If` tag can only contain one comparison. To build complex conditions with multiple comparisons, see logic variables.

#### Value to compare (optional)

Many of the core conditions support defining a value, written with the attribute `value="something"`. As noted above, this value can also be added to the comparison, so the comparison and value `is value="something"` can also be written as `is="something"`.

## Attributes

### Core conditions

These subjects are defined as conditions for WordPress core content. The integrations in Loops & Logic Pro provide conditions for additional content types.

*   `archive="..."` - This subject evaluates whether the current page is an archive page. It accepts a value of author, category, date, post (default), tag, and taxonomy. It also accepts the attributes type or taxonomy to filter by post type or taxonomy, respectively. In the example below, the condition is true when the template is placed on a category taxonomy archive page.
```html
<If archive="taxonomy" taxonomy="category">
```
*   `check="..."` - This subject evaluates anything contained in its value. It accepts an optional attribute value of type text. In the example below, the condition is true when the first three letters of a certain variable are "ABC."
```html
<If check="{Format length=3}{Get some_variable}{/Format}" is value="abc">
```
*   `count` - This subject evaluates the current loop count. It accepts an optional attribute value of type number. In the example below, the condition is true when the current item isn't the first item in the loop.
```html
<If count is_not value="1">
```
*   `field="..."` - This subject evaluates a field of the current post. It accepts an optional attribute value of type text. In the example below, the condition is true when the current post has a price field that ends with .97.
```html
<If field="price" ends_with value=".97">
```
*   `first` - This subject evaluates whether the current item is the first item in a loop.
*   `last` - This subject evaluates whether the current item is the last item in a loop.
*   `list="..."` - This subject evaluates a list variable. In the example below, the condition is true when the "animals" list contains at least one item that has the value "duck."
```html
<If list="animals" any_is value="duck">
```
*   `logic="..."` - This subject evaluates a logic variable. See logic variables for more information.

*   `loop` - This subject evaluates whether a loop contains any items. It accepts the Loop tag's query parameters as attributes of the If tag. See Loop feature: Exists for more information.

*   `previous_total` - This subject evaluates the total number of items in the previous loop. It accepts an optional attribute value of type number. In the example below, the condition is true when the previous loop had three or fewer items in it.
```html
<If previous_total less_than_or_equal value="3">
```
*   `query="..."` - This subject evaluates whether a query variable exists.

*   `route="..."` - This subject evaluates a URL route. It accepts an optional attribute value of type text or the value can be written directly in the subject attribute, as shown below. See matching routes for more information. In the example below, the condition is true when the current URL is example.com/product/ or any subfolder within that route.
```html
<If route="product/*" exists>
```
*   `singular` - This subject evaluates whether the current page is a singular post page. It accepts a value of post, page, attachment, or any post type. It also accepts the attribute type to filter by post type. In the example below, the condition is true when the template is placed on a product page.
```html
<If singular type="product">
```
*   `total` - This subject evaluates the total number of items in the current loop. It accepts an optional attribute value of type number.
*   `user` - This subject evaluates the current user. It is generally used with the exists or not_exists comparisons.
*   `user_field="..."` - This subject evaluates a field of the current user. It accepts the optional attribute value of type text. In the example below, the condition is true when the locale of the current user is not en_US.
```html
<If user_field="locale" is_not value="en_US">
```
*   `user_role` - This subject evaluates the role of the current user. It accepts an optional attribute value of type text. In the example below, the condition is true when the current user is an administrator.
```html
<If user_role includes value="administrator">
```
*   `variable="..."` - This subject evaluates a variable. It accepts an optional attribute value of type text. In the example below, the condition is true when the variable does not exist.
```html
<If variable="some_variable" not_exists>
```
### Comparisons

Different comparisons can be used depending on the data being compared in the subject or value. The general comparisons can be used regardless of the type of data being compared and other comparisons below can be used when the subject or value contains a certain type of data as indicated.
#### General comparisons

*   `exists` - The condition is true if the subject exists (i.e. the subject is not empty). This is the default comparison if none is specified.
*   `not_exists` - The condition is true if the subject does not exist (i.e. the subject is empty)
*   `is` - The condition is true if the subject exactly matches the value
*   `is_not` - The condition is true if the subject does not match the value
*   `starts_with` - The condition is true if the subject begins with the value
*   `ends_with` - The condition is true if the subject ends with the value
*   `includes` - The condition is true if the value matches any part of the subject
*   `not_includes` - The condition is true if the value does not match any part of the subject

#### When the subject is a list

*   `any_is` - The condition is true if the value matches at least one item in the list
*   `all_is` - The condition is true if the value matches all items in the list
*   `any_is_not` - The condition is true if at least one item in the list does not match the value
*   `all_is_not` - The condition is true if every item in the list does not match the value
*   `any_starts_with` - The condition is true if at least one item in the list begins with the value
*   `all_starts_with` - The condition is true if every item in the list begins with the value
*   `any_ends_with` - The condition is true if at least one item in the list ends with the value
*   `all_ends_with` - The condition is true if every item in the list ends with the value
*   `any_includes` - The condition is true if the value matches part of at least one item in the list
*   `all_includes` - The condition is true if the value matches part of all items in the list
*   `any_not_includes` - The condition is true if the value does not match part of at least one item in the list
*   `all_not_includes` - The condition is true if the value does not match part of all items in the list

#### When the value is a list

*   `in` - The condition is true if the subject matches at least one item in the list
*   `not_in` - The condition is true if every item in the list does not match the subject

#### When the subject and value are numbers

*   `more_than` - The condition is true if the subject is greater than the value
*   `more_than_or_equal` - The condition is true if the subject is greater than or equal to the value
*   `less_than` - The condition is true if the subject is less than the value
*   `less_than_or_equal` - The condition is true if the subject is less than or equal to the value

## Else

The `<Else />` tag is used to provide a template for when the If condition is not met.

Note that it is a closed tag. Everything after it will render when the condition is false.
```html
<If subject comparison value>
The condition is true.
<Else />
The condition is false.
</If>
```
## Else if

Use `<Else if />` to check multiple conditions.
```html
<If first_condition>
First condition is true.
<Else if second_condition />
First condition is false.
Second condition is true.
<Else />
All conditions are false.
</If>
```