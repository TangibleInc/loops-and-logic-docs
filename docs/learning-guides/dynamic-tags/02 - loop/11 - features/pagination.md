---
id: pagination
title: Pagination
tags:
  - Dynamic Tags
  - How-to
  - Loop
---
This is a feature for AJAX pagination of loops.

With the `Loop` tag, use the `paged` attribute to define the number of items per page.

```html
<Loop type=post paged=2>
```

This will wrap the loop with an HTML element, and enqueue the pagination script.

Currently, the feature only supports the Post loop type: posts, pages, custom post types. (And ACF relationship field, which uses post loop internally.)

## Buttons

After the loop, use the `PaginateButtons` tag to display buttons for navigating between pages.

```html
<PaginateButtons />
```

If there is only one page, it will not display anything.

### Scroll top

To enable "scroll to top" behavior, set the attribute `scroll_top` to `true`.

```html
<PaginateButtons scroll_top=true />
```

On navigating to a new page, it scrolls to the top of the paged content. This can be helpful if you have pages that could be longer than screen height.

#### Smooth scroll

By default, it animates moving to the top for a "smooth scroll" effect.

Use the attribute `scroll_animate` to change its behavior.

It can be `false` to disable animation, which makes it jump to the top.

```html
<PaginateButtons scroll_top=true scroll_animate=false />
```

Or it can be set to a number, for the animate duration in milliseconds. The default is `300`.

```html
<PaginateButtons scroll_top=true scroll_animate=2000 />
```

The above will scroll at a leisurely pace of two seconds.

## Fields

Optionally, use the `PaginateFields` tag to display current pagination state.

```html
<PaginateFields>
  Page <Field current_page /> of <Field total_pages />
</PaginateFields>
```

Available fields are:

- `current_page` - Current page
- `total_pages` - Total number of pages

The current page will be updated as the user navigates pages.

## Example

Here's a full example of loop pagination.

```html
<ul>
  <Loop type=post paged=2>
    <li>
      <a href="{Field url}"><Field title /></a>
    </li>
  </Loop>
</ul>

<PaginateButtons />

<PaginateFields>
  Page <Field current_page /> of <Field total_pages />
</PaginateFields>
```