---
id: logic-variables
title: Logic Variables
tags:
  - Logic
---
For building up a complex condition, use `Set` and `Get`.

## Set condition

Use the attribute `logic`, which is a special variable type.

```html
<Set logic=complex_condition all=true>
  <If first_condition>true<Else />false</If>
  <If second_condition>true<Else />false</If>
</Set>
```

Each conditition should output `true` or `false`.

By default, the attribute `all=true` is assumed. Conditions are combined as an AND statement. It means **all conditions** must be true; in other words, there must be no "false" value.

Use the attribute `any=true` to combine them as an OR statement. That means **at least one condition** must be true; in other words, there must be at least one "true" value.

To check how the logic variable is being evaluated, use the attribute `debug=true` during development. It will display the intermediate content (a combination of true and false values) and the final result (true or false).

## Get condition

When you get a variable of this type, it returns either `true`, or empty for false.

```html
<Get logic=complex_condition />
```

## If logic

The `If` tag can reference this variable with the `logic` attribute.

```html
<If logic=complex_condition>
  It's true!
</If>
```