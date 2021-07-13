import { MDXRemote } from 'next-mdx-remote';

import { getAllPkgs, getPkgBySlug } from '../../lib/mdxUtils';
import { mdxComponents } from '../../components/utils';
import { Layout } from '../../components/Layout';

export default function Packages({ pkgs, source, data }) {
	return (
		<Layout pkgs={pkgs}>
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
	const pkgs = await getAllPkgs();
	const { source, data } = await getPkgBySlug(slug);

	return {
		props: {
			pkgs,
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
