---
id: logic
title: Logic
tags:
  - Dynamic Tags
  - Logic
  - Conditions
---

The `Logic` tag can build conditional rules for use by the `If`, `Control`, and `Loop` tags.

## Overview

Here is a full example with explanataion below. It applies a set of rules to match weekend seminars from the `event` post type.

```html
<Logic name=weekend_seminar>
  <Rule taxonomy=event_type value=seminar />
  <Any>
    <Rule field=weekday value=saturday />
    <Rule field=weekday value=sunday />
  </Any>
</Logic>

<Loop post_type=event count=3>
  <If logic=weekend_seminar>
    Weekend seminar: <Field title /><br>
  <Else />
    Weekday seminar: <Field title /><br>
  </If>
</Loop>
```

## Logic tag

The `Logic` tag defines a set of rules using `Rule`, `And`, `Or`, and `Not` tags.

```html
<Logic name=weekend_seminar>
  ...
</Logic>
```

It requires a `name` attribute, which gives a name to the rules defined. This can be referred to later in the page to evaluate the condition, such as for every post inside a loop.

Optionally, use the `compare` attribute to decide how the rules are combined: `and`, `or`, `not`. The default is `and`, which means all rules must be true.

## Rule tag

The `Rule` tag is used to define a rule. It accepts all [attributes supported by the `If` tag](/dynamic-tags/if).

```html
<Rule taxonomy=event_type value=seminar />
```

## Operators: Any, All, Not

The `Any`, `All`, and `Not` tags are used to group rules together with a logical operator.

### All rules must be _true_

```html
<All>
  <Rule ... />
  <Rule ... />
</All>
```

### All rules must be _false_

```html
<All false>
  <Rule ... />
  <Rule ... />
</All>
```

### At least one rule must be _true_

```html
<Any>
  <Rule ... />
  <Rule ... />
</Any>
```

### Not all rules are _true_

```html
<Not>
  <Rule ... />
  <Rule ... />
</Not>
```

This is the opposite of `All`.


## Use logic with other tags

The `If` tag supports the `logic` attribute, which evaluates the rules defined by the logic of that name.

```html
<If logic=weekend_webinar>
  ...
<Else />
  ...
</If>
```

It can be used inside a `Loop` tag to filter items.

```html
<Loop post_type=event>
  <If logic=weekend_webinar>
    ...
  </If>
</Loop>
```

