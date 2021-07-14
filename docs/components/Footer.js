import { Thinkmill } from '@ds-workshop/icons';

export function Footer(props) {
	return (
		<footer
			css={{
				gridArea: 'footer',
				padding: '1rem 0',
				textAlign: 'center',
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
