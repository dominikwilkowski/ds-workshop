import { keyframes } from '@ds-workshop/core';

const fadeIn = keyframes`
  from {
    bottom: -0.5em;
    opacity: 0;
  }
  to {
    bottom: 100%;
    opacity: 1;
  }
`;
/*
 * The Emoji component makes emojis more accessible to people:
 * - who have difficulty seeing the difference between a crying face and a laughing face
 * - who cannot see
 * - who print pages
 *
 * Read more here: https://adrianroselli.com/2016/12/accessible-emoji-tweaked.html
 */
export function Emoji({ symbol, alt, ...props }) {
	return (
		<span
			role="img"
			aria-label={alt}
			tabIndex="0"
			css={{
				position: 'relative',
				':focus:after,:hover:after': {
					position: 'absolute',
					display: 'block',
					zIndex: 1,
					bottom: '100%',
					left: 0,
					padding: '0.5em 0.75em',
					borderRadius: '0.5em',
					boxShadow: '0 0 0.2em rgba(0, 0, 0, 0.5)',
					content: `"${alt}"`,
					backgroundColor: 'rgba(0, 0, 0, 0.85)',
					color: '#fff',
					textAlign: 'center',
					fontSize: '0.8rem',
					opacity: 0,
					animation: `${fadeIn} calc(0.1s) ease-out calc(0.3s) 1 forwards`,
				},
				'@media print': {
					':after': {
						content: `' ("${alt}") '`,
						fontSize: '0.8rem',
					},
				},
			}}
			{...props}
		>
			{symbol}
		</span>
	);
}
