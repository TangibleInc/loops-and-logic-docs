---
id: field-group
title: Field Group
tags:
- Blocks
- Controls
---
This control allows nesting controls in order to be able to loop through all the inner control values.

```html
<Control type="field_group" name="field_group_name" label="Field group control">
  <Control type="text" label="Text subfield label" name="text_name" />
  <Control type="number" label="Number subfield label" name="number_name" />
</Control>
```

## Attributes

- `default` - Defines the default value of the control.  
    Type: string
- `label` - Defines the label of the control which will be displayed in the page builder.  
    Type: string  
    
- `name` - Defines the name of the control which will be referenced to render the control value.  
    Type: string  
    

## Rendering the control value

The value can be rendered in a template by using `Loop` to loop through the type, name, and value of each inner control.

```html
<Loop control=field_group_name>
  <ul>
    <li>Type: <Field type /></li>
    <li>Name: <Field name /></li>
    <li>Value: <Field value /></li>
  </ul>
  <hr />
</Loop>
```