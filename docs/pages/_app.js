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
						WebkitTextSizeAdjust: 'none',
						WebkitFontSmoothing: 'antialiased',
						MozOsxFontSmoothing: 'grayscale',
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
			<Core />
			<Component {...pageProps} />
		</Fragment>
	);
}
