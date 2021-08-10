import { slugify } from '../../lib/slugify';
import { Link } from '@ds-workshop/icons';
import { Highlight } from '../Highlight';

function Helper({ link }) {
	return (
		<a
			data-helper
			href={`#${link}`}
			css={{
				position: 'absolute',
				top: '0',
				bottom: '0',
				left: '-2rem',
				paddingRight: '0.5rem',
				alignItems: 'center',
				color: 'var(--link) !important',
				border: 'none !important',
			}}
		>
			<Link css={{ height: '1.75rem' }} />
		</a>
	);
}

const commonStyles = {
	position: 'relative',
	'& a': {
		color: 'inherit',
		borderBottom: '1px solid var(--link)',
	},
	'& [data-helper]': {
		display: 'none',
	},
	'&:hover [data-helper]': {
		display: 'flex',
	},
};

export function H1({ children, ...props }) {
	const slug = slugify(children.toString().replace('[object Object]', ''));
	return (
		<h1 id={slug} css={commonStyles}>
			<Highlight
				look="grad3"
				css={{
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '4rem',
					marginBottom: '0.5rem',
					'& a': {
						color: 'inherit',
						borderBottom: '1px solid var(--link)',
					},
				}}
				{...props}
			>
				{children}
			</Highlight>
			<Helper link={slug} />
		</h1>
	);
}

export function H2({ children, ...props }) {
	const slug = slugify(children.toString().replace('[object Object]', ''));
	return (
		<h2 id={slug} css={commonStyles}>
			<Highlight
				look="grad2"
				css={{
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '3rem',
					marginBottom: '0.5rem',
					'& a': {
						color: 'inherit',
						borderBottom: '1px solid var(--link)',
					},
				}}
				{...props}
			>
				{children}
			</Highlight>
			<Helper link={slug} />
		</h2>
	);
}

export function H3({ children, ...props }) {
	const slug = slugify(children.toString().replace('[object Object]', ''));
	return (
		<h3 id={slug} css={commonStyles}>
			<Highlight
				look="grad4"
				css={{
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '2.25rem',
					marginBottom: '0.5rem',
					'& a': {
						color: 'inherit',
						borderBottom: '1px solid var(--link)',
					},
				}}
				{...props}
			>
				{children}
			</Highlight>
			<Helper link={slug} />
		</h3>
	);
}

export function H4({ children, ...props }) {
	const slug = slugify(children.toString().replace('[object Object]', ''));
	return (
		<h4 id={slug} css={commonStyles}>
			<Highlight
				look="grad1"
				css={{
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '1.875rem',
					marginBottom: '0.5rem',
					'& a': {
						color: 'inherit',
						borderBottom: '1px solid var(--link)',
					},
				}}
				{...props}
			>
				{children}
			</Highlight>
			<Helper link={slug} />
		</h4>
	);
}

export function H5({ children, ...props }) {
	const slug = slugify(children.toString().replace('[object Object]', ''));
	return (
		<h5 id={slug} css={commonStyles}>
			<Highlight
				look="grad5"
				css={{
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '1.5rem',
					marginBottom: '0.5rem',
					'& a': {
						color: 'inherit',
						borderBottom: '1px solid var(--link)',
					},
				}}
				{...props}
			>
				{children}
			</Highlight>
			<Helper link={slug} />
		</h5>
	);
}

export function H6({ children, ...props }) {
	const slug = slugify(children.toString().replace('[object Object]', ''));
	return (
		<h6
			id={slug}
			css={{
				fontFamily: 'var(--font-brand)',
				fontSize: '1.25rem',
				fontWeight: 900,
				marginBottom: '0.5rem',
				...commonStyles,
			}}
			{...props}
		>
			{children}
			<Helper link={slug} />
		</h6>
	);
}
