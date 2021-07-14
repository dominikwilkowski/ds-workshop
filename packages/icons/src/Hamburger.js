import { Gradients } from './util';

export function Hamburger({ look, ...props }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			aria-label="Hamburger"
			role="img"
			fill="none"
			stroke={look ? `url(#Hamburger-${look})` : 'currentColor'}
			{...props}
		>
			<Gradients name="Hamburger" />
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	);
}
