import React, { Fragment, useState } from 'react';
import { jsx } from '@emotion/react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import * as icons from '@ds-workshop/icons';
import { Type } from '@ds-workshop/type';
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

function NewType(props) {
	return <Type as="p" look="body18" {...props} />;
}

function InlineCode(props) {
	return (
		<span
			css={{
				display: 'inline-block',
				color: 'var(--code)',
				background: 'var(--code-bg)',
				padding: '0.025rem 0.25rem',
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

function IconPallet() {
	const [look, setLook] = useState(null);

	return (
		<Fragment>
			Set background to:
			<ul
				css={{
					listStyle: 'none',
					display: 'inline-block',
					padding: 0,
					margin: '0 0 1rem 0',
					li: {
						display: 'inline-block',
						margin: '0 0.5rem',
					},
				}}
			>
				<li>
					<label>
						None <input type="radio" name="icon" checked={look === null} onChange={() => setLook(null)} />
					</label>
				</li>
				<li>
					<label>
						grad1 <input type="radio" name="icon" checked={look === 'grad1'} onChange={() => setLook('grad1')} />
					</label>
				</li>
				<li>
					<label>
						grad2 <input type="radio" name="icon" checked={look === 'grad2'} onChange={() => setLook('grad2')} />
					</label>
				</li>
				<li>
					<label>
						grad3 <input type="radio" name="icon" checked={look === 'grad3'} onChange={() => setLook('grad3')} />
					</label>
				</li>
				<li>
					<label>
						grad4 <input type="radio" name="icon" checked={look === 'grad4'} onChange={() => setLook('grad4')} />
					</label>
				</li>
				<li>
					<label>
						grad5 <input type="radio" name="icon" checked={look === 'grad5'} onChange={() => setLook('grad5')} />
					</label>
				</li>
			</ul>
			<ul
				css={{
					listStyle: 'none',
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(6.75rem, 1fr))',
					gap: '1.5rem',
					padding: '1rem 0',
					margin: 0,
					borderTop: '2px dashed var(--border)',
					borderBottom: '2px dashed var(--border)',
				}}
			>
				{Object.keys(icons).map((icon) => {
					const Icon = icons[icon];
					return (
						<li key={icon}>
							<div
								css={{
									display: 'grid',
									gridTemplateRows: 'auto max-content',
									minHeight: '4.5rem',
									justifyItems: 'center',
								}}
							>
								<Icon
									look={look}
									css={{
										width: '3rem',
									}}
								/>
								<InlineCode>{icon}</InlineCode>
							</div>
						</li>
					);
				})}
			</ul>
		</Fragment>
	);
}

const packages = {
	Button: dynamic(() => import('@ds-workshop/button').then((mod) => mod.Button)),
	Core: dynamic(() => import('@ds-workshop/core').then((mod) => mod.Core)),
	Emoji: dynamic(() => import('@ds-workshop/emoji').then((mod) => mod.Emoji)),
	Loading: dynamic(() => import('@ds-workshop/loading').then((mod) => mod.Loading)),
	Stack: dynamic(() => import('@ds-workshop/stack').then((mod) => mod.Stack)),
	Type: Type,

	Cli: dynamic(() => import('@ds-workshop/icons').then((mod) => mod.Cli)),
	Copy: dynamic(() => import('@ds-workshop/icons').then((mod) => mod.Copy)),
	Lab: dynamic(() => import('@ds-workshop/icons').then((mod) => mod.Lab)),
	Roadmap: dynamic(() => import('@ds-workshop/icons').then((mod) => mod.Roadmap)),
	Shield: dynamic(() => import('@ds-workshop/icons').then((mod) => mod.Shield)),
};

export const mdxComponents = {
	a: NextLink,
	p: NewType,
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
					marginBottom: '0.5rem',
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
					marginBottom: '0.5rem',
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
					marginBottom: '0.5rem',
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
					marginBottom: '0.5rem',
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
					marginBottom: '0.5rem',
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
					marginBottom: '0.5rem',
				}}
				{...props}
			/>
		);
	},
	inlineCode: InlineCode,
	code: function Code({ children, initialCompiledResult, live, className }) {
		return (
			<CodeBlock
				code={children.trim()}
				initialCompiledResult={initialCompiledResult}
				scope={{ ...packages, React: { ...React, createElement: jsx } }}
				live={live}
				className={className}
			/>
		);
	},
	IconPallet: IconPallet,
	...packages,
};
