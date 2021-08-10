---
title: The core package
description: This is what the core is meant to do and why we have it
---

The core comes with a [CSS reset](https://github.com/necolas/normalize.css) and some global styles that makes sense to this design system.

Core also comes with the tokens that can be imported:

```jsx
import { COLORS, SPACE, TYPE, TYPESCALE } from '@ds-workshop/core';
```

## Core

The `<Core />` component delivers a [CSS reset](https://github.com/necolas/normalize.css) and wraps our app with the theme provider for us to be able to use [the `useTheme` hook](#the-hook).

!> Make sure you wrap your app with the `<Core />` component

```jsx
<Core>
	<YouApp>
</Core>
```

## Color theme

The core comes with a color pallet:

### Light theme

<ColorTheme />

### Dark theme

<ColorTheme theme="dark" />

## The `useTheme` hook

You can detect the current theme you app is in by using the `useTheme` hook.

The hook returns the `theme` string and the function `changeTheme` you can use to change the theme.
If you don't pass anything to `changeTheme` it will just toggle the current theme.
Otherwise it will change to the theme you pass to it as a string.

```jsx
function ChangeThemeButton() {
	const { theme, changeTheme } = useTheme();

	return (
		<Fragment>
			<button onClick={() => changeTheme()}>Toggle theme</button>

			<button onClick={() => changeTheme('light')}>Set to light mode</button>

			<button onClick={() => changeTheme('dark')}>Set to dark mode</button>
		</Fragment>
	);
}
```

## Dark mode button

The core comes with a theme and will a dark mode button to switch the themes:

```jsx live
<DarkModeBtn />
```

## SSRTheme

You can use the `<SSRTheme />` component to render your default theme in SSR to avoid the flash and support no-js environments.

In [NextJS](https://nextjs.org/) this would look like this in the `pages/_document.js` file:

```jsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { SSRTheme } from '@ds-workshop/core';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<SSRTheme />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
```

You can change the default theme as well:

```jsx
<SSRTheme theme="dark" />
```
