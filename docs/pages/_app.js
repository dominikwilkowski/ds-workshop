import { Global } from '@emotion/react';
import { Fragment } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<Fragment>
			<Global
				styles={{
					':root': {
						'--space-xxsmall': '0.125rem',
						'--space-xsmall': '0.25rem',
						'--space-small': '0.375rem',
						'--space-medium': '0.5rem',
						'--space-large': '1rem',
						'--space-xlarge': '1.5rem',
						'--space-xxlarge': '6rem',
						'--font-brand':
							'"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
						'--font-body':
							'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
						'--font-mono': 'ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
						'--font-xxsmall': '0.75rem',
						'--font-xsmall': '0.875rem',
						'--font-small': '1rem',
						'--font-medium': '1.25rem',
						'--font-large': '1.5rem',
						'--font-xlarge': '1.875rem',
						'--font-xxlarge': '2.625rem',

						'--theme': 'light',
						'--app-bg': '#fff',
						'--brand-bg': '#166bff',
						'--brand-bg-90': '#2d7aff',
						'--brand-bg--40': 'rgba(22, 107, 255, 0.6)',

						'--brand-text': '#fff',
						'--link': '#166bff',
						'--link-active': '#0b55d5',
						'--button-text': '#fff',
						'--focus': '#8b5cf6',
						'--border': '#e2e8f0',
						'--muted': '#5F718C',
						'--text': '#47546b',
						'--text-heading': '#2d3748',
						'--text-disabled': '#a0aec0',
						'--code': '#47546b',
						'--code-bg': '#f6f7f9',
						'--shadow': 'rgba(22, 107, 255, 0.1)',

						'--info': '#0299e7',
						'--info-bg': 'rgba(2, 153, 231, 0.1)',
						'--warning': '#d97706',
						'--warning-bg': 'rgba(217, 119, 6, 0.1)',
						'--success': '#22c55e',
						'--success-bg': 'rgba(34, 197, 94, 0.1)',
						'--danger': '#dc2626',
						'--danger-bg': 'rgba(220, 38, 38, 0.1)',
						'--danger-90': '#e03c3c',
						'--danger--40': 'rgba(220, 38, 38, 0.6)',
						'--alert-text': '#47546b',

						'--grad1-1': '#166bff',
						'--grad1-2': '#22d3ee',
						'--grad2-1': '#10b981',
						'--grad2-2': '#22d3ee',
						'--grad3-1': '#6373f1',
						'--grad3-2': '#da5a99',
						'--grad4-1': '#f87171',
						'--grad4-2': '#f59e0b',
						'--grad5-1': '#ec4899',
						'--grad5-2': '#f87171',
					},
					'*, ::before, ::after': {
						boxSizing: 'border-box',
					},
					'html, body': {
						background: 'var(--app-bg)',
						color: 'var(--text)',
						height: '100%',
						fontFamily: 'var(--font-body)',
						padding: 0,
						margin: 0,
						WebkitTextSizeAdjust: 'none',
					},
					'blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre': {
						margin: 0,
					},
					a: {
						textDecoration: 'none',
						color: 'var(--link)',
					},
					pre: {
						lineHeight: 1.4,
						fontSize: '16px',
					},
					':focus:not(.focus-visible)': {
						outline: 'none',
					},
					'*:focus-visible, input:focus-visible, button:focus-visible, [type="submit"]:focus-visible': {
						outline: '1px dashed var(--focus)',
						outlineOffset: '3px',
					},
					'input:focus-visible': {
						outlineStyle: 'solid',
						outlineWidth: '3px',
						outlineOffset: 0,
					},
					'#__next': {
						minHeight: '100%',
						display: 'grid',
						gridTemplateRows: 'auto 1fr',
						gridTemplateAreas: '"header" "main" "footer"',
						gridTemplateColumns: 'minmax(0, 1fr)',
					},
				}}
			/>
			<Head>
				<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover" />
			</Head>
			<Component {...pageProps} />
		</Fragment>
	);
}
