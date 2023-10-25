---
id: variables
title: Variables
tags:
  - Dynamic Tags
  - How-to
  - Loop
---
## Loop variable type

The variable type `loop` provides variables related to the current loop.

Use the `Get` tag and the `loop` attribute.

```html
<Get loop=count />
```

- `count` - Current loop count, an index starting from 1
- `total` - Total number of items in current loop
- `previous_total` - Total number of items in previous loop, after it's closed

### Field loop

For fields that are loop instances, like a list or ACF repeater, use the `field` attribute (or ACF field type) to specify the field name.

For example, to get the number of total items in a repeater field:

```html
<Get loop=total acf_repeater=field_name />
```

## Query variable type

The variable type `query` allows multiple loops to reuse the same query.

#### Set query

Use the `Set` tag and the `query` attribute to create a loop instance with given variable name.

The example below defines the query variable `recent_posts`.

```html
<Set query=recent_posts type=post count=3 />
```

All attributes except for `query` are treated the same as the `Loop` tag.

#### Loop query

Use the `Loop` tag with `query` attribute to loop through the stored query.

```html
<Loop query=recent_posts>
  ...
</Loop>
```

This can be done multiple times without creating new queries.

### Default query

The query variable called `default` is a special one, which sets the default query.

```html
<Set query=default type=post name=example-post />
```

Typically, this will be a query for a single item, such as a post of any post type.

The default query is used for fields outside of any loop.

```html
<Field title />
```

The above would show the title of the example post.