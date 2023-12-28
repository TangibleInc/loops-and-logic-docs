# Template assets

Here's how to use the Assets section of the template edit screen.

## Asset name

When editing the asset name, please ensure that it is:

- Unique in the list of assets
- Includes only alphabet letters, numbers, dash `-` or underscore `_`

This is needed to use the asset name for a template variable.

## Use assets from template

Assets attached to a template are available as the variable type `asset`.

From inside the template, use the `Get` tag and `asset` attribute to get asset data.

```html
<Get asset=example field=url />
```

The `asset` attribute is the asset name.

The optional attribute `field` is the attachment field to get.

- `id` - Attachment ID (default)
- `url` - URL
- `name` - Name
- `title` - Title
- `filename` - File name
- `mime` - MIME Type
- `alt` - Alternative text
- `description` - Description
- `caption` - Caption

See the [documentation of the Attachment Loop](/dynamic-tags/loop/attachment) for more information.

### Attachment loop

For some purposes, it might be helpful to create an attachment loop from an asset.

```html
<Loop type=attachment id="{Get asset=example}">
  <Field title />
</Loop>
```

## Use assets from stylesheet

Each asset is available as a local Sass variable, with prefix `asset_` followed by the asset name.

If the name is "example", it can be accessed as `$asset_example`. It is a map, so you can use `map-get()` to get an asset field.

```html
map-get( $asset_example, "url" )
```

## Use assets from script

Each asset is available as a local JavaScript variable, with prefix `asset_` followed by the asset name.

If the name contains a dash `-`, it will be replaced with underscore `_`.

It is an object, so you can use `.` to get an asset field.

```html
asset_example.url
```
