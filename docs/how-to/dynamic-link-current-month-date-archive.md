---
id: dynamic-link-current-month-date-archive
title: How to create a button that dynamically links to the current month's posts
tags:
  - Date
---
## The request

> How do I generate a link that points to the current month’s archive (so the month during the month of May the link would be something like `<a href="/2022/05/">See more posts from this month</a>`. [View original thread](https://discourse.tangible.one/t/dynamic-link-to-the-latest-archive-month/630)

## The solution

```html
<a href="{Date format='/Y/m/'}">See more posts from this month</a>
```

## The explanation

The [`Date` tag](/docs/learning-guides/dynamic-tags/date) can be used to dynamically render the current date or some other desired date to fill the `href` attribute of the anchor tag. If instead of linking to the current month's archive we wanted to link to the previous month's archive, we could add the attribute `subtract="1 month"` to our `Date` tag.