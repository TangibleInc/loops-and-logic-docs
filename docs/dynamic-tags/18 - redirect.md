---
id: redirect
title: Redirect
tags:
  - Dynamic Tags
  - URLs
---
The `Redirect` tag redirects to a different page or URL.

It takes an attribute `to`, for the target URL or route.

Note that the redirect happens immediately when the tag is rendered. You usually want to wrap it in an `If` condition - for example, when the user is not logged in, etc.

## External URL

Start with the protocol like `https://` to redirect to an external URL.

```html
<Redirect to="https://example.com" />
```

## Internal route

Start with a leading slash `/` to redirect within the site.

```html
<Redirect to="/shop" />
```

### Relative route

If you don't start with a slash, it will redirect to a route relative to the current route.

```html
<Redirect to="next" />
```

In the above example, if the current route is `/current`, it will redirect to `/current/next`.