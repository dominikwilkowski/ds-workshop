import { Thinkmill } from '@ds-workshop/icons/Thinkmill';

export function Footer(props) {
	return (
		<footer
			css={{
				gridArea: 'footer',
				textAlign: 'center',
				background: 'var(--code-bg)',
				padding: 'var(--space-xlarge) 0',
				borderTop: '2px dashed var(--border)',
			}}
			{...props}
		>
			<div
				css={{
					display: 'inline-grid',
					gridTemplateColumns: 'max-content max-content max-content',
					alignItems: 'center',
					gap: '0.5rem',
				}}
			>
				&copy; by <Thinkmill css={{ height: '2rem' }} /> and Dom
			</div>
		</footer>
	);
}
