import Link from 'next/link';

export function NextLink({ href, children, ...props }) {
	if (href.startsWith('http')) {
		return (
			<a href={href} target="_blank" rel="noopener noreferrer" {...props}>
				{children}
			</a>
		);
	}

	return (
		<Link href={href} passHref>
			<a {...props}>{children}</a>
		</Link>
	);
}
