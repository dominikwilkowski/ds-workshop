import Link from 'next/link';

import { getAllPkgs } from '../../lib/mdxUtils';
import { Layout } from '../../components/Layout';

export default function PackagesHome({ pkgs }) {
	return (
		<Layout pkgs={pkgs}>
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

export const getStaticProps = async () => {
	const pkgs = await getAllPkgs();

	return {
		props: {
			pkgs,
		},
	};
};
