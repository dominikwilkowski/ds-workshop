import Link from 'next/link';

import { getAllPkgs } from '../../lib/mdxUtils';
import { Layout } from '../../components/Layout';

export default function PackagesHome({ pkgs }) {
	return (
		<Layout>
			<header>
				<nav>
					<Link href="/">
						<a>👈 Go back home</a>
					</Link>
				</nav>
			</header>
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
