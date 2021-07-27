import { InlineCode } from './InlineCode';

export function Swatch({ name, color, gradient }) {
	return (
		<div css={{ textAlign: 'center' }}>
			<div
				css={{
					display: 'inline-block',
					width: '4rem',
					height: '4rem',
					margin: '0 auto',
					border: '3px solid #fff',
					borderRadius: '100%',
					boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
					background: gradient ? `linear-gradient(135deg, ${gradient.grad1} 4.86%, ${gradient.grad2} 97.92%)` : color,
				}}
			/>
			<span
				css={{
					display: 'block',
					padding: '0 0 1rem 0',
				}}
			>
				<InlineCode>{name}</InlineCode>
			</span>
		</div>
	);
}
