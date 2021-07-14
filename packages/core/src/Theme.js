import { useState, useEffect } from 'react';
import { Global } from '@emotion/react';

import { COLORS, SPACE, TYPE, TYPESCALE } from './tokens';

export function Theme() {
	const [theme, setTheme] = useState('light');

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

	return (
		<Global
			styles={{
				':root': {
					...COLORS[theme],
					...SPACE,
					...TYPE,
					...TYPESCALE,
					'--wrapper-width': '90rem',
				},
			}}
		/>
	);
}
