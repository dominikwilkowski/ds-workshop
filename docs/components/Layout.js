import { Fragment } from 'react';

import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout({ pkgs, children }) {
	return (
		<Fragment>
			<main
				css={{
					gridArea: 'main',
					paddingBottom: 'var(--space-xxlarge)',
					display: 'grid',
					gridTemplateColumns: '18.75rem auto',
				}}
			>
				<Navigation pkgs={pkgs} />
				<div>{children}</div>
			</main>
			<Footer />
		</Fragment>
	);
}
