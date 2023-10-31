---
id: set-get
title: Set and Get
tags:
  - Dynamic Tags
  - Variables
---
The `Set` and `Get` tags are useful for remembering a value to use later, or in multiple places.

This is commonly called a "variable", which has a unique name and holds a reference to a value. For global variables and all variable types except `local`, variable values are stored in the memory during a single page load. They are only available after they've been assigned, within the template itself, and for other templates loaded after or below it.

## Set

Use the `Set` tag to save a value in the memory by a given name.

In the example below, the current post ID is stored in a variable called `current_id`.

```html
<Set name=current_id>
  <Field id />
</Set>
```

As a shortcut, the name can be given directly as the first attribute.

```html
<Set current_id>...</Set>
```

#### Dynamic name

The attribute `name` can be used to create a dynamic variable name.

```html
<Set name="{Get X}_output">...</Set>
```

## Get

Use the `Get` tag with a variable name to get the value.

```html
<Get name=current_id />
```

#### Pass variable to tag attribute

The Get tag can be used to pass a variable to a tag attribute.

```html
<Field name="{Get X}">
```

Inside the attribute, angle brackets `<>` need to be changed to `{}`.

## Variable types

In addition to regular variables, there are other variable types with special behavior.

- [JS](#js-variable)
- [List](/dynamic-tags/list#get-list)
- [Local](#local-variable)
- [Logic](/dynamic-tags/if/logic-variables#get-condition)
- [Loop](/dynamic-tags/Loop/features/variables)
- [Map](/dynamic-tags/map#get-map)
- [Path](/dynamic-tags/path)
- [Query](/dynamic-tags/Loop/features/variables#query-variable-type)
- [Route](/dynamic-tags/route)
- [Sass](#sass-variable)
- [Setting](/dynamic-tags/setting)
- [Site](/dynamic-tags/site)
- [Template](#template-variable)
- [URL](/dynamic-tags/url)

These can be accessed by using an attribute name of the variable type, instead of the `name` attribute.

For example, to get the site URL:

```html
<Get url=site />
```

Most of the variable types have a tag as a shortcut. The above is equivalent to:

```html
<Url site />
```

For details, see the page for each variable type.

## Template variable

The `template` variable type is useful for storing templates, then rendering them later, or in multiple places.

This is in contrast to regular variables, which are rendered upon setting them.

For example, to create a reusable template:

```html
<Set template=title_and_content>
  <h1><Field title /></h1>
  <Field content />
</Set>
```

It can be used anywhere, such as inside a loop.

```html
<Loop type=page count=1>
  <Get template=title_and_content />
</Loop>
```

## Local variable

A local variable only exists within a template post or file and any "child" templates loaded inside of it. These variables do not exist for templates that are loaded on the page after or below the template. Every template gets a fresh set of memory for local variables when it's loaded which is available for itself and its children.

Use the `local` attribute to set and get local variables.

```html
<Set local=variable_name>..</Set>

<Get local=variable_name/>
```

Local variables are useful for templates that you plan to share with other people, to make sure the template doesn't change variables used outside of it.

## JS variable

This is a way to pass values to the Script section of a template post.

```html
<Set js=variable_name>..</Set>
```

A valid variable name must include only alphanumeric (letters and numbers) and underscore `_`. It cannot include a dash `-`.

Use the `type` attribute to define the value type: `number`, `array` (or `list`), `object` (or `map`), and `string`. `string` wraps the value in "quotes" while all other types work the same as the default by passing an unquoted value.

## Sass variable

This is a way to pass values to the Style section of a template post.

```html
<Set sass=variable_name>..</Set>
```

A valid variable name must include only alphanumeric (letters and numbers), underscore `_`, and dash `-`.

Use the `type` attribute to define the value type: `number`, `color`, `list`, `map`, and `string`. `string` wraps the value in "quotes" while all other types work the same as the default by passing an unquoted value.