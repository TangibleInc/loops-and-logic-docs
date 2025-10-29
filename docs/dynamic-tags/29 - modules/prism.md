---
id: prism
title: Prism
tags:
  - Dynamic Tags
  - Modules
  - Content
---
The `Prism` tag is a syntax highligher based on [PrismJS](https://prismjs.com).

It produces code blocks like below.

```html
<div class="example">...</div>
```

Note that this tag is a module, which means that it loads an additional library when used.

#### Example

```html
<Prism lang=html>
<div class="example">...</div>
</Prism>
```

Note that the immediate new line after the open tag is ignored.

The code inside must not be escaped - for example, no need to replace `<` with `&lt;`.

Indents are literally passed to the code block.

#### Using Render Example

The `render` attribute can be used in both `Prism` and `Code` tag.

Below is an example of the `render` attribute that is added to both `Prism` and `Code`: 
![Render on Code and Prism on Classname](../29%20-%20modules/images/prism-code-render.jpg)

This is how the code should look like:
```html
<table>
  <thead>
    <tr>
      <th style="width: 250px;">Classnames</th>
      <th>Markup</th>
      <th style="width: 300px;">Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><If check="{Field /}"><code render><Field /></code><Else />Default</If></td>
      <td><Prism lang=html render><p class="{Field /}">Lorem ipsum dolor sit amet</p></Prism></td>
      <td><p class="{Field /}">Lorem ipsum dolor sit amet</p></td>
    </tr>
  </tbody>
</table>
```

Now for comparison, here is what this would have looked like when the `render` attribute is not added
![Render on Code and Prism without Rendern on Classname](../29%20-%20modules/images/prism-code-without-render.jpg)

Here is another example of how render could be used.
![Render on Code and Prism without Render on blockeditor](../29%20-%20modules/images/prism-code-render_2.jpg)

This is how the code should look like:
```html
<table>
  <thead>
    <tr>
      <th style="width: 250px;">Classnames</th>
      <th>Markup</th>
      <th style="width: 400px;">Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code render>blockquote</code></td>
      <td><Prism lang=html render>
        <blockquote>  
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<br />
          <cite>Cicero, 45 BC</cite>
        </blockquote></Prism></td>
      <td>
        <blockquote>  
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<br />
          <cite>Cicero, 45 BC</cite>
        </blockquote>
      </td>
    </tr>
  </tbody>
</table>
```

This would look something like this when the `render` attribute has been removed ![Render on Code and Prism without Render on blockeditor](../29%20-%20modules/images/prism-code-without_render_2.jpg)


### Language

The `lang` property defines the language of the code.

Currently supported are:

- `html`
- `js`, `jsx`, `ts`, `tsx`
- `css`, `scss`
- `php`
- `json`, `bash`, `shell`