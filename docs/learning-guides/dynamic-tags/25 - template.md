---
id: template
title: Template
tags:
  - Dynamic Tags
  - How-to
---
Use the `Template` tag, or `[template]` shortcode, to render a template post.

Find its ID or name in the template edit screen, in the Publish metabox.

### By name

To get a template by post name (also called a "slug"), use the `name` attribute.

```html
<Template name=test-template />
```

### By ID

To get a template by post ID, use the `id` attribute.

```html
<Template id=74 />
```

### Tag attributes as local variables

Attributes of the Template tag (or shortcode) are passed as [local variables](/docs/learning-guides/dynamic-tags/set-get#local-variable).

```html
<Template id=123 my_variable=some_value />
```

Use the `Get` tag to access them from the template.

```html
<Get local=my_variable />
```

  

## Shortcode

The `[template]` shortcode works the same way as the Template tag described above. This is useful for embedding a template in locations where shortcodes can be used.

```html
[template id=74]
```

Like the Template tag, this shortcode can also use attributes to pass [local variables](/docs/learning-guides/dynamic-tags/set-get#local-variable) to the template.

```html
[template id=123 my_variable=some_value]
```

  

## From PHP

Use the function `tangible_template` to work with templates in PHP.

#### From string

It can render a template directly, like `do_shortcode`.

```php
echo tangible_template('<Field title />');
```

#### From file

To load a template file:

```php
echo tangible_template()->load_file( __DIR__ . '/example.html' );
```

This requires the full path to the file, so the `__DIR__` constant is used to get the template path relative to the current PHP file.

#### From post

To load a template post:

```php
echo tangible_template()->load_post([
  'id' => 74
]);
```

  

# Theme files

Use the `Template` tag with `theme` attribute to load sidebar and other theme template files.

#### Sidebar

```html
<Template theme=sidebar />
```

Alternate sidebar

```html
<Template theme=sidebar name=product />
```

The above will load `sidebar-product.php`.

#### Search form

```html
<Template theme=search />
```

#### Template part

```html
<Template theme=part name="template-parts/footer-menu" />
```