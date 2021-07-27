---
title: The type package
description: This is what the type is meant to do and why we have it
---

The `Type` package encapsulates all of our typography styles and keeps it in a single place.

## Body font packs

```jsx live
<Stack>
	<Type look="body12">Type as body12</Type>
	<Type look="body12bold">Type as body12bold</Type>
	<Type look="body14">Type as body14</Type>
	<Type look="body14bold">Type as body14bold</Type>
	<Type look="body16">Type as body16</Type>
	<Type look="body16bold">Type as body16bold</Type>
	<Type look="body18">Type as body18</Type>
	<Type look="body18bold">Type as body18bold</Type>
	<Type look="body20">Type as body20</Type>
	<Type look="body20bold">Type as body20bold</Type>
	<Type look="body24">Type as body24</Type>
	<Type look="body24bold">Type as body24bold</Type>
</Stack>
```

## Heading font packs

```jsx live
<Stack>
	<Type look="heading20">Type as heading20</Type>
	<Type look="heading20bold">Type as heading20bold</Type>
	<Type look="heading24">Type as heading24</Type>
	<Type look="heading30">Type as heading30</Type>
	<Type look="heading36">Type as heading36</Type>
	<Type look="heading48">Type as heading48</Type>
	<Type look="heading64">Type as heading64</Type>
	<Type look="heading84">Type as heading84</Type>
	<Type look="heading92">Type as heading92</Type>
</Stack>
```

## Chose the tag to render

```jsx live
<Stack>
	<Type look="heading30">Render as span</Type>
	<Type look="heading30" as="p">
		Render as paragraph
	</Type>
	<Type look="heading30" as="div">
		Render as div
	</Type>
</Stack>
```
