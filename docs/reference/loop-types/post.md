---
id: post
title: Post
tags:
- Loop Type
---

# Post

Loop type: `post`

## Query Parameters

### post_type

Post type(s)

<small>Type: string, array</small>

### type



<small>Type: string, array</small>

### id

ID

<small>Type: string, array</small>

### name

Name/slug

<small>Type: string, array</small>

### status

Post status: publish (default), pending, draft, future, private, trash

<small>Type: string, array</small> - <small>Default: publish</small>

### include

Include by ID or name

<small>Type: string, array</small>

### exclude

Exclude by ID or name

<small>Type: string, array</small>

### sticky

Sticky posts: true (stick to top), false (exclude them), only (exclude normal posts) - By default, they are treated the same as normal posts

<small>Type: string</small>

### parent

Include by parent ID or name

<small>Type: string, array</small>

### exclude_parent

Exclude by parent ID or name

<small>Type: string, array</small>

### include_children

Include children

<small>Type: boolean</small>

### author

Include by author ID, login name, or "current"

<small>Type: string, array</small>

### exclude_author

Exclude by author ID, login name, or "current"

<small>Type: string, array</small>

### category

Include by category ID, slug, or "current"

<small>Type: string, array</small>

### exclude_category

Exclude by category ID, slug, or "current"

<small>Type: string, array</small>

### tag

Include by tag ID, slug, or "current"

<small>Type: string, array</small>

### exclude_tag

Exclude by tag ID, slug, or "current"

<small>Type: string, array</small>

### taxonomy

Include by taxonomy ID, slug, or "current" for taxonomy archive<br/>Use with "term" and "taxonomy_compare" attributes

<small>Type: string, number</small>

### terms

Include by taxonomy term ID, slug, or "current"<br/>Use with "taxonomy" attribute

<small>Type: string, number, array</small>

### child_terms

Set "true" to include child terms for hierarchical taxonomies

<small>Type: string</small>

### taxonomy_compare

One of "in" (default), "not", "and", "exists", and "not exists"<br/>Use with "taxonomy" attribute

<small>Type: string</small>

### taxonomy_relation

When using more than one "taxonomy" queries, can specify "and" or "or"

<small>Type: string</small>

### taxonomy_2

See attribute "taxonomy"

<small>Type: string, number</small>

### terms_2

See attribute "terms"

<small>Type: string, number, array</small>

### taxonomy_compare_2

See attribute "taxonomy_compare"

<small>Type: string</small>

### taxonomy_3

See attribute "taxonomy"

<small>Type: string, number</small>

### terms_3

See attribute "terms"

<small>Type: string, number, array</small>

### taxonomy_compare_3

See attribute "taxonomy_compare"

<small>Type: string</small>

### search

Search by given keyword - Prepending a keyword with a hyphen "-" will exclude posts matching it

<small>Type: string</small>

### publish_date

Filter by publish date in Y-M-D format, "today", "X days ago" and other values compatible with strtotime() - Optionally use "publish_compare" attribute

<small>Type: string</small>

### publish_compare

Publish date comparison - One of: "before", "before_inclusive", "after", "after_inclusive"

<small>Type: string</small>

### publish_year

Filter by given publish year, or "current"

<small>Type: number</small>

### publish_month

Filter by given publish month, from 1 to 12, or "current"

<small>Type: number</small>

### publish_week

Filter by given publish week, from 1 to 54, or "current" - Note: the "publish_compare" attribute is not supported for this field

<small>Type: number</small>

### publish_day

Filter by given publish day of the month, from 1 to 31, or "current"

<small>Type: number</small>

### custom_field

Filter by given custom field - Faster than using "field", this queries raw field values in the database

<small>Type: string</small>

### custom_field_value

Filter by given custom field value

<small>Type: string</small>

### custom_field_compare

Compare using one of: "equal" (default), "not", "before", "before_inclusive", "after", "after_inclusive"

<small>Type: string</small>

### custom_field_type

For custom field query, one of: string (default), number, date, time, datetime

<small>Type: string</small>

### custom_field_2

See attribute "custom_field"

<small>Type: string</small>

### custom_field_value_2

See attribute "custom_field_value"

<small>Type: string</small>

### custom_field_compare_2

See attribute "custom_field_compare"

<small>Type: string</small>

### custom_field_type_2

See attribute "custom_field_type"

<small>Type: string</small>

### custom_field_3

See attribute "custom_field"

<small>Type: string</small>

### custom_field_value_3

See attribute "custom_field_value"

<small>Type: string</small>

### custom_field_compare_3

See attribute "custom_field_compare"

<small>Type: string</small>

### custom_field_type_3

See attribute "custom_field_type"

<small>Type: string</small>

### custom_date_field

Filter by given custom date field - Faster than using "field", this queries raw field values in the database

<small>Type: string</small>

### custom_date_field_value

Filter by given custom date field value, or "current"

<small>Type: string</small>

### custom_date_field_compare

Compare using one of: "equal" (default), "not", "before", "before_inclusive", "after", "after_inclusive"

<small>Type: string</small>

### custom_date_field_format

For custom date field query, specify the date format of the field value - Default is "Ymd"; For date-time field, set "Y-m-d H:i:s". If it's a timestamp, use "timestamp". For custom field plugins other than ACF, you may need to use a different format.

<small>Type: string</small>

### custom_date_field_type

For custom date field query, one of: date (default), time, datetime, number

<small>Type: string</small>

### orderby

Order by one of: id, author, title, name, type, date, modified, random, comment_count, relevance, menu

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

### paged

Posts per page

<small>Type: number</small>

### page

Page number

<small>Type: number</small> - <small>Default: 1</small>

### fields



## Fields

### id

ID

### name

name/slug

### url

URL

### title

Title

### content

Content

### excerpt

Excerpt

### status

Status

### edit_url

Edit URL

### publish_date

Publish date

### modify_date

Modify date

### post_class

Post classes

### menu_order

Menu order

### archive_author

On an author archive page: Current author as a user loop

### archive_term

On a taxonomy archive page: Current taxonomy term as a loop

### archive_post_type

On a post type archive page: Current post type as a loop

### author

Author

### author_*

Modified author's user field

### modified_author

Modified author

### parent

Parent

### parent_*

Parent field

### parent_ids

All parent IDs from current to top

### children

Children

### children_ids

Children IDs

### ancestors

Ancestor posts from lowest to highest level; Set reverse=true to go from top-level down

### image

Featured image

### image_*

Featured image field

### all

Show all custom fields (for development purpose)

