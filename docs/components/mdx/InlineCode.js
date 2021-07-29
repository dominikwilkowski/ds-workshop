export function InlineCode(props) {
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
				'a &': {
					textDecoration: 'underline',
				},
			}}
			{...props}
		/>
	);
}
