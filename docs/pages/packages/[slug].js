import { MDXRemote } from 'next-mdx-remote';

import { getAllPkgs, getPkgBySlug } from '../../lib/mdxUtils';
import { InlineCode } from '../../components/mdx/InlineCode';
import { mdxComponents } from '../../components/utils';
import { Highlight } from '../../components/Highlight';
import { EditPage } from '../../components/EditPage';
import { Layout } from '../../components/Layout';
import { Type } from '@ds-workshop/type';

export default function Packages({ pkgs, source, data, name, version, slug }) {
	return (
		<Layout pkgs={pkgs}>
			<main>
				<Type as="h1" look="heading84" css={{ margin: '0 0 1rem 0' }}>
					<Highlight look="grad3">{data.title}</Highlight>
				</Type>
				<span
					css={{
						display: 'block',
						marginTop: '-1rem',
					}}
				>
					<InlineCode>{name}</InlineCode> <InlineCode>v{version}</InlineCode>
				</span>
				{data.description && (
					<Type as="p" look="body24bold" css={{ marginBottom: '3rem' }}>
						{data.description}
					</Type>
				)}
				<MDXRemote {...source} components={mdxComponents} />

				<EditPage slug={`/packages/${slug}`} />
			</main>
		</Layout>
	);
}

export const getStaticProps = async ({ params: { slug } }) => {
	const pkgs = await getAllPkgs();
	const { source, data, name, version, slug: realSlug } = await getPkgBySlug(slug);

	return {
		props: {
			pkgs,
			source,
			data,
			name,
			version,
			slug: realSlug,
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
