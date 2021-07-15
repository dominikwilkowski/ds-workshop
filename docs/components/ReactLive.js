import { useLiveCode } from '@untitled-docs/live-code';
import { useEffect, useRef, useState } from 'react';
import Editor from 'react-simple-code-editor';
import copy from 'clipboard-copy';

import { CodeHighlight } from './CodeHighlight';
import { Button } from '@ds-workshop/button';
import { Copy } from '@ds-workshop/icons';

function useCodeStyles() {
	return {
		backgroundColor: 'var(--code-bg)',
		color: 'var(--code)',
		fontFamily: 'var(--font-mono)',
		fontSize: '0.875rem',
		maxWidth: '100%',

		code: {
			fontFamily: 'inherit',
		},
	};
}

function highlightCode(code) {
	return <CodeHighlight code={code} language="jsx" />;
}

function Header({ code }) {
	return (
		<div
			css={{
				borderTop: '1px dashed var(--border)',
			}}
		>
			<div
				css={{
					padding: '0.5rem 1rem',
					textAlign: 'right',
				}}
			>
				<Button
					look="text"
					size="small"
					onClick={() => {
						copy(code);
					}}
				>
					Copy
					<Copy />
				</Button>
			</div>
		</div>
	);
}

export const ReactLive = ({ code, demo, scope, initialCompiledResult }) => {
	const collapsible = useRef(false);
	const wrapper = useRef(null);
	const [collapsed, setCollapsed] = useState(true);
	const [liveCode, setLiveCode] = useState(code);

	const { element, error, latestSuccessfulCompiledResult } = useLiveCode({
		code: liveCode,
		scope,
		initialCompiledResult: () => JSON.parse(initialCompiledResult),
	});

	const codeStyles = useCodeStyles();

	const gutter = '1rem';
	const COLLAPSE_BUTTON_HEIGHT = '1rem';
	const COLLAPSED_HEIGHT = 200;

	useEffect(() => {
		const el = wrapper.current;

		if (el && el.scrollHeight > COLLAPSED_HEIGHT + COLLAPSE_BUTTON_HEIGHT) {
			collapsible.current = true;
		}
	}, []);

	if (demo) {
		return (
			<div
				css={{
					borderRadius: '3px',
					borderTopLeftRadius: '3px',
					borderTopRightRadius: '3px',
					boxShadow: '0 0 0 1px var(--border)',
					padding: gutter,
				}}
			>
				{element}
			</div>
		);
	}

	return (
		<div
			css={{
				borderRadius: '3px',
				boxShadow: '0 0 0 1px var(--border)',
				margin: '1rem 0',
				whiteSpace: 'break-spaces',
				wordWrap: 'anywhere',
			}}
		>
			<div>
				<div
					css={{
						borderTopLeftRadius: '3px',
						borderTopRightRadius: '3px',
						padding: gutter,
					}}
				>
					{element}
				</div>
				{latestSuccessfulCompiledResult && <Header code={liveCode} />}
				<div
					css={{
						overflow: 'hidden',
						borderBottomLeftRadius: '3px',
						borderBottomRightRadius: '3px',
						position: 'relative',
						maxHeight: collapsible.current && collapsed ? COLLAPSED_HEIGHT : undefined,
						paddingBottom: collapsible.current && !collapsed ? COLLAPSE_BUTTON_HEIGHT : undefined,
					}}
					ref={wrapper}
				>
					<Editor
						value={liveCode}
						padding="1rem"
						highlight={highlightCode}
						onValueChange={setLiveCode}
						css={{
							...codeStyles,
							...(error
								? {}
								: {
										borderBottomLeftRadius: '3px',
										borderBottomRightRadius: '3px',
								  }),
						}}
					/>
					{collapsible.current && (
						<button
							css={{
								background: 'var(--code-bg)',
								border: 0,
								bottom: 0,
								borderBottomLeftRadius: '3px',
								borderBottomRightRadius: '3px',
								boxSizing: 'border-box',
								color: 'var(--code)',
								cursor: 'pointer',
								fontSize: '0.875rem',
								fontWeight: 500,
								height: COLLAPSE_BUTTON_HEIGHT,
								left: 0,
								padding: 0,
								position: 'absolute',
								textTransform: 'uppercase',
								width: '100%',

								':hover, &.focus-visible': {
									background: 'red',
								},

								':before':
									collapsible.current && collapsed
										? {
												background: `linear-gradient(rgba(255,155,100,0.1) 50%, var(--code-bg))`,
												content: '" "',
												height: COLLAPSED_HEIGHT,
												position: 'absolute',
												bottom: COLLAPSE_BUTTON_HEIGHT,
												left: 0,
												right: 0,
										  }
										: {},
							}}
							onClick={() => setCollapsed((v) => !v)}
						>
							Show {collapsed ? 'more' : 'less'}
						</button>
					)}
				</div>
			</div>
			{error && (
				<pre
					css={{
						backgroundColor: 'var(--danger-bg)',
						color: 'var(--danger)',
						borderBottomLeftRadius: '3px',
						borderBottomRightRadius: '3px',
						margin: 0,
						maxWidth: '100%',
						padding: gutter,
						whiteSpace: 'pre-wrap',
						wordWrap: 'break-word',
					}}
				>
					{error}
				</pre>
			)}
		</div>
	);
};
