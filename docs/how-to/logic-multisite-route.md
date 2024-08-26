---
id: logic-multisite-route
title: Set up conditional logic based on the URL of a multisite
tags:
  - Logic
  - Route
  - URL
  - Multisite
---
## Request

> Is there a way to set an `If` statement to check for which multisite instance the user is on? [View orginal thread](https://discourse.tangible.one/t/check-multisite/699)

## Solution

```html
<If check="{Url current}" starts_with value="app">Do something.</If>
```

Or

```html
<List name=subsites>
  <Item>app</Item>
  <Item>secure</Item>
  <Item>go</Item>
</List>

<If check="{Route part=1}" in value="{Get list=subsites}">Do something.</If>
```

## Explanation

The approach will depend on whether the multisite uses different subfolders or different subdomains to differentiate between sites. In any case, the solution will involve creating conditional logic based on the URL of the current page. Assuming the number of sites is relatively fixed, it's possible to use [the `Url` tag](/dynamic-tags/url) (if your multisite uses subdomains for each site as shown in the first solution) or [the `Route` tag](/dynamic-tags/route) (if your multisite uses different subfolders for each site, as shown in the second example) to set up some conditional logic based on the current URL. Since the current version of L&L doesn't allow looping through sites in a multisite for security reasons, in the second example, we've used the `List` tag to define the names of all the sites in our multisite. This list could even be stored in a separate template (calling it in with the `Template` tag as needed) to make it easier to keep the list updated in case you need to refer to that list in multiple different templates.
