# HTML module

This is the foundation for a new streaming HTML parser based on the [SAX (Simple API for XML)](https://en.wikipedia.org/wiki/Simple_API_for_XML) parsing algorithm.

Other HTML parsers typically process the entire HTML document, building the full abstract syntax tree by nested function calls to parse each tag and its children.

In contrast, SAX parsers are linear and event-driven. It processes the document as a linear stream of events, each event being a parsed "atom". The parsing continues from one event to the next without holding it in memory, all within a single loop and function context.

Need tests to confirm feature parity of previous and current parsers.

And a benchmark to measure performance improvement.

#

The L&L template language requires specific features from a parser beyond regular HTML.

- Case-sensitive tag names: a typical HTML parser converts all tag names to upper/lowercase, but we need that information

- Attributes without value, in the order that they were defined: most parsers do not maintain the order but we need that information, especially the If tag.


# HTML

- HTML living standard https://html.spec.whatwg.org/multipage/

- CSS Snapshot 2023 https://www.w3.org/TR/CSS/#css-official

- ECMAScript Language Specification https://tc39.es/ecma262/

```typescript
type Node = [
  tagName: string,
  attributes: NodeAttributes,
  children?: Node[]
]
```

## Tag

```ts
type TagNode = [
  name: string,
  attributes: TagAttributes,
  children: TagNode[],
  context: TagContext
]
```

### Tag attributes

```ts
type TagAttributes = {
  [key: string]: string
}
```

#### Attribute value

- ? Best way to support tags in attribute value

  A difficulty in previous version of template language was using `{}` to
  escape HTML in attribute value. Escaping and unescaping brackets became problematic,
  for example, passing variables that contain HTML, disambiguating with `{}` for JSON object,
  regular expression patterns, etc.

- ? What if attributes supported JSON by default, and only parsed HTML could be passed

- ? What if dynamic tags could return and pass around any value type, not only string


#### Tag attribute pairs

A list of key/value pairs has the advantage of extended syntax, like the If tag could take multiple conditions.

```ts
type TagAttributePair = [
  key: string,
  value?: string
]
type TagAttributePairs = TagAttributePair[]
```

#### Tag position

```ts
type TagPosition = {
  start: number,
  end: number
}
```
