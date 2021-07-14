import { CodeHighlight } from './CodeHighlight';
import { ReactLive } from './ReactLive';

export const CodeBlock = ({ className, code, demo, initialCompiledResult, live, metastring, scope }) => {
	const language = className?.replace(/language-/, '');

	if (live) {
		return <ReactLive code={code} demo={demo} initialCompiledResult={initialCompiledResult} scope={scope} />;
	}

	return (
		<pre
			css={{
				background: 'var(--code-bg)',
				borderRadius: '3px',
				boxShadow: `0 0 0 1px var(--border)`,
				fontFamily: 'var(--font-mono)',
				fontSize: '0.875rem',
				maxWidth: '100%',
				overflow: 'auto',
				padding: 10,
				margin: '1rem 0',

				code: {
					fontFamily: 'inherit',
				},
			}}
		>
			<CodeHighlight metastring={metastring} code={code} language={language} />
		</pre>
	);
};
