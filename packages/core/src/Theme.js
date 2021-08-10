import { Fragment, useState, useEffect, createContext, useContext } from 'react';

import { COLORS, SPACE, TYPE, TYPESCALE } from './tokens';

const STYLE_BASE_ID = 'theme-base-styles';
const STYLE_UPDATE_ID = 'theme-update-styles';
const DEFAULT_THEME = 'light';

function stringifyTheme(theme) {
	return `:root {${Object.entries(theme)
		.map(([key, value]) => `${key}: ${value};`)
		.join('')}}`;
}

function getEntireTheme(theme = DEFAULT_THEME) {
	return {
		...COLORS[theme],
		...SPACE,
		...TYPE,
		...TYPESCALE,
		'--wrapper-width': '90rem',
	};
}

export function SSRTheme({ theme }) {
	return (
		<Fragment>
			<style id={STYLE_BASE_ID} dangerouslySetInnerHTML={{ __html: stringifyTheme(getEntireTheme(theme)) }} />
			<style id={STYLE_UPDATE_ID} />
		</Fragment>
	);
}

export function RenderTheme({ theme, setBase }) {
	useEffect(() => {
		if (!document.getElementById(STYLE_BASE_ID)) {
			const newThemeBaseStyle = document.createElement('style');
			newThemeBaseStyle.id = STYLE_BASE_ID;
			document.querySelector('head').append(newThemeBaseStyle);

			const newThemeUpdateStyle = document.createElement('style');
			newThemeUpdateStyle.id = STYLE_UPDATE_ID;
			document.querySelector('head').append(newThemeUpdateStyle);
		}

		let styleID = STYLE_UPDATE_ID;
		if (setBase) {
			styleID = STYLE_BASE_ID;
		}

		document.getElementById(styleID).innerHTML = stringifyTheme(theme);
	});

	return null;
}

export const ThemeContext = createContext();

export function useTheme() {
	const themeObject = useContext(ThemeContext);

	if (!themeObject) {
		throw new Error(
			'To use the useTheme hook you need to wrap your application with the <Theme /> provider from @ds-workshop/core.'
		);
	}

	return themeObject;
}

export function Theme({ children }) {
	const [theme, setTheme] = useState(DEFAULT_THEME);

	useEffect(() => {
		// first we check local storage, then fall back to system preferences until falling back to default 'light'
		// in the end we sanitize the strings as who knows what systems give us what...
		const detectedTheme =
			(localStorage.getItem('ds-workshop-theme') ||
				window.matchMedia('(prefers-color-scheme: dark)').matches ||
				'light') === 'dark'
				? 'dark'
				: 'light';

		if (detectedTheme !== DEFAULT_THEME) {
			setTheme(detectedTheme);
		}

		localStorage.setItem('ds-workshop-theme', detectedTheme);

		function changer(event) {
			const detectedTheme = event.matches ? 'dark' : 'light';
			setTheme(detectedTheme);
			localStorage.setItem('ds-workshop-theme', detectedTheme);
		}

		window.matchMedia('(prefers-color-scheme: dark)').addListener(changer);
		return () => {
			window.matchMedia('(prefers-color-scheme: dark)').removeListener(changer);
		};
	}, [setTheme]);

	function changeTheme(newTheme) {
		if (!newTheme) {
			newTheme = theme === 'light' ? 'dark' : 'light';
		}
		setTheme(newTheme);
		localStorage.setItem('ds-workshop-theme', newTheme);
	}

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			<RenderTheme setBase theme={getEntireTheme(theme)} />
			{children}
		</ThemeContext.Provider>
	);
}
