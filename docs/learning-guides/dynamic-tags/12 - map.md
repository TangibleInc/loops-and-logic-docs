---
id: map
title: Map
tags:
  - Dynamic Tags
---
Use the `Map` tag to create a map, also called an associative array.

A map is made of key-value pairs, where the key is used as an index for the value.

Give it a unique name with the `name` attribute.

```html
<Map name=numbers>
  <Key one>One</Key>
  <Key two>Two</Key>
</Map>
```

The `Key` tag defines each key by name, and contains the value. There are two ways to pass a value to the `Key` tag:

- by inner content `<Key name>...</Key>` 
- by attribute `<Key name value="..." />`

They work the same, except the former method may be better for strings that contain HTML.

The above example in JavaScript notation looks like:

```js
{
  one: 'One',
  two: 'Two'
}
```

## Dynamic key

The `Key` tag accepts the key name given as its first attribute, or using the `name` attribute. The latter can be useful for passing a dynamically generated name.

```html
<Key name="{Get variable}">
```

## List inside map

Use the `List` tag to set a list to a given key.

```html
<Map name=numbers>
  <List one>
    <Item>1.1</Item>
    <Item>1.2</Item>
  </List>
  <List two>
    <Item>2.1</Item>
    <Item>2.2</Item>
  </List>
</Map>
```

The above example in JavaScript notation looks like:

```js
{
  one: [
    '1.1',
    '1.2'
  ],
  two: [
    '2.1',
    '2.2'
  ]
}
```

## Map from JSON

Set the `json` attribute to create a map from JSON string.

```html
<Map name=numbers json>
{
  one: 'One',
  two: 'Two'
}
</Map>
```

It accepts [Human JSON syntax](https://hjson.github.io/), which supports comments, single quotes, and unquoted keys.

## Map loop

Use the `Loop` tag and the `map` attribute to get multiple values from a map.

The `Field` tag gets each value by key.

```html
<Loop map=numbers>
  <Field one />
  <Field two />
</Loop>
```

## Map field

Use the `Field` tag and the `map` attribute to get a single value by key.

```html
<Field two map=numbers />
```

## Get map

Use the `Get` tag and the `map` attribute to get the whole map.

```html
<Get map=numbers />
```

This outputs a JSON encoded string.