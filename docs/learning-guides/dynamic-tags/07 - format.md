---
id: format
title: Format
tags:
  - Dynamic Tags
  - Formatting
---
The `Format` tag takes given content and applies various types of formatting to it.

#### Example

```html
<Format length=60>
  <Field description />
</Format>
```

The above will trim the field value to maximum length of 60 characters.

## Case

Use the `case` attribute to convert to the following cases.

|Case|Example|
|---|---|
|`camel`|`camelCase`|
|`kebab`|`kebab-case`|
|`snake`|`snake_case`|
|`pascal`|`PascalCase`|
|`lower`|`lowercase`|
|`upper`|`UPPERCASE`|

For example, this:

```html
<Format case=kebab>Hello, world</Format>
```

..will output: `hello-world`.

## Code

Use the `code` attribute to escape text for inline `<code>`, or `<pre>` block.

```html
<Format code>this & that</Format>
```

..will output: `this &amp; that`.

It uses PHP's [htmlspecialchars](https://www.php.net/manual/en/function.htmlspecialchars) function.

## Date

Use the `date` attribute to apply date formatting.

It uses the excellent [Carbon date/time library](https://carbon.nesbot.com/).

See [the Date tag](/docs/learning-guides/dynamic-tags/date) for details on formatting and additionally supported attributes.

#### Examples

```html
<Format date="Y-m-d">today</Format>
```

..will output: `2022-07-18`.

Use `date=default` to use the site setting from Settings -> General -> Date Format.

```html
<Format date="l j F Y" locale=fr>today</Format>
```

..will output: `lundi 18 juillet 2022`.

## Length

Use the `length` attribute to limit to a maximum length of characters.

```html
<Format length=60>
  <Field description />
</Format>
```

It uses PHP's [mb_substr](https://www.php.net/manual/en/function.mb-substr.php) function, which supports UTF-8 multibyte characters.

## Number

Use the `number` attribute to format numbers.

```html
<Format number decimals="2" point="," thousands=".">1000000</Format>
```

..will output: `1.000.000,00`

It uses PHP's [number_format](https://www.php.net/manual/en/function.number-format) function.

Optional attributes are:

- `decimals` - Number of decimal places to display
- `point` - Character for decimal point
- `thousands` - Character for separating thousands

## Replace

Use the `replace` and `with` attributes to replace pieces of text.

```html
<Format replace=" " with="-">555 555 5555</Format>
```

The above example results in `555-555-5555`.

The same attributes are supported in `Field` tag.

```html
<Field phone_number replace=" " with="-" />
```

### Multiple replaces

To replace multiple different texts, use:

- `replace_2` and `with_2`
- `replace_3` and `with_3`

## Remove HTML

Use the `remove_html` attribute to strip content of all HTML tags. For example, the template below would output `12345`.

```html
<Format remove_html>
  <a href="example.com">123</a><script>alert("hi")</script><b>456</b>
</Format>
```

## Slash

Use the `start_slash` or `end_slash` attributes to ensure that a URL or string has a starting or ending slash. Use `start_slash=false` or `end_slash=false` to remove the starting or ending slash. For example, the following template would output `example/`:

```html
<Format start_slash=false end_slash>/example/</Format>
```

This can be helpful when working with URLs, as shown below.

```html
<a href="{Format end_slash=false}{Field url}{/Format}/child-page">Child page</a>
```

## Slug

Use the `slug` attribute to strip out HTML tags, convert to lowercase, remove special characters, and replace spaces with dashes. For example, the template below would output `this-is-a-simple-string`.  

```html
<Format slug>This is a <em>simple</em> string!</Format>
```

## URL

Use format `url_query` to encode URL query string.

```html
<Format url_query>?key=value with some spaces</Format>
```

Usually, this is passed to a link `href` attribute. It's probably easier to set it to a variable first.

```html
<Set q><Format url_query>..</Format></Set>
<a href="https://example.com{Get q}"></a>
```