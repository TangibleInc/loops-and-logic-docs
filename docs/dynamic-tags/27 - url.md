---
id: url
title: Url
tags:
  - Dynamic Tags
  - Urls
---

The `Url` tag gets various URLs for links.

#### Example

```html
<Url plugins />
```

## URLs

- `current` - URL of the current page
- `site` - Site root
- `home` - Home
- `admin` - URL of `wp-admin`
- `theme` - Theme
- `child_theme` - Child theme
- `content` - URL of `wp-content`
- `plugins` - Plugins folder
- `uploads` - Uploads folder

#### Login, logout, register

These URLs redirect to the site home page by default.

Pass a parameter `redirect` to set the redirect URL.

- `login` - Login
- `logout` - Logout
- `register` - User registration

## Multisite

- `network_site` - Network site root
- `network_home` - Network home
- `network_admin` - Network admin

## URL Query

The "query", in this context, means the part of a URL that comes after `?` (question mark). Each query parameter has a name, `=` (equal sign), and value. They are joined with `&` (ampersand). For example, let's take this URL: `https://example.com?color=blue&size=small`

Use the `query` attribute to get a parameter value by referencing its name. The example below would output the value `blue`:

```html
<Url query=color />
```

Use the attribute without specifying a value to return the full query string in the current URL. The example below would output the value `color=blue&size=small`:  

<Url query />

To return the current URL including all query parameters, set the attribute equal to `true`. The example below would output the value [`https://example.com?color=blue&size=small`](https://example.com?color=blue&size=small)

```html
<Url query=true />
```