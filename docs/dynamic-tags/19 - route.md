---
id: route
title: Route
tags:
  - Dynamic Tags
  - URLs
---
The `Route` tag gets the current URL route, or a part of it.

A "route" means everything after the site URL.

#### Example

If the current URL is: `https://example.com/product/sample-product`

Then the following:

```html
<Route />
```

..will show `product/sample-product`.

#### Note

The route does not start (nor end) with `/` (forward slash).

## Route part

Use the `part` attribute to get a route part.

Route parts are separated by `/` (forward slash).

#### Single

To get a single part, pass its "index", a position number starting with 1.

```html
<Route part=2 />
```

#### Until

Add `~` in front of the index to get all parts until (and including) that position.

```html
<Route part=~2 />
```

#### After

Add `~` after the index to get all parts after (and including) that position.

```html
<Route part=2~ />
```

#### Between

Add `~` between two indexes to get all parts between (and including) those positions.

```html
<Route part=2~3 />
```

## Last route part(s)

Use the `part` attribute with a negative index (-1 and below) to get a part of the route, counting from the last.

It can be combined with `~` to get a range of parts.

Here are some examples.

#### Last

```html
<Route part="-1" />
```

#### Second to last

```html
<Route part="-2" />
```

#### From second to last

```html
<Route part="-2~" />
```

#### Until second to last

```html
<Route part="~-2" />
```

## Match routes

Use the `If` tag with subject `route` to see if the current route matches a given pattern.

```html
<If route value="hello-world">
  Hello, world!
</If>
```

The value can include the following "wildcards" to match a pattern.

- `?` - Any single character
- `*` - Any single route part
- `**` - Matches one or more route parts

For example:

```html
<If route value="product/*">
  Single product
</If>
```

Remember to quote the value, since it typically contains a slash.

## Route status

With the Tangible Views theme, a template can set the response status code.

For example, inside a "Not Found" page:

```html
<Route status=404 />
```