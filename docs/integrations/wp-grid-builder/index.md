# WP Grid Builder

## Facets

Loops & Logic now supports WP Grid Builder facet filtering capabilities, allowing you to filter your Loop content using WPGB facets. This allows you to build complex Loops with the L&L syntax while still using WPGB facets to filter that loop!

### How It Works

The integration follows the WP Grid Builder's [method for filtering custom content](https://docs.wpgridbuilder.com/resources/guide-filter-custom-queries/) with facets. There are three things required to hook up a facet to a Loop:

1. Add the `wp_grid_builder` attribute to your `<Loop>` tag with a unique identifier, prefixed by `wpgb-content` (for example, `wpgb-content-1`)
2. Add the same identifier as a `class` on your element that wraps your Loop items
3. Reference this same identifier in your WPGB facet shortcode in the `grid` attribute

### Basic Usage

```html
<!-- Step 1: Create your Loop with the wp_grid_builder attribute and class -->
<ul class="wpgb-content-1">
  <Loop type=post wp_grid_builder=wpgb-content-1>
    <li><Field title /></li>
  </Loop>
</ul>

<!-- Step 2: Add facets that target the same identifier -->
<Shortcode wpgb_facet id="1" grid="wpgb-content-1" />
```

### Multiple Filtered Loops on the Same Page

To filter multiple loops on the same page using different facet sets, use different suffixes.

```html
<!-- Facets for first loop -->
<Shortcode wpgb_facet id="1" grid="wpgb-content-1" />

<!-- First filtered loop -->
<ul class="wpgb-content-1">
  <Loop type=post wp_grid_builder=wpgb-content-1>
    <li>
      <h3><Field title /></h3>
    </li>
  </Loop>
</ul>

<!-- Facets for second loop -->
<Shortcode wpgb_facet id="2" grid="wpgb-content-2" />

<!-- Second filtered loop with different post type -->
<ul class="wpgb-content-2">
  <Loop type=product wp_grid_builder=wpgb-content-2>
    <li>
      <h3><Field title /></h3> - <Field price />
    </li>
  </Loop>
</ul>
```

### Pagination

When using WPGB facets on an L&L Loop, do NOT use the L&L native pagination tags: `<PaginateButtons />`. 

Instead, you'll need to use the WP Grid Builder pagination facet. This is because after you have filtered posts, the pagination needs to know what posts match the new filtered query when paginating, and the L&L pagination won't have that context.

(When using WPGB's pagination facet, remember to assign the grid param to the pagination facet like you did your other facets)

`[wpgb_facet id="your_pagination_facet_id_here" grid="wpgb-content-1"]`