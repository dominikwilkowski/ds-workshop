import { Gradients } from './util';

export function Watch({ look, ...props }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			aria-label="Watch"
			role="img"
			fill="none"
			stroke={look ? `url(#Watch-${look})` : 'currentColor'}
			{...props}
		>
			<Gradients name="Watch" />
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	);
}
