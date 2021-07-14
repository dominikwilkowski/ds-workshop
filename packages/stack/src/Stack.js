const gapMap = [
	0,
	'var(--space-xxsmall)',
	'var(--space-xsmall)',
	'var(--space-small)',
	'var(--space-medium)',
	'var(--space-large)',
	'var(--space-xlarge)',
	'var(--space-xxlarge)',
];

export function Stack({ gap = 4, orientation = 'vertical', inline, ...props }) {
	return (
		<div
			css={{
				display: inline ? 'inline-grid' : 'grid',
				mozBoxAlign: 'stretch',
				placeItems: 'stretch',
				gap: gapMap[gap],
				gridAutoFlow: orientation === 'vertical' ? 'row' : 'column',
				width: '-moz-fit-content',
				minHeight: 0,
				minWidth: 0,
			}}
			{...props}
		/>
	);
}
