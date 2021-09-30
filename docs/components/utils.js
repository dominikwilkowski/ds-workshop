import React, { useState, Fragment } from 'react';
import { jsx } from '@emotion/react';
import dynamic from 'next/dynamic';

import { CodeBlock } from './CodeBlock';

const packages = {
	Button: dynamic(() => import('@ds-workshop/button').then((mod) => mod.Button)),
	Core: dynamic(() => import('@ds-workshop/core').then((mod) => mod.Core)),
	DarkModeBtn: dynamic(() => import('@ds-workshop/core').then((mod) => mod.DarkModeBtn)),
	Emoji: dynamic(() => import('@ds-workshop/emoji').then((mod) => mod.Emoji)),
	Cli: dynamic(() => import('@ds-workshop/icons').then((mod) => mod.Cli)),
	Copy: dynamic(() => import('@ds-workshop/icons').then((mod) => mod.Copy)),
	Lab: dynamic(() => import('@ds-workshop/icons').then((mod) => mod.Lab)),
	Roadmap: dynamic(() => import('@ds-workshop/icons').then((mod) => mod.Roadmap)),
	Shield: dynamic(() => import('@ds-workshop/icons').then((mod) => mod.Shield)),
	Loading: dynamic(() => import('@ds-workshop/loading').then((mod) => mod.Loading)),
	Modal: dynamic(() => import('@ds-workshop/modal').then((mod) => mod.Modal)),
	Stack: dynamic(() => import('@ds-workshop/stack').then((mod) => mod.Stack)),
	Type: dynamic(() => import('@ds-workshop/type').then((mod) => mod.Type)),

	Box: dynamic(() => import('./mdx/Box').then((mod) => mod.Box)),
	Illustration: dynamic(() => import('./mdx/Illustration').then((mod) => mod.Illustration)),
	Fragment,
};

export const mdxComponents = {
	a: dynamic(() => import('./mdx/NextLink').then((mod) => mod.NextLink)),
	p: dynamic(() => import('./mdx/Paragraph').then((mod) => mod.Paragraph)),
	blockquote: dynamic(() => import('./mdx/Blockquote').then((mod) => mod.Blockquote)),
	li: dynamic(() => import('./mdx/ListItem').then((mod) => mod.ListItem)),
	h1: dynamic(() => import('./mdx/Headings').then((mod) => mod.H1)),
	h2: dynamic(() => import('./mdx/Headings').then((mod) => mod.H2)),
	h3: dynamic(() => import('./mdx/Headings').then((mod) => mod.H3)),
	h4: dynamic(() => import('./mdx/Headings').then((mod) => mod.H4)),
	h5: dynamic(() => import('./mdx/Headings').then((mod) => mod.H5)),
	h6: dynamic(() => import('./mdx/Headings').then((mod) => mod.H6)),
	inlineCode: dynamic(() => import('./mdx/InlineCode').then((mod) => mod.InlineCode)),
	IconPallet: dynamic(() => import('./mdx/IconPallet').then((mod) => mod.IconPallet)),
	ColorTheme: dynamic(() => import('./mdx/ColorTheme').then((mod) => mod.ColorTheme)),
	code: function Code({ children, initialCompiledResult, live, className }) {
		return (
			<CodeBlock
				code={children.trim()}
				initialCompiledResult={initialCompiledResult}
				scope={{ ...packages, useState, React: { ...React, createElement: jsx } }}
				live={live}
				className={className}
			/>
		);
	},
	...packages,
};
