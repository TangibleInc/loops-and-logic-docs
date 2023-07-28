---
id: slider
title: Slider
tags:
  - Dynamic Tags
  - Modules
---

The `Slider` tag provides a general-purpose slider. Each slide is wrapped in a `Slide` tag.

Note that this tag is a module, which means that it loads an additional library when used.

Example:

```html
<Slider>
  <Loop acf_gallery=images>
    <Slide>
      <img src="{Field url size=large}" />
    </Slide>
  </Loop>
</Slider>
```

## Options

The following options can be set as attributes.

### Visibility

- `controls` - Control icons for left/right navigation - true/false (Default: true)
- `pager` - Dots below slider for page navigation - true/false (Default: true)

### Behavior

- `loop` - Loop start and end slides - true/false (Default: true)
- `drag` - Enable dragging by mouse to navigate - true/false (Default: true)

### Autoplay

- `auto` - Enable auto-play - true/false (Default: false)
- `speed` - Speed of transition between slides - number in milliseconds (Default: 800)
- `pause` - Duration of pause for each slider - number in milliseconds (Default: 5000)
- `pause_on_hover` - Pause on hover - true/false (Default: true)

### Items

- `items` - How many slides to show for each "page"

#### Responsive

Optionally, set `responsive` attribute for responsive options.

It expects a list of maps, with each map having these properties:

- `break` - Maximum window width in pixels
- `items` - How many items to show

##### Example

In the following example, we will show:

- 4 items per page by default
- 3 items for width smaller than 800px
- 2 items for below 480px

To create a list separately and pass:

```html
<List name=responsive_options>
  <Map>
    <Key break>800</Key>
    <Key items>3</Key>
  </Map>
  <Map>
    <Key break>480</Key>
    <Key items>2</Key>
  </Map>
</List>

<Slider items=4 responsive="{Get list=responsive_options}">
  ..
</Slider>
```

---

Alternatively, the responsive options can be passed directly in the attribute, in [Human JSON syntax](https://hjson.github.io/).

```html
<Slider items=4 responsive="[{ break: 800, items: 3 }, { break: 480, items: 2 }]">
  ..
</Slider>
```