import { Fragment, forwardRef } from 'react';
import Link from 'next/link';

import { Loading } from '@ds-workshop/loading';

const styleMap = {
	default: {},
	danger: {
		'--button-bg': 'var(--danger)',
		'--button-bg-hover': 'var(--danger-90)',
		'--button-bg-active': 'var(--danger-90)',
		'--button-bg-disabled': 'var(--danger--40)',
		'--button-shadow': '0 0 4px 0 rgb(220 38 255 / 20%)',
		'--button-shadow-hover': '0 0 4px 0 rgb(220 38 255 / 24%)',
	},
	soft: {
		'--button-bg': 'var(--app-bg)',
		'--button-bg-hover': 'var(--link)',
		'--button-bg-active': 'var(--link)',
		'--button-bg-disabled': 'var(--app-bg)',
		'--button-color': 'var(--link)',
		'--button-color-hover': 'var(--app-bg)',
		'--button-color-active': 'var(--app-bg)',
		'--button-color-disabled': 'var(--brand-bg--40)',
		'--button-border': '1px solid var(--link)',
		'--button-border-hover': '1px solid var(--brand-bg-90)',
		'--button-border-active': '1px solid var(--brand-bg-90)',
		'--button-border-disabled': '1px solid var(--brand-bg--40)',
		'--button-shadow': '0 0 4px 0 rgb(0 118 255 / 10%)',
		'--button-shadow-hover': '0 0 4px 0 rgb(0 118 255 / 10%)',
		'--button-shadow-active': '0 0 4px 0 rgb(0 118 255 / 08%)',
	},
	text: {
		'--button-bg': 'transparent',
		'--button-bg-hover': 'transparent',
		'--button-bg-active': 'transparent',
		'--button-color': 'var(--link)',
		'--button-color-hover': 'var(--link)',
		'--button-color-active': 'var(--link)',
		'--button-color-disabled': 'var(--disabled)',
		'--button-decoration-hover': 'underline',
		'--button-bg-disabled': 'transparent',
		'--button-transform-active': 'none',
		'--button-shadow': 'none',
		'--button-shadow-hover': 'none',
		'--button-shadow-active': 'none',
		display: 'inline',
		height: 'auto',
		padding: 0,
		borderRadius: 0,
	},
};

const sizeMap = {
	small: {
		fontSize: '0.75rem',
		borderRadius: '6px',
		height: '1.8rem',
		padding: '0 var(--space-large)',
		'& svg': {
			height: '1.3em',
		},
	},
	default: {
		fontSize: '1rem',
		borderRadius: '6px',
		height: '2.4rem',
		padding: '0 var(--space-large)',
	},
	large: {
		fontSize: '1.125rem',
		borderRadius: '6px',
		height: '3rem',
		padding: '0 var(--space-xlarge)',
	},
};

export const Button = forwardRef(
	({ as: Tag = 'button', href, look = 'default', size = 'default', disabled, loading, children, ...props }, ref) => {
		let Wrapper = Fragment;

		if (Tag === 'a' && !href) {
			Tag = 'button';
		}

		if (Tag === 'a' && href) {
			disabled = undefined;
			Wrapper = function Thingo({ children }) {
				return (
					<Link href={href} passHref>
						{children}
					</Link>
				);
			};
		}

		if (look === 'text') {
			disabled = loading ? true : disabled;
			loading = false;
		}

		return (
			<Wrapper>
				<Tag
					ref={ref}
					css={{
						'--button-bg': 'var(--brand-bg)',
						'--button-bg-hover': 'var(--brand-bg-90)',
						'--button-bg-active': 'var(--brand-bg-90)',
						'--button-bg-disabled': 'var(--brand-bg--40)',
						'--button-border': '0 none',
						'--button-border-hover': 'var(--button-border)',
						'--button-border-active': 'var(--button-border)',
						'--button-border-disabled': 'var(--button-border)',
						'--button-color': 'var(--app-bg)',
						'--button-color-hover': 'var(--app-bg)',
						'--button-color-active': 'var(--app-bg)',
						'--button-color-disabled': 'var(--app-bg)',
						'--button-decoration-hover': 'none',
						'--button-shadow': '0 0 4px 0 rgb(0 118 255 / 36%)',
						'--button-shadow-hover': '0 0 4px 0 rgb(0 118 255 / 30%)',
						'--button-shadow-active': 'none',
						'--button-transform-active': 'translateY(1px)',
						position: 'relative',
						display: 'inline-flex',
						flexShrink: '0',
						letterSpacing: '-.2px',
						color: 'var(--button-color)',
						mozBoxAlign: 'center',
						alignItems: 'center',
						boxShadow: 'var(--button-shadow)',
						background: 'var(--button-bg)',
						border: 'var(--button-border)',
						fontFamily: 'var(--font-brand)',
						fontWeight: '600',
						mozBoxPack: 'center',
						justifyContent: 'center',
						outline: 'currentcolor none 0',
						textDecoration: 'none',
						userSelect: 'none',
						whiteSpace: 'nowrap',
						cursor: 'pointer',
						transition: 'all 0.1s ease',
						':hover': {
							boxShadow: 'var(--button-shadow-hover)',
							background: 'var(--button-bg-hover)',
							textDecoration: 'var(--button-decoration-hover)',
							color: 'var(--button-color-hover)',
							border: 'var(--button-border-hover)',
						},
						':active': {
							boxShadow: 'var(--button-shadow-active)',
							transform: 'var(--button-transform-active)',
							background: 'var(--button-bg-active)',
							color: 'var(--button-color-active)',
							border: 'var(--button-border-active)',
						},
						':disabled': {
							boxShadow: 'none',
							cursor: 'not-allowed',
							background: 'var(--button-bg-disabled)',
							opacity: '0.9',
							color: 'var(--button-color-disabled)',
							border: 'var(--button-border-disabled)',
							pointerEvents: 'none',
						},
						':focus-visible': {
							outline: '1px dashed var(--focus)',
							outlineOffset: '3px',
						},
						'& svg': {
							display: 'inline-block',
							height: '1em',
							width: 'auto',
							verticalAlign: 'middle',
							margin: 0,
						},
						...sizeMap[size],
						...styleMap[look],
					}}
					aria-disabled={disabled ? true : undefined}
					disabled={loading || disabled}
					{...props}
				>
					<span
						css={{
							display: 'inline-flex',
							gap: '0.5rem',
							alignItems: 'center',
							opacity: loading ? 0 : 1,
							textDecoration: 'inherit',
						}}
					>
						{children}
					</span>
					{loading ? (
						<Loading
							css={{
								position: 'absolute',
							}}
						/>
					) : null}
				</Tag>
			</Wrapper>
		);
	}
);

Button.displayName = 'Button';
