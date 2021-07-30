---
title: The button package
description: This is what the button is meant to do and why we have it
---

This is what the default button looks like:

```jsx live
<Button>Our DS button</Button>
```

## Look

There are a couple look props you can use with the button:

- `default`
- `danger`
- `soft`
- `text`

```jsx live
<>
	<Stack orientation="horizontal">
		<Button>Default</Button>
		<Button look="danger">Danger</Button>
		<Button look="soft">Soft</Button>
		<Button look="text">Text</Button>
	</Stack>
</>
```

## Disabled

This is what a disabled button looks like:

```jsx live
<>
	<Stack orientation="horizontal">
		<Button disabled>Default</Button>
		<Button disabled look="danger">
			Danger
		</Button>
		<Button disabled look="soft">
			Soft
		</Button>
		<Button disabled look="text">
			Text
		</Button>
	</Stack>
</>
```

## Size

These are the allowed sizes the button supports:

- `small`
- `default`
- `large`

```jsx live
<Stack orientation="horizontal">
	<Stack>
		<Button size="small">Small default button</Button>
		<Button>Default button</Button>
		<Button size="large">Large default button</Button>
	</Stack>
	<Stack>
		<Button size="small" look="danger">
			Small danger button
		</Button>
		<Button look="danger">Default danger button</Button>
		<Button size="large" look="danger">
			Large danger button
		</Button>
	</Stack>
	<Stack>
		<Button size="small" look="soft">
			Small soft button
		</Button>
		<Button look="soft">Default soft button</Button>
		<Button size="large" look="soft">
			Large soft button
		</Button>
	</Stack>
	<Stack>
		<Button size="small" look="text">
			Small text button
		</Button>
		<Button look="text">Default text button</Button>
		<Button size="large" look="text">
			Large text button
		</Button>
	</Stack>
</Stack>
```

## Loading

This is what a loading button looks like:

```jsx live
<>
	<Stack orientation="horizontal">
		<Button loading>Loading default button</Button>
		<Button loading look="danger">
			Loading danger button
		</Button>
		<Button loading look="soft">
			Loading soft button
		</Button>
	</Stack>
</>
```
