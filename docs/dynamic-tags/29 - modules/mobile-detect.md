---
id: mobile-detect
title: Mobile Detect
tags:
  - Dynamic Tags
  - Modules
---
This feature is based on [Mobile Detect](https://github.com/serbanghita/Mobile-Detect), a PHP library for mobile device detection.

It works by parsing the [User Agent request header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) on the server side, and guessing the device and browser. There are some reasons why it's not always recommended (see this [article on technical limitations](https://github.com/serbanghita/Mobile-Detect/blob/5.x/docs/KNOWN_LIMITATIONS.md)). The user agent can be changed by the user, and its syntax is inconsistent for historical reasons. Also, new mobile devices could start using a different keyword, and specific support may need to be added in the library.

In most situations, client-side solutions are better. For responsive design and styling purpose, use CSS [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) to detect the viewport size. For [feature detection](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection), use JavaScript.

That said, a suitable use of Mobile Detect might be to show and hide content based on the detected device. This allows sending a simpler website or shorter article, possibly in addition to using [responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

## Device variable type

Use the variable type `device` to detect the device type.

```html
<Get device=type />
```

Its value is `mobile`, `tablet`, or `desktop`.

## Device conditions

Use the `If` tag with condition `device` to show or hide content based on device type.

```html
<If device=mobile>
  Mobile view
<Else if device=tablet />
  Table view
<Else />
  Desktop view
</If>
```

```html
<If not device=desktop>
  Mobile and tablet view
</If>
```