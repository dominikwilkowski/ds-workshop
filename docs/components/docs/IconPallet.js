import { Fragment, useState } from 'react';

import * as icons from '@ds-workshop/icons';
import { InlineCode } from './InlineCode';

export function IconPallet() {
	const [look, setLook] = useState(null);

	return (
		<Fragment>
			Set background to:
			<ul
				css={{
					listStyle: 'none',
					display: 'inline-block',
					padding: 0,
					margin: '0 0 1rem 0',
					li: {
						display: 'inline-block',
						margin: '0 0.5rem',
					},
				}}
			>
				<li>
					<label>
						None <input type="radio" name="icon" checked={look === null} onChange={() => setLook(null)} />
					</label>
				</li>
				<li>
					<label>
						grad1 <input type="radio" name="icon" checked={look === 'grad1'} onChange={() => setLook('grad1')} />
					</label>
				</li>
				<li>
					<label>
						grad2 <input type="radio" name="icon" checked={look === 'grad2'} onChange={() => setLook('grad2')} />
					</label>
				</li>
				<li>
					<label>
						grad3 <input type="radio" name="icon" checked={look === 'grad3'} onChange={() => setLook('grad3')} />
					</label>
				</li>
				<li>
					<label>
						grad4 <input type="radio" name="icon" checked={look === 'grad4'} onChange={() => setLook('grad4')} />
					</label>
				</li>
				<li>
					<label>
						grad5 <input type="radio" name="icon" checked={look === 'grad5'} onChange={() => setLook('grad5')} />
					</label>
				</li>
			</ul>
			<ul
				css={{
					listStyle: 'none',
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(6.75rem, 1fr))',
					gap: '1.5rem',
					padding: '1rem 0',
					margin: 0,
					borderTop: '2px dashed var(--border)',
					borderBottom: '2px dashed var(--border)',
				}}
			>
				{Object.keys(icons).map((icon) => {
					const Icon = icons[icon];
					return (
						<li key={icon}>
							<div
								css={{
									display: 'grid',
									gridTemplateRows: 'auto max-content',
									minHeight: '4.5rem',
									justifyItems: 'center',
								}}
							>
								<Icon
									look={look}
									css={{
										width: '3rem',
									}}
								/>
								<InlineCode>{icon}</InlineCode>
							</div>
						</li>
					);
				})}
			</ul>
		</Fragment>
	);
}
