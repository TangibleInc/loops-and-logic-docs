---
id: taxonomy-term
title: Taxonomy Term
tags:
- Loop Type
---

# Taxonomy Term

Loop type: `taxonomy_term`

## Query Parameters

### taxonomy

Get terms by taxonomy

<small>Type: string</small>

### id

Get terms by ID(s)

<small>Type: number, array</small>

### name

Get terms by name/slug(s)

<small>Type: string, array</small>

### post

Corresponding post ID(s) for term retrieval or "current" for current post

<small>Type: number, array</small>

### include

Include terms by ID(s) or slug(s)

<small>Type: string, array</small>

### exclude

Exclude terms by ID(s) or slug(s)

<small>Type: string, array</small>

### terms

Alias for "include"

<small>Type: string, array</small>

### parent

Get terms by its parent term's ID or slug

<small>Type: number, string</small>

### parents

Set true to include only top-level parent terms

<small>Type: boolean</small>

### children

Set true to include only child terms

<small>Type: boolean</small>

### orderby

Order by one of: name, title (default), term_id, menu_order, count

<small>Type: string</small> - <small>Default: title</small>

### order

Order: asc (ascending) or desc (descending)

<small>Type: string</small> - <small>Default: asc</small>

### orderby_field

Order by custom field

<small>Type: string</small>

### orderby_field_number

Order by custom field whose value is a number

<small>Type: string</small>

### hide_empty

Hide terms not assigned to any post - true or false (default)

<small>Type: boolean</small>


## Fields

### id

Term ID

### name

Term name

### title

Term title

### url

URL to term archive page

### count

Post count

### taxonomy

Taxonomy name (or loop instance)

### parent

Parent term ID (or loop instance)

### children

Children term IDs (or loop instance)

### ancestors

Ancestor term IDs (or loop instance) from lowest to highest level; Set reverse=true to go from top-level down

### posts

Loop instance of posts that belong to current term

