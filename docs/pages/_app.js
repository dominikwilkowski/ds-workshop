import { Global } from '@emotion/react';
import { Fragment } from 'react';
import Head from 'next/head';

import { Core } from '@ds-workshop/core';

export default function App({ Component, pageProps }) {
	return (
		<Fragment>
			<Global
				styles={{
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
						textRendering: 'geometricPrecision',
						WebkitTextSizeAdjust: 'none',
						WebkitFontSmoothing: 'antialiased',
						MozOsxFontSmoothing: 'grayscale',
					},
					a: {
						textDecoration: 'none',
						color: 'var(--link)',
					},
					'::selection': {
						textShadow: 'none',
						color: '#000',
						backgroundColor: 'rgba(0, 0, 255, 0.1)',
					},
					pre: {
						lineHeight: 1.4,
					},
					img: {
						height: 'auto',
						maxWidth: '100%',
					},
					button: {
						color: 'inherit',
					},
					'a, button': {
						/* Anchors and buttons don't want double-tap on mobile to zoom */
						touchAction: 'manipulation',
					},
					':focus:not(:focus-visible)': {
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
					'.hint': {
						borderRadius: '4px',
						padding: '1rem 1rem 1rem 1.5rem',
						color: 'var(--text-heading)',
					},
					'.hint.neutral': {
						background: 'var(--code-bg)',
						borderLeft: '6px solid var(--text)',
					},
					'.hint.tip': {
						background: 'var(--info-bg)',
						borderLeft: '6px solid var(--info)',
					},
					'.hint.warn': {
						background: 'var(--warning-bg)',
						borderLeft: '6px solid var(--warning)',
					},
					'.hint.error': {
						background: 'var(--danger-bg)',
						borderLeft: '6px solid var(--danger)',
					},
				}}
			/>
			<Head>
				<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover" />
			</Head>
			<Core />
			<Component {...pageProps} />
		</Fragment>
	);
}
