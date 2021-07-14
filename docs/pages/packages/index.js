import { Highlight } from '../../components/Highlight';
import { Layout } from '../../components/Layout';
import { getAllPkgs } from '../../lib/mdxUtils';
import { Type } from '@ds-workshop/type';

export default function PackagesHome({ pkgs }) {
	return (
		<Layout pkgs={pkgs}>
			<Type as="h1" look="heading84" css={{ margin: '0 0 1rem 0' }}>
				<Highlight look="grad3">Packages</Highlight>
			</Type>
			<Type as="p" look="body24bold" css={{ marginBottom: '3rem' }}>
				Choose from the packages in the left sidebar to see their documentation
			</Type>
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
