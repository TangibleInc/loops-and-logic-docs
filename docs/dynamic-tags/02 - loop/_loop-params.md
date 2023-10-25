### Order
*    `order` - Order: `asc` (ascending) or `desc` (descending)  
      Type: string  
      Default: `asc`
*    `orderby` - Order by one of: `id`, `author`, `title`, `name`, `type`, `date`, `modified`, `random`, `comment_count`, `relevance`, `menu`  
      Type: string  
      Default: `title`
*    `orderby_field` - Order by custom field  
      Type: string
*    `orderby_field_number` - Order by custom field whose value is a number  
      Type: string

### Core post meta
*    `include` - Include by ID or name  
      Type: string, array
*    `exclude` - Exclude by ID or name  
      Type: string, array
*    `id` - Get attachment by ID(s)  
      Type: string, array
*    `name` - Name/slug  
      Type: string, array
*    `author` - Include by author ID, login name, or `current`  
      Type: string, array
*    `exclude_author` - Exclude by author ID, login name, or `current`  
      Type: string, array
*    `publish_compare` - Publish date comparison - One of: `before`, `before_inclusive`, `after`, `after_inclusive`  
      Type: string
*    `publish_date` - Filter by publish date in Y-M-D format, `today`, `X days ago` and other values compatible with strtotime() - Optionally use "publish_compare" attribute.  
      Type: string  
      The example below will display posts that have been published in the past two weeks.  
      ```html
      <Loop type=post publish_compare="after" publish_date="2 weeks ago">
      ```
*    `publish_day` - Filter by given publish day of the month, from 1 to 31, or `current`  
      Type: number
*    `publish_month` - Filter by given publish month, from 1 to 12, or `current`  
      Type: number
*    `publish_week` - Filter by given publish week, from 1 to 54, or `current` - Note: the "publish_compare" attribute is not supported for this field  
      Type: number
*    `publish_year` - Filter by given publish year, or `current`  
*    `status` - Post status: 'publish' (default), 'pending', `draft`, `future`, `private`, `trash`  
      Type: string, array  
      Default: `publish`
*    `sticky` - Affects the behavior of sticky posts. Set to `true` to put sticky posts at the beginning of the loop, `false` to exclude sticky posts from the loop, and `only` to loop through only sticky posts and ignore non-sticky posts.  
      Type: string
*    `type` - Post type(s)  
      Type: string, array  
      Default: `post`

### Custom post meta
*    `custom_date_field` - Filter by given custom date field. See filtering the loop for information on when this attribute should be used.  
      Type: string  
      The example below will display posts in an "event" custom post type that has an "event_date_time" custom field before the current date (i.e. past events)  
      ```html
      <Loop type=event custom_date_field=event_date_time custom_date_field_format="Y-m-d H:i:s" custom_date_field_compare=before custom_date_field_value=current>
      ```
*    `custom_date_field_compare` - Compare using one of: `equal` (default), `not`, `before`, `before_inclusive`, `after`, `after_inclusive`  
      Type: string
*    `custom_date_field_format` - For custom date field query, specify the date format of the field value - Default is "Ymd"; For date-time field, set "Y-m-d H:i:s". If it's a timestamp, use "timestamp". For custom field plugins other than ACF, you may need to use a different format.  
      Type: string
*    `custom_date_field_type` - For custom date field query, one of: `date` (default), `time`, `datetime`, `number`  
      Type: string
*    `custom_date_field_value` - Filter by given custom date field value, or `current`  
      Type: string
*    `custom_field` - Filter by given custom field. Use with the "custom_field_compare", "custom_field_value", and "custom_field_type" parameters. See filtering the loop for information on when this attribute should be used.   
      Type: string  
      The example below will display posts that have a "news_type" custom field that is not equal to "exclusive."
      ```html
      <Loop type=post custom_field=news_type custom_field_compare=not custom_field_value=exclusive>
      ```
*    `custom_field_*` - See attribute "custom_field", use up to 3 unique filters by appending with number  
      Type: string
*    `custom_field_compare` - Compare using one of: `equal` (default), `not`, `before`, `before_inclusive`, `after`, `after_inclusive`  
      Type: string
*    `custom_field_compare_*` - See attribute "custom_field_compare", use up to 3 unique filters by appending with number  
      Type: string
*    `custom_field_type` - For custom field query, one of: `string` (default), `number`, `date`, `time`, `datetime`  
      Type: string
*    `custom_field_type_*` - See attribute "custom_field_type", use up to 3 unique filters by appending with number  
      Type: string
*    `custom_field_value` - Filter by given custom field value  
      Type: string
*    `custom_field_value_*` - See attribute "custom_field_value", use up to 3 unique filters by appending with number  
      Type: string

### Taxonomy
*    `category` - Include by category ID, slug, or `current`  
      Type: string, array
*    `exclude_category` - Exclude by category ID, slug, or `current`  
      Type: string, array
*    `tag` - Include by tag ID, slug, or `current`  
      Type: string, array
*    `exclude_tag` - Exclude by tag ID, slug, or `current`  
      Type: string, array
*    `child_terms` - Set `true` to include child terms for hierarchical taxonomies  
      Type: string
*    `taxonomy` - Include by taxonomy ID, slug, or "current" for taxonomy archive  
      Use with "term" and "taxonomy_compare" attributes  
      Type: string, number
*    `taxonomy_*` - See attribute "taxonomy", use up to 3 unique filters by appending with number  
      Type: string, number
*    `taxonomy_compare` - One of `in` (default), `not`, `and`, `exists`, and `not exists`  
      Use with "taxonomy" attribute  
      Type: string
*    `taxonomy_compare_*` - See attribute "taxonomy_compare", use up to 3 unique filters by appending with number  
      Type: string
*    `taxonomy_relation` - When using more than one "taxonomy" queries, can specify `and` or `or`  
      Type: string
*    `terms` - Include by taxonomy term ID, slug, or `current`  
      Use with "taxonomy" attribute  
      Type: string, number, array
*    `terms_*` - See attribute "terms", use up to 3 unique filters by appending with number  
      Type: string, number, array

### Pagination & Extras
*    `page` - Page number  
      Type: number  
      Default: 1
*    `paged` - Posts per page  
      Type: number  
      Default: -1
*    `search` - Search by given keyword - Prepending a keyword with a hyphen "-" will exclude posts matching it.  
      Type: string  
      The example below will display posts in a "course" custom post type that match a search, where the value of that search is defined by a URL query called "keywords."
      ```html
      <Loop type=course search="{Url query=keywords}">
      ```