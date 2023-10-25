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

See [the Date tag](/docs/dynamic-tags/date) for details on formatting and additionally supported attributes.

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

## Index

Given a string, it returns the character at an index, position starting from zero (0).

```html
<Format index=1>ABC</Format> == B
```

Negative index counts from the end of string.

```html
<Format index=-1>ABC</Format> == C
```

It can be passed a list.

```html
<Format list index=1>[1,2,3]</Format> == 2
<Format list index=-1>[1,2,3]</Format> == 3
```

It returns the item at an index starting from zero, or negative index.

## Join

It joins a list of parts into a string using a delimiter.

```html
<Format join=",">[1,2,3]</Format> == 1,2,3
```

If no delimiter is given, it joins them with nothing between.

```html
<Format join>[1,2,3]</Format> == 123
```

## Length

Use the `length` attribute to limit to a maximum length of characters.

```html
<Format length=60>
  <Field description />
</Format>
```

It uses PHP's [mb_substr](https://www.php.net/manual/en/function.mb-substr.php) function, which supports UTF-8 multibyte characters.

It can be combined with `offset`, which accepts an index (position number starting from zero).

```html
<Format offset=2 length=2>ABCDEF</Format> == CD
```

Negative length cuts off characters from the end of string.

```html
<Format length=-2>ABCDEF</Format> == ABCD
```

It can be passed a list.

```html
<Format list length=2>[1,2,3,4,5]</Format> == [1,2]
<Format list length=-2>[1,2,3,4,5]</Format> == [1,2,3]
```

## List

The `list` attribute applies a given format to every item in a list, and returns a new list.

```html
<Format list case=lower>["Hello","World"]</Format>

Result: ["hello","world"]
```

This works for all format types, except for those that already work with a list: `index`, `length`, `offset`, `join`.

Format list can be combined to chain multiple formats for processing a list.

```html
 <Format join=", ">
  <Format list prefix="color-">
    <Format list case=lower>
      <Format list replace="/[^a-zA-Z0-9_-]/s" with="">
        <Format split="," trim>#Red*, !Green), @Blue(</Format>
      </Format>
    </Format>
  </Format>
</Format>

Result: color-red, color-green, color-blue
```

## Match pattern

The `match_pattern` attribute returns a list of parts in a string that match the given regular expression pattern.

```html
<Format match_pattern="/\d+/">Test 123 and 456</Format> == ["123","456"]
```

Also see the [`replace_pattern` attribute](#replace-pattern) and the `If` tag's [`matches_pattern`](../dynamic-tags/if/#comparisons) comparison.

### Pattern syntax

The syntax for regular expressions is extensively documented in [PHP Manual: Pattern Syntax](https://www.php.net/manual/en/reference.pcre.pattern.syntax.php). Remember to use delimiters. If using repetitions, be sure to wrap the regular expression in [`{Raw}` tags](../dynamic-tags/raw) to avoid the inner curly brackets getting interpreted as a nested tag.

For a quick summary:

| Pattern | Matches |
|---|---|
| abc | Letters |
| 123 | Digits |
| \d | Any Digit |
| \D | Any Non-digit character |
| . | Any Character |
| \. | Period |
| \[abc] | Only a, b, or c |
| \[^abc] | Not a, b, nor c |
| \[a-z] | Characters a to z |
| \[0-9] | Numbers 0 to 9 |
| \w | Any Alphanumeric character |
| \W | Any Non-alphanumeric character |
| {m} | m Repetitions |
| {m,n} | m to n Repetitions |
| * | Zero or more repetitions |
| + | One or more repetitions |
| ? | Optional character |
| \s | Any Whitespace |
| \S | Any Non-whitespace character |
| ^…$ | Starts and ends |
| (…) | Capture Group |
| (a(bc)) | Capture Sub-group |
| (.*) | Capture all |
| (abc\|def) | Matches abc or def |

<!-- Couldn't use `inline code` for patterns due to Markdown parser misinterpreting `|` inside code, and can't escape it because it shows the backslash `\` -->


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

## Offset

Given a string, it returns a part of the string from offset (an index starting from zero).

```html
<Format offset=2>ABCDEF</Format> == CDEF
```

Negative offset counts from the end of string.

```html
<Format offset=-2>ABCDEF</Format> == EF
```

It can be combined with length (described below).

```html
<Format offset=2 length=2>ABCDEF</Format> == CD
```

It can be passed a list.

```html
<Format list offset=2>[1,2,3,4,5]</Format> == [3,4,5]
<Format list offset=-2 length=1>[1,2,3,4,5]</Format> == [4]
```

## Prefix/suffix

It adds a string to the beginning (prefix) or end (suffix) of a string.

```html
<Format prefix="color-">blue</Format> == color-blue
<Format suffix="-mode">sync</Format> == sync-mode
```

These are more useful for applying to every item in a list, with [Format List](#list).

```html
<Format join=" ">
  <Format list prefix="color-">
    ["red","green","blue"]
  </Format>
</Format>

Result: color-red color-green color-blue
```

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

## Replace pattern

Use the `replace_pattern` and `with` attributes to replace text matching a regular expression pattern.

```html
<Format replace_pattern="/http(s?):\/\//" with="">https://example.com</Format>
```

For details on the pattern syntax, see the [`match_pattern`](#match-pattern) attribute.

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

## Split

It splits a string into a list of parts using a delimiter.

```html
<Format split=",">A,B,C</Format> == ["A","B","C"]
```

If no delimiter is given, it splits by character.

```html
‌<Format split>ABC</Format> == ["A","B","C"]
```

It can be combined with [`trim`](#trim).

```html
<Format split="," trim>A, B, C</Format> == ["A","B","C"]
```

## Trim

It trims (removes) whitespace or other characters from the beginning and end of a string.

```html
<Format trim>  Hi  </Format> == Hi
<Format trim="-~*">-~*123*~-</Format> == 123
```

It has variants `trim_left` and `trim_right`. These can be combined.

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