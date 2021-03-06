---
title: The emoji package
description: This is what the emoji package is meant to do and why we have it
---

The Emoji component makes emojis more accessible to people:

- ... who have difficulty seeing the difference between a crying face and a laughing face
- ... who cannot see
- ... who prints pages

Read more here: https://adrianroselli.com/2016/12/accessible-emoji-tweaked.html

## Emojis

```jsx live
<Stack orientation="horizontal">
	<Emoji symbol="😢" alt="Crying" />
	<Emoji symbol="😂" alt="Laughing" />
	<Emoji symbol="❤️" alt="Love" />
</Stack>
```

## Context

The context may vary depending on the context the emoji is in.

```jsx live
<>
	<p>
		An update was pushed to the released to a package <Emoji symbol="🚢" alt="Shipped" />
	</p>
	<p>
		We have charted a cruise ship <Emoji symbol="🚢" alt="Cruise Ship" /> for us to go on holiday
	</p>
</>
```
