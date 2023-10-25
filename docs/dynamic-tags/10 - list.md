---
id: list
title: List
tags:
  - Dynamic Tags
---
Use the `List` tag to create a list of items.

Give it a unique name with the `name` attribute or as the first argument.

```html
<List name=numbers>
  <Item>1</Item>
  <Item>2</Item>
</List>
```

The `Item` tag defines each item. There are two ways to pass a value to the `Item` tag:

- by inner content `<Item>...</Item>`
- by attribute `<Item value="..." />`

They work the same, except the former method may be better for strings that contain HTML.

The above example in JavaScript notation looks like:

```json
[
  1,
  2
]
```

## Map inside list

Use the `Map` tag to set a map as an item.

```html
<List name=numbers>
  <Map>
    <Key one_one>1.1</Key>
    <Key one_two>1.2</Key>
  </Map>
  <Map>
    <Key two_one>2.1</Key>
    <Key two_two>2.2</Key>
  </Map>
</List>
```

The above example in JavaScript notation looks like:

```json
[
  {
    one_one: '1.1',
    one_two: '1.2'
  },
  {
    two_one: '2.1',
    two_two: '2.2'
  }
]
```

## List from JSON

Set the `json` attribute to create a list from JSON string.

```html
<List name=numbers json>
[
  'one',
  'two'
]
</List>
```

It accepts [Human JSON syntax](https://hjson.github.io/), which supports comments, single quotes, and unquoted keys.

## List loop

Use the `Loop` tag and the `list` attribute to loop through items of a list.

The `Field` tag gets each item.

```html
<Loop list=numbers>
  <Field />
</Loop>
```

### Loop items

There's an attribute `items` as a quick way to loop through a list of comma-separated items.

```html
<Loop items=red,green,blue>
  <Field />
</Loop>
```

## List field

Use the `Field` tag with `list` and `item` attributes to get a single value by index.

The `item` attribute is a number starting from 1.

```html
First:  <Field list=numbers item=1 />
Second: <Field list=numbers item=2 />
```

##### Dynamic index

Alternatively, use the `name` attribute with index starting from 0. This can be useful for getting an item by dynamic index, for example, using the [Math tag](/docs/dynamic-tags/modules/math).

```html
<Field name="{Get index}" list=numbers />
```

## Get list

Use the `Get` tag and the `list` attribute to get the whole list.

```html
<Get list=numbers />
```

This outputs a JSON encoded string.