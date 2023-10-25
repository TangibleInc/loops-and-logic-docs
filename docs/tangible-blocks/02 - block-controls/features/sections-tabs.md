---
id: sections-tabs
title: Sections and Tabs
tags:
- Blocks
---
## Sections

By default, controls are grouped in a default settings section titled "Settings".

To create multiple sections, controls can be wrapped in `Section` tags.

Each section requires a `title` attribute.

```html
<Section title="Section 1">
  ..Controls..
</Section>

<Section title="Section 2">
  ..Controls..
</Section>
```

## Tabs

By default, controls sections are grouped in a default tab, titled differently by each page builder.

In Gutenberg and Elementor the default tab is titled "Content", and in Beaver Builder it's called "General".

To create multiple tabs, controls and sections can be wrapped in `Tab` tags.

Each tab requires a `title` attribute. If the title is `default`, it will use the default tab for the page builder.

```html
<Tab title="default">
  ..Controls or Sections..
</Tab>

<Tab title="Custom tab">
  ..Controls or Sections..
</Tab>
```