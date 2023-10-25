---
id: taxonomy
title: Taxonomy
tags:
  - Dynamic Tags
  - Loop
---

For loop type `taxonomy`, here are the query parameters and fields.

## Query parameters

- `core` - Get built-in taxonomies (`true`,`false`)  
    Type: boolean  
    
- `name` - Get taxonomies by name/slug(s)  
    Type: string, array  
    
- `order` - Order: `asc` (ascending) or `desc` (descending)  
    Type: string  
    Default: `asc`  
    
- `orderby` - Order by field  
    Type: string  
    Default: `title`  
    
- `public` - Get public taxonomies (`true`,`false`)  
    Type: boolean  
    

## Fields

- `description` - Description  
    
- `label` - Label (singular)  
    
- `label_plural` - Label (plural)  
    
- `name` - Name/slug  
    
- `title` - Same as field "label"