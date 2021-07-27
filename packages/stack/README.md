---
title: The stack package
description: This is what the stack is meant to do and why we have it
---

The `Stack` component helps us with UI layouts

You can use it for vertical spacing:

```jsx live
<Stack>
	<Box />
	<Box />
	<Box />
	<Box />
</Stack>
```

Or you can use it for horizontal spacing:

```jsx live
<Stack orientation="horizontal">
	<Box />
	<Box />
	<Box />
	<Box />
</Stack>
```

## Inline

A Stack can also be set to `inline-grid`:

```jsx live
<>
	<Stack orientation="horizontal" inline>
		<Box />
		<Box />
		<Box />
		<Box />
	</Stack>
	<Stack inline>
		<Box />
		<Box />
		<Box />
		<Box />
	</Stack>
</>
```

## Gap

You can tell the `Stack` how large the gap should be and choose from the below numbers:

- `0`
- `1`
- `2`
- `3`
- `4`
- `5`
- `6`
- `7`

```jsx live
<Stack orientation="horizontal" gap={7} css={{ alignItems: 'baseline' }}>
	<Stack gap={0}>
		<Box />
		<Box />
		<Box />
		<Box />
	</Stack>

	<Stack gap={7}>
		<Box />
		<Box />
		<Box />
		<Box />
	</Stack>
</Stack>
```
