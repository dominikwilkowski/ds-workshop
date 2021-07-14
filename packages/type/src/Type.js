import { forwardRef } from 'react';

const common = {
	brand: {
		fontFamily: 'var(--font-brand)',
		fontWeight: 700,
		color: 'var(--headline)',
		letterSpacing: '0.01em',
		lineHeight: 1.428,
	},
	body: {
		fontFamily: 'var(--font-body)',
		color: 'var(--text)',
		letterSpacing: '0.01em',
		lineHeight: 1.2,
	},
};

export const styleMap = {
	heading20: {
		...common.brand,
		fontWeight: 500,
		fontSize: 'var(--font4)',
	},
	heading24: {
		...common.brand,
		fontWeight: 500,
		fontSize: 'var(--font5)',
	},
	heading30: {
		...common.brand,
		fontSize: 'var(--font6)',
	},
	heading36: {
		...common.brand,
		fontSize: 'var(--font7)',
	},
	heading48: {
		...common.brand,
		fontSize: 'var(--font8)',
	},
	heading64: {
		...common.brand,
		fontSize: 'var(--font9)',
	},

	text14: {
		...common.body,
		fontSize: 'var(--font1)',
	},
	text16: {
		...common.body,
		fontSize: 'var(--font2)',
	},
	text18: {
		...common.body,
		fontSize: 'var(--font3)',
	},
	text18bold: {
		...common.body,
		fontSize: 'var(--font3)',
		fontWeight: 700,
	},
};

export const Type = forwardRef(
	({ as: Tag = 'span', look, fontSize, margin, padding, atTop, atBottom, ...props }, ref) => {
		return (
			<Tag
				ref={ref}
				css={{
					...styleMap[look],
					...(fontSize ? { fontSize } : {}),
					marginTop: atTop ? 0 : false,
					marginBottom: atBottom ? 0 : false,
					...(margin ? { margin } : {}),
					...(padding ? { padding } : {}),
				}}
				{...props}
			/>
		);
	}
);

Type.displayName = 'Type';
