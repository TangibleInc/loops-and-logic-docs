---
id: calendar
title: Calendar
tags:
  - Dynamic Tags
  - Loop
  - Dates
---
These loop types can be used to build various calendar views.

- [Year](#year)
- [Quarter](#quarter)
- [Month](#month)
- [Week](#week)
- [Day](#day)
- [Weekday](#weekday)

## Year

Use the type `calendar_year` to loop through one or more years.

```html
<Loop type=calendar_year>
  <Field year />
</Loop>
```

It loops the current year by default.

For a range of years, set the `from` and `to` attributes. They're both optional.

#### Year fields

For each year, the following fields are available.

- `year` - The year itself
- `quarter` - Loop of quarters in the year
- `month` - Loop of months in the year
- `week` - Loop of weeks in the year

#### Example

```html
<Loop type=calendar_year>

  <h1><Field year /></h1>

  <Loop field=month>
    <h2><Field month/></h2>
    ..
  </Loop>
</Loop>
```

## Quarter

Use the type `calendar_quarter` to loop through one or more quarters.

```html
<Loop type=calendar_quarter>
  <Field quarter />
</Loop>
```

It loops the current quarter by default.

Set the `year` attribute to loop through quarters of a specific year. The value can be `current` for the current year.

#### Quarter fields

For each quarter, the following fields are available.

- `quarter` - The quarter itself
- `month` - Loop of months in the quarter
- `week` - Loop of weeks in the quarter

## Month

Use the type `calendar_month` to loop through one or more months.

```html
<Loop type=calendar_month>
  <Field month />
</Loop>
```

It loops the current month by default.

Set the `year` attribute to loop through months of a specific year. The value can be `current` for the current year.

Set the `quarter` attribute to loop through months of a specific quarter. The value can be `current` for the current quarter.

#### Month fields

For each month, the following fields are available.

- `month` - The month itself
- `week` - Loop of weeks in the month
- `day` - Loop of days in the month
- `name` - Name of the month
- `short_name` - Short name of the month

For the names, optionally set the `locale` attribute to translate. See [the Date tag](/dynamic-tags/date) for details.

## Week

Use the type `calendar_week` to loop through one or more weeks.

```html
<Loop type=calendar_week>
  <Field week />
</Loop>
```

It loops the current week by default.

Set the `year` attribute to loop through weeks of a specific year. The value can be `current` for the current year.

Set the `month` attribute to loop through weeks of a specific month. The value can be `current` for the current month.

#### Week fields

For each week, the following fields are available.

- `week` - The week itself
- `day` - Loop of days in the week

## Day

Use the type `calendar_day` to loop through one or more days.

```html
<Loop type=calendar_day>
  <Field day />
</Loop>
```

It loops the current day by default.

Set the `month` attribute to loop through days of a specific month. The value can be `current` for the current month.

Set the `week` attribute to loop through days of a specific week. The value can be `current` for the current week.

#### Day fields

For each day, the following fields are available.

- `day` - The day as number
- `date` - The date - Set attribute `format` for date format (default: `Y-m-d`)
- `name` - The name of the weekday
- `short_name` - The short name of the weekday

For the names, optionally set the `locale` attribute to translate. See [the Date tag](/dynamic-tags/date#locale) for details.

## Weekday

Use the type `calendar_weekday` to loop through weekdays.

```html
<Loop type=calendar_weekday>
  <Field weekday />
</Loop>
```

It loops through all seven weekdays.

Optionally set `start=sunday` to start the week on Sunday.

#### Weekday fields

For each weekday, the following fields are available.

- `weekday` - Number 1 (Monday) to 7 (Sunday)
- `name` - The name of the weekday
- `short_name` - The short name of the weekday

For the names, optionally set the `locale` attribute to translate. See [the Date tag](/dynamic-tags/date#locale) for details.