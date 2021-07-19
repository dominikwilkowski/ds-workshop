import { Fragment, useState, useEffect } from 'react';

import { LightMode } from './LightMode';
import { DarkMode } from './DarkMode';
import { SetTheme } from './Theme';
import { COLORS } from './tokens';

export function DarkModeBtn(props) {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		// first we check local storage, then fall back to system preferences until falling back to default 'light'
		// in the end we sanitize the strings as who knows what systems give us what...
		const detectedTheme =
			(localStorage.getItem('ds-workshop-theme') ||
				window.matchMedia('(prefers-color-scheme: dark)').matches ||
				'light') === 'dark'
				? 'dark'
				: 'light';
		setTheme(detectedTheme);
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

	function handleThemeChange() {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		localStorage.setItem('ds-workshop-theme', newTheme);
	}

	return (
		<Fragment>
			<SetTheme theme={COLORS[theme]} />
			<button
				onClick={handleThemeChange}
				css={{
					display: 'inline-flex',
					appearance: 'none',
					background: 'transparent',
					boxShadow: 'none',
					border: '0 none',
					borderRadius: '100%',
					lineHeight: 1,
					padding: 0,
					margin: 0,
					color: 'var(--muted)',
					cursor: 'pointer',
					transition: 'color 0.3s ease',
					'&:hover, &:focus': {
						color: 'var(--link)',
					},
				}}
				{...props}
			>
				{theme === 'dark' ? (
					<LightMode css={{ height: 'var(--space-xlarge)' }} />
				) : (
					<DarkMode css={{ height: 'var(--space-xlarge)' }} />
				)}
			</button>
		</Fragment>
	);
}
