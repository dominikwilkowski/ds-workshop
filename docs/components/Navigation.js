import { useRouter } from 'next/router';
import Link from 'next/link';

function LinkItem({ path, name }) {
	const { asPath } = useRouter();

	return (
		<Link href={path} passHref>
			<a
				css={{
					textDecoration: path === asPath ? 'underline' : 'none',
				}}
			>
				{name}
			</a>
		</Link>
	);
}

function List(props) {
	return (
		<ul
			css={{
				listStyle: 'none',
				padding: 0,
				margin: 0,
				'& li': {
					margin: '0.5rem 0',
				},
				'& li:first-of-type': {
					marginTop: 0,
				},
			}}
			{...props}
		/>
	);
}

export function Navigation({ pkgs, ...props }) {
	return (
		<nav
			css={{
				padding: '1rem',
			}}
			{...props}
		>
			<List
				css={{
					position: 'sticky',
					top: '1rem',
					overflow: 'auto',
				}}
			>
				<li>
					<LinkItem path="/" name="Home" />
				</li>
				<li>
					<h2
						css={{
							fontSize: '1rem',
							margin: '1rem 0 0.5rem 0',
						}}
					>
						Packages
					</h2>
					<List>
						{pkgs.map(({ slug, name }) => (
							<li key={slug}>
								<LinkItem path={`/packages/${slug}`} name={name} />
							</li>
						))}
					</List>
				</li>
			</List>
		</nav>
	);
}
