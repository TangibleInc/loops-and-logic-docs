---
id: control-visibility
title: Control Visibility
tags:
- Blocks
- Conditional Logic
---

Tabs, sections, and controls can be shown or hidden based on control values.

For this purpose, the `If` tag is extended with the following attributes.

- `control` - Name of the control (Required)
- `value` - Expected value
- `compare` - Comparison operator: `is`, `not`

## Examples

### Control

```html
<If control=some-control value=this>
  <Control type=text name=another-control />
</If>
```

### Section

```html
<If control=switch-control value=on>
  <Section title="Conditional section">
    ...
  </Tab>
</If>
```

### Tab

```html
<If control=number-control value="0" compare="not">
  <Tab title="Conditional tab">
    ...
  </Tab>
</If>
```

### Combine with regular If tag

The `If` tag without `control` attribute works as usual.

```html
<If user_role=admin>
  <Tab title="Tab for admin users">
    ...
  </Tab>
</If>
```

However, regular `If` tags cannot be mixed with `control` attribute within the same If/Else conditions.

```html
<If user_role=admin>
  ...
<Else if control=numer-control value=1 />
  ..Will not work..
</If>
```