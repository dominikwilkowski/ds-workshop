import { Gradients } from './util';

export function Close({ look, ...props }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			aria-label="Close"
			role="img"
			fill="none"
			stroke={look ? `url(#Close-${look})` : 'currentColor'}
			{...props}
		>
			<Gradients name="Close" />
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
		</svg>
	);
}
