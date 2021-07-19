import { Fragment, useState, useEffect } from 'react';

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

export function SetTheme({ theme, setBase }) {
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

export function Theme() {
	const [theme, setTheme] = useState(DEFAULT_THEME);

	useEffect(() => {
		const detectedTheme =
			(localStorage.getItem('ds-workshop-theme') ||
				window.matchMedia('(prefers-color-scheme: dark)').matches ||
				'light') === 'dark'
				? 'dark'
				: 'light';
		localStorage.setItem('ds-workshop-theme', detectedTheme);

		if (detectedTheme !== 'light') {
			setTheme(detectedTheme);
		}
	});

	return <SetTheme setBase theme={getEntireTheme()} />;
}
