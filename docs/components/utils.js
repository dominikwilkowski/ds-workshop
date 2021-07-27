import { jsx } from '@emotion/react';
import dynamic from 'next/dynamic';
import React from 'react';

import { ColorTheme } from './docs/ColorTheme';
import { IconPallet } from './docs/IconPallet';
import { InlineCode } from './docs/InlineCode';
import { Paragraph } from './docs/Paragraph';
import { NextLink } from './docs/NextLink';
import { ListItem } from './docs/ListItem';
import { Type } from '@ds-workshop/type';
import { CodeBlock } from './CodeBlock';
import { Highlight } from './Highlight';
import { Box } from './docs/Box';

const packages = {
	Button: dynamic(() => import('@ds-workshop/button').then((mod) => mod.Button)),
	Core: dynamic(() => import('@ds-workshop/core').then((mod) => mod.Core)),
	DarkModeBtn: dynamic(() => import('@ds-workshop/core').then((mod) => mod.DarkModeBtn)),
	Emoji: dynamic(() => import('@ds-workshop/emoji').then((mod) => mod.Emoji)),
	Loading: dynamic(() => import('@ds-workshop/loading').then((mod) => mod.Loading)),
	Stack: dynamic(() => import('@ds-workshop/stack').then((mod) => mod.Stack)),
	Cli: dynamic(() => import('@ds-workshop/icons').then((mod) => mod.Cli)),
	Copy: dynamic(() => import('@ds-workshop/icons').then((mod) => mod.Copy)),
	Lab: dynamic(() => import('@ds-workshop/icons').then((mod) => mod.Lab)),
	Roadmap: dynamic(() => import('@ds-workshop/icons').then((mod) => mod.Roadmap)),
	Shield: dynamic(() => import('@ds-workshop/icons').then((mod) => mod.Shield)),

	Type: Type,
	Box: Box,
};

export const mdxComponents = {
	a: NextLink,
	p: Paragraph,
	li: ListItem,
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
	ColorTheme: ColorTheme,
	...packages,
};
