import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';

import { getAllPkgs, getPkgBySlug } from '../../lib/mdxUtils';
import { mdxComponents } from '../../components/utils';
import { Layout } from '../../components/Layout';

export default function Packages({ source, data }) {
	return (
		<Layout>
			<header>
				<nav>
					<Link href="/">
						<a>👈 Go back home</a>
					</Link>
				</nav>
			</header>
			<div className="post-header">
				<h1>{data.title}</h1>
				{data.description && <p className="description">{data.description}</p>}
			</div>
			<main>
				<MDXRemote {...source} components={mdxComponents} />
			</main>
		</Layout>
	);
}

export const getStaticProps = async ({ params: { slug } }) => {
	const { source, data } = await getPkgBySlug(slug);

	return {
		props: {
			source,
			data,
		},
	};
};

export const getStaticPaths = async () => {
	const pkgs = await getAllPkgs();

	return {
		paths: pkgs.map((pkg) => {
			return {
				params: {
					slug: pkg.slug,
				},
			};
		}),
		fallback: false,
	};
};
