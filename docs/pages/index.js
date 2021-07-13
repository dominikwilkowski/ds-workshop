import { getAllPkgs } from '../lib/mdxUtils';
import { Layout } from '../components/Layout';

export default function Homepage({ pkgs }) {
	return (
		<Layout pkgs={pkgs}>
			<h1>Home Page</h1>
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
