import Link from 'next/link';

import { Highlight } from '../components/Highlight';
import { Layout } from '../components/Layout';
import { getAllPkgs } from '../lib/mdxUtils';
import { Type } from '@ds-workshop/type';

export default function NotFoundPage({ pkgs }) {
	return (
		<Layout
			pkgs={pkgs}
			noNav
			css={{
				alignContent: 'center',
				justifyContent: 'center',
				textAlign: 'center',
			}}
		>
			<Type as="h1" look="heading92" css={{ margin: '3rem 0' }}>
				<Highlight look="grad3">404</Highlight>
			</Type>

			<Type as="h2" look="heading30">
				<Highlight look="grad4">Sitemap</Highlight>
			</Type>
			<ul
				css={{
					listStyle: 'none',
					margin: 0,
					padding: 0,
					li: {
						margin: '1rem 0',
					},
					'li:first-of-kind': {
						margin: 0,
					},
				}}
			>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				{pkgs.map(({ slug, name }) => (
					<li key={slug}>
						<Link href={`/packages/${slug}`}>
							<a>{name}</a>
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	);
}

export async function getStaticProps() {
	const pkgs = await getAllPkgs();

	return {
		props: {
			pkgs,
		},
	};
}
