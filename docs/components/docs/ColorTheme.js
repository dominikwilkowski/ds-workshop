import { Fragment } from 'react';

import { COLORS } from '@ds-workshop/core';
import { Type } from '@ds-workshop/type';
import { Swatch } from './Swatch';

export function ColorTheme({ theme = 'light' }) {
	let firstGrad;

	return (
		<Fragment>
			<Type look="heading20" as="h2">
				Color tokens
			</Type>
			<div
				css={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(8.75rem, 1fr))',
					gap: '0.5rem',
					background: COLORS[theme]['--app-bg'],
					padding: '2rem 0 1rem 0',
				}}
			>
				{Object.entries(COLORS[theme])
					.filter(([name]) => name !== '--theme')
					.filter(([name]) => !name.startsWith('--grad'))
					.map(([name, color]) => (
						<Swatch key={`light-${name}`} name={name} color={color} />
					))}
			</div>

			<Type look="heading20" as="h2">
				Gradient tokens
			</Type>
			<div
				css={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(8.75rem, 1fr))',
					gap: '0.5rem',
					background: COLORS[theme]['--app-bg'],
					padding: '2rem 0',
				}}
			>
				{Object.entries(COLORS[theme])
					.filter(([name]) => name.startsWith('--grad'))
					.map(([name, color]) => {
						if (name.endsWith('-2')) {
							return (
								<Swatch
									key={`light-grad-${name}`}
									name={name.split('-')[2]}
									gradient={{ grad1: firstGrad, grad2: color }}
								/>
							);
						} else {
							firstGrad = color;
						}
					})}
			</div>
		</Fragment>
	);
}
