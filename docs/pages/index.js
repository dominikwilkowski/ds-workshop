import { MDXRemote } from 'next-mdx-remote';
import { normalize } from 'path';

import { getAllPkgs, getMarkdown } from '../lib/mdxUtils';
import { mdxComponents } from '../components/utils';
import { EditPage } from '../components/EditPage';
import { Layout } from '../components/Layout';

export default function Homepage({ pkgs, source }) {
	return (
		<Layout pkgs={pkgs}>
			<MDXRemote {...source} components={mdxComponents} />

			<EditPage />
		</Layout>
	);
}

export async function getStaticProps() {
	const pkgs = await getAllPkgs();
	const { source } = await getMarkdown(normalize(`${process.cwd()}/../README.md`));

	return {
		props: {
			pkgs,
			source,
		},
	};
}
