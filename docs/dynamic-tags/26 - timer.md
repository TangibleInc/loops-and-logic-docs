---
id: timer
title: Timer
tags:
  - Performance
  - Testing
---
The `Timer` tag measures the time it takes to render a template section.

```html
<Timer start />

...

Duration: <Timer check /> seconds

...

Duration: <Timer stop /> seconds
```

## Attributes

- `start` - Start the timer
- `stop` - Stop the timer, and display how many seconds passed
- `check` - Stop the timer, display duration, and start it again

## Named timers

To use multiple overlapping timers, pass a unique name to each attribute.

```html
<Timer start=total />

<Timer start=1 />
..Part 1: <Timer stop=1 />s

<Timer start=2 />
..Part 2: <Timer stop=2 />s

Total duration: <Timer end=total />s
```