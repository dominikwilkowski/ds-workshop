---
title: The icons package
description: This is what the icons are meant to do and why we have them
---

<IconPallet />

## Color

Icons will take on the color they inherit:

```jsx live
<Stack>
	<div>
		This is text <Cli css={{ height: '3rem' }} />
		<Copy css={{ height: '3rem' }} />
		<Lab css={{ height: '3rem' }} />
	</div>
	<div style={{ color: 'rebeccapurple' }}>
		This is text <Cli css={{ height: '3rem' }} />
		<Copy css={{ height: '3rem' }} />
		<Lab css={{ height: '3rem' }} />
	</div>
	<div style={{ color: 'hotpink' }}>
		This is text <Cli css={{ height: '3rem' }} />
		<Copy css={{ height: '3rem' }} />
		<Lab css={{ height: '3rem' }} />
	</div>
</Stack>
```

## Gradients

Icons can take one of the below gradients on:

- `grad1`
- `grad2`
- `grad3`
- `grad4`
- `grad5`

```jsx live
<Stack orientation="horizontal">
	<Cli css={{ height: '5rem' }} look="grad1" />
	<Copy css={{ height: '5rem' }} look="grad2" />
	<Lab css={{ height: '5rem' }} look="grad3" />
	<Roadmap css={{ height: '5rem' }} look="grad4" />
	<Shield css={{ height: '5rem' }} look="grad5" />
</Stack>
```
