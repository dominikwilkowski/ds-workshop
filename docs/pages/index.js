import { Highlight } from '../components/Highlight';
import { Layout } from '../components/Layout';
import { getAllPkgs } from '../lib/mdxUtils';
import { Type } from '@ds-workshop/type';

export default function Homepage({ pkgs }) {
	return (
		<Layout pkgs={pkgs}>
			<Type as="h1" look="heading84" css={{ margin: '0 0 1rem 0' }}>
				<Highlight look="grad3">Home</Highlight>
			</Type>
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
