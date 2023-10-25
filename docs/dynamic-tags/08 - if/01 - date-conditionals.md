---
id: date-conditionals
title: Date Conditionals
tags:
  - Logic
  - Dates
---
These `If` tag subjects support date conditionals.

- `check` - Check any given value
- `field` - Field value with date
- `acf_date` - ACF Date field
- `acf_date_time` - ACF Date/Time field

The following operators are provided for comparing date values.

- `before` - Before a given date
- `before_inclusive` - Before and including given date
- `after` - After a given date
- `after_inclusive` - After and including given date

## Examples

Compare two dates

```html
<If check="{Date format=timestamp}" after="2001-01-01">
  We're in the 21st century.
</If>
```

Compare field value to given date

```html
<If field=some_field before=today>
  The event is in the past.
</If>
```

Compare ACF date field

```html
<If acf_date=some_field after=today>
  The event is in the future.
</If>
```

## Using timestamps

To reliably compare dates, it's best to convert them to timestamps.

### Date

To use the `Date` tag and `format` attribute:

```html
<Date format=timestamp />
<Date format=timestamp>tomorrow</Date>
<Date format=timestamp>2022-02-02</Date>
```

See [Date tag](/docs/dynamic-tags/date) for details.

### Field

To use the `Field` tag and `date_format` attribute:

```html
<Field publish_date date_format=timestamp />
```

### From format

If the value is not in a standard format such as `Y-m-d` or `Y-m-d H:i:s`, it might be necessary to use the `from_format` attribute.

See [Date tag: Convert from format](/docs/dynamic-tags/date#from-format) for an explanation.