import dynamic from 'next/dynamic';
import Link from 'next/link';

function NextLink({ href, children, ...props }) {
	return (
		<Link href={href} passHref>
			<a {...props}>{children}</a>
		</Link>
	);
}

export const mdxComponents = {
	a: NextLink,
	Button: dynamic(() => import('@ds-workshop/button').then((mod) => mod.Button)),
};
