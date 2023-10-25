---
id: cache
title: Cache
tags:
  - Dynamic Tags
  - Modules
  - Performance
---
The `Cache` tag is used to improve page load time. It caches the rendered template using [WP_Object_Cache](https://developer.wordpress.org/reference/classes/wp_object_cache/), which stores it in the database by giving it a unique name and expiration time. This supports [persistent cache plugins](https://developer.wordpress.org/reference/classes/wp_object_cache/#persistent-cache-plugins), such as Memcached, Redis, W3 Total Cache, and LiteSpeed.

Note that this tag is a module, which means that it loads an additional library when used.

**Example**

```html
<Cache name=some_name expire="3 days">
  ...
</Cache>
```

The following attributes are required.

- `name` - A unique name used to store the result
- `expire` - Expiration time expressed as number, add a space after it, and unit: minute(s), day(s), month(s), year(s)

## Clear cache

Use the `clear` attribute and the unique name to clear the cache.

```html
<Cache clear=some_name />
```

This can be useful during development to fetch fresh content. It's best to be used once and removed, or commented out with [the `Note` tag](/docs/dynamic-tags/note).

## Cache by user

For content that changes based on current user, the user ID can be added to the unique name.

```html
<Cache name="some_name_{User id}" expire="3 days">
  ...
</Cache>
```

This creates a separate cache for each user.

It will take up more database space if you have many users or large templates.

## Caveats

- For use with `Async` tag, the `Cache` tag needs to be inside it, instead of the other way around
    
- Currently, modules that require additional script files (such as pagination, slider, form, and dynamic table) are not supported. Work is in progress on a module loader to solve this.