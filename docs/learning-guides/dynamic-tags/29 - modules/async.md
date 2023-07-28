---
id: async
title: Async
tags:
  - Dynamic Tags
  - Modules
  - Performance
---

The `Async` tag is used to improve page load time. It creates an empty HTML element, and after the page has loaded, a little script makes an asynchronous request to the server to render the template. This approach is also known as "lazy loading".

Note that this tag is a module, which means that it loads an additional library when used.  

### Example

A list of a thousand posts typically takes a few seconds to finish loading.

```html
<Loop type=post count=1000>
  <Field title />
</Loop>
```

Wrap the above template with the `Async` tag:

```html
<Async>
  ...
</Async>
```

The page will load immediately, then it gets the content from the server.

## Caveats

There are some disadvantages to this approach.

- Page layout can shift around as the content is being loaded.
    
- Some search engines might not be able to index the content.
    
- Currently, modules that require additional script files (such as pagination, slider, form, and dynamic table) are not supported. Work is in progress on a module loader to solve this.
