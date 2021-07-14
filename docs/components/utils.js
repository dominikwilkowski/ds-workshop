import { jsx } from '@emotion/react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

import { CodeBlock } from './CodeBlock';
import { Highlight } from './Highlight';

function NextLink({ href, children, ...props }) {
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

function InlineCode(props) {
	return (
		<span
			css={{
				display: 'inline-block',
				color: 'var(--code)',
				background: 'var(--code-bg)',
				padding: '0.0125rem 0.5rem',
				margin: 0,
				border: '1px solid var(--border)',
				borderRadius: '5px',
				fontSize: '85%',
				fontFamily: 'var(--font-mono)',
				wordBreak: 'break-all',
			}}
			{...props}
		/>
	);
}

const packages = {
	Button: dynamic(() => import('@ds-workshop/button').then((mod) => mod.Button)),
	Stack: dynamic(() => import('@ds-workshop/stack').then((mod) => mod.Stack)),
	Loading: dynamic(() => import('@ds-workshop/loading').then((mod) => mod.Loading)),
	Emoji: dynamic(() => import('@ds-workshop/emoji').then((mod) => mod.Emoji)),
};

export const mdxComponents = {
	a: NextLink,
	h1: function H1(props) {
		return (
			<Highlight
				as="h1"
				look="grad3"
				css={{
					display: 'inline-block',
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '4rem',
					marginTop: '1rem',
				}}
				{...props}
			/>
		);
	},
	h2: function H2(props) {
		return (
			<Highlight
				as="h2"
				look="grad3"
				css={{
					display: 'inline-block',
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '3rem',
					marginTop: '1rem',
				}}
				{...props}
			/>
		);
	},
	h3: function H3(props) {
		return (
			<Highlight
				as="h3"
				look="grad3"
				css={{
					display: 'inline-block',
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '2.25rem',
					marginTop: '1rem',
				}}
				{...props}
			/>
		);
	},
	h4: function H4(props) {
		return (
			<Highlight
				as="h4"
				look="grad3"
				css={{
					display: 'inline-block',
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '1.875rem',
					marginTop: '1rem',
				}}
				{...props}
			/>
		);
	},
	h5: function H5(props) {
		return (
			<Highlight
				as="h5"
				look="grad3"
				css={{
					display: 'inline-block',
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '1.5rem',
					marginTop: '1rem',
				}}
				{...props}
			/>
		);
	},
	h6: function H6(props) {
		return (
			<Highlight
				as="h6"
				look="grad3"
				css={{
					display: 'inline-block',
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '1rem',
					marginTop: '1rem',
				}}
				{...props}
			/>
		);
	},
	inlineCode: InlineCode,
	code: function Code({ children, initialCompiledResult }) {
		return (
			<CodeBlock
				code={children.trim()}
				initialCompiledResult={initialCompiledResult}
				scope={{ ...packages, React: { ...React, createElement: jsx } }}
				live
			/>
		);
	},
	...packages,
};
