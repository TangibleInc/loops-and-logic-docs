---
id: base
title: Base
tags:
- Loop Type
---

# Base

## Query Parameters

### count

Limit number of items

<small>Type: number</small>

### offset

Offset loop by number of items to skip

<small>Type: number</small>

### field

Filter by given field - If value is not set, it queries for posts whose field value exists

<small>Type: string</small>

### field_value

Filter by given field value

<small>Type: string</small>

### field_compare

Compare using one of: "is" (default), "is_not", "before", "before_inclusive", "after", "after_inclusive", "in", "not_in", "exists", "not_exists"

<small>Type: string</small>

### field_type

For field query, one of: string (default), number, date, time, datetime

<small>Type: string</small>

### sort_field

Sort by given field name

<small>Type: string</small>

### sort_order

Sort order: asc (ascending) or desc (descending)

<small>Type: string</small> - <small>Default: asc</small>

### sort_type

For sort query, one of: string (default), lowercase, number, date

<small>Type: string</small>


