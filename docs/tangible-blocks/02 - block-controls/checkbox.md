---
id: checkbox
title: Checkbox
tags:
- Blocks
- Controls
---
This control creates a checkbox that can be toggled on and off.

```html
<Control type="checkbox" name="checkbox_name" label="Checkbox control" />
```

## Attributes

- `default` - Defines the default value of the control.  
    Type: string  
    
- `label` - Defines the label of the control which will be displayed in the page builder.  
    Type: string  
    
- `name` - Defines the name of the control which will be referenced to render the control value.  
    Type: string  
    

## Rendering the control value

The value can be rendered in a template, style, or script.

In a template, use `Get` or `Loop` to render the control value.

```html
<Get control=checkbox_name />

<Loop control=checkbox_name>
  <Field value />
</Loop>
```

In a style, use the standard syntax to refer to SASS variables.

```css
.style {
  opacity: #{$checkbox_name};
}
```

In a script, use the standard syntax to refer to JS variables.

```js
console.log(checkbox_name);
```

## Preview

### In Gutenberg

![](./qJkOWyWtSxXUklnIY8nclB64Z.png)  

### In Elementor

![](./MqlXIZoANz5CC9suMj0pjvJga.png)  

### In Beaver Builder

![](./MOWFwZYLOQuaCnXn8PXjFQLXN.png)