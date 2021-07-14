import { MDXRemote } from 'next-mdx-remote';

import { getAllPkgs, getPkgBySlug } from '../../lib/mdxUtils';
import { mdxComponents } from '../../components/utils';
import { Highlight } from '../../components/Highlight';
import { Layout } from '../../components/Layout';

export default function Packages({ pkgs, source, data }) {
	return (
		<Layout pkgs={pkgs}>
			<main>
				<Highlight
					as="h1"
					look="grad3"
					css={{
						display: 'inline-block',
						fontFamily: 'var(--font-brand)',
						fontWeight: 900,
						fontSize: '5.75rem',
					}}
				>
					{data.title}
				</Highlight>
				{data.description && <p css={{ fontSize: '1.25rem', margin: '1rem 0' }}>{data.description}</p>}
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
