import { Highlight } from '../components/Highlight';
import { Layout } from '../components/Layout';
import { getAllPkgs } from '../lib/mdxUtils';

export default function Homepage({ pkgs }) {
	return (
		<Layout pkgs={pkgs}>
			<Highlight
				as="h1"
				look="grad3"
				css={{
					display: 'inline-block',
					fontWeight: 900,
					fontSize: '3rem',
				}}
			>
				Home Page
			</Highlight>
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
