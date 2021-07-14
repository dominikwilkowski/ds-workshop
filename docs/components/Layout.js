import { Fragment } from 'react';

import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout({ pkgs, noNav, children, ...props }) {
	return (
		<Fragment>
			<div
				css={{
					gridArea: 'main',
					paddingBottom: 'var(--space-xxlarge)',
					display: 'grid',
					gridTemplateColumns: '18.75rem auto',
				}}
				{...props}
			>
				{!noNav && <Navigation pkgs={pkgs} />}
				<div
					css={{
						margin: '0 1rem',
					}}
				>
					{children}
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}
