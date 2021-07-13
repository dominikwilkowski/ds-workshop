import Link from 'next/link';

import { getAllPkgs } from '../lib/mdxUtils';
import { Layout } from '../components/Layout';

export default function Homepage({ pkgs }) {
	return (
		<Layout>
			<h1 css={{ color: 'red' }}>Home Page</h1>
			<ul>
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
