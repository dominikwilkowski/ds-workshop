import { Gradients } from './util';

export function Code({ look, ...props }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			aria-label="Code"
			role="img"
			fill="none"
			stroke={look ? `url(#Code-${look})` : 'currentColor'}
			{...props}
		>
			<Gradients name="Code" />
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
		</svg>
	);
}
