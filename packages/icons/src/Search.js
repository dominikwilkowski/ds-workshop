import { Gradients } from './util';

export function Search({ look, ...props }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			aria-label="Search"
			role="img"
			fill="none"
			stroke={look ? `url(#Copy-${look})` : 'currentColor'}
			{...props}
		>
			<Gradients name="Search" />
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	);
}
