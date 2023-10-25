---
id: text-suggestion
title: Text Suggestion
tags:
- Blocks
- Controls
---
This control creates a text field with the option to append selectable data within the text field.

```html
<Control type="text_suggestion" name="text_suggestion_name" label="Text suggestion control">
  <Map choices>
    <Key one>One</Key>
    <Key two>Two</Key>
    <Key three>Three</Key>
  </Map>
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

The value can be rendered in a template, style, or script.

In a template, use `Get` or `Loop` to render the control value.

```html
<Get control=text_suggestion_name />

<Loop control=text_suggestion_name>
  <Field value />
</Loop>
```

In a style, use the standard syntax to refer to SASS variables.

```scss
.style {
  color: #{$text_suggestion_name};
}
```

In a script, use the standard syntax to refer to JS variables.

```js
console.log(text_suggestion_name);
```

## Preview

### In Gutenberg

![](./sSTTuvi3EKVi07Ceub3d7cBMj.png)  

### In Elementor

![](./ut7ooQ9IsimLGU6Y7y1Xo9rJ4.png)  

### In Beaver Builder

![](./FJXarTN1qBu9CgeD2RUKAOPd2.png)