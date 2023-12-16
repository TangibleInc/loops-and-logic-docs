---
id: setting
title: Setting
tags:
  - Dynamic Tags
---
Use the `Setting` tag to get site settings.

Pass the name of the setting as the first attribute.

```html
<Setting admin_email />
```

See [this page for a reference of all site settings in WordPress core](https://codex.wordpress.org/Option_Reference).

## Field

If the setting's value is an array or associative array, use the `field` attribute to get a property from it.

```html
<Setting custom_setting field=id />
```

We plan to extend this feature to support getting values deeper in an array/object.