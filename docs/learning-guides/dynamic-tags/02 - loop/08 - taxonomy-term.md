---
id: taxonomy-term
title: Taxonomy term
tags:
  - Dynamic Tags
  - Loop
---
For loop type `taxonomy_term`, here are the query parameters and fields.

## Query parameters

- `children` - Set true to include only child terms  
    Type: boolean  
    
- `exclude` - Exclude terms by ID(s) or slug(s)  
    Type: string, array  
    
- `hide_empty` - Hide terms not assigned to any post - true or false (default)  
    Type: boolean  
    
- `id` - Get terms by ID(s)  
    Type: number, array  
    
- `include` - Include terms by ID(s) or slug(s)  
    Type: string, array  
    
- `name` - Get terms by name/slug(s)  
    Type: string, array  
    
- `order` - Order: asc (ascending) or desc (descending)  
    Type: string  
    Default: `asc`  
    
- `orderby` - Order by one of: name, title (default), term_id, menu_order, count  
    Type: string  
    Default: `title`  
    
- `orderby_field` - Order by custom field  
    Type: string  
    
- `orderby_field_number` - Order by custom field whose value is a number  
    Type: string  
    
- `parent` - Get terms by its parent term's ID or slug  
    Type: number, string  
    
- `parents` - Set true to include only top-level parent terms  
    Type: boolean  
    
- `post` - Corresponding post ID(s) for term retrieval or "current" for current post  
    Type: number, array  
    
- `taxonomy` - Get terms by taxonomy  
    Type: string  
    
- `terms` - Alias for "include"  
    Type: string, array  
    

## Fields

- `ancestors` - Ancestor term IDs (or loop instance) from lowest to highest level; Set reverse=true to go from top-level down  
    
- `children` - Children term IDs (or loop instance)  
    
- `count` - Post count  
    
- `id` - Term ID  
    
- `name` - Term name  
    
- `parent` - Parent term ID (or loop instance)  
    
- `posts` - Loop instance of posts that belong to current term  
    
- `taxonomy` - Taxonomy name (or loop instance)  
    
- `title` - Term title  
    
- `url` - URL to term archive page  
    

## Shortcuts

Use the `taxonomy` attribute as a shortcut.

```html
<Loop taxonomy=category>
  <Field title />
</Loop>
```

The above is the same as:

```html
<Loop type=taxonomy_term taxonomy=category>
  <Field title />
</Loop>
```

[The `Taxonomy` tag](/docs/learning-guides/dynamic-tags/loop/taxonomy-term) provides another way to express it.

```html
<Taxonomy category>
  <Term title />
</Taxonomy>
```