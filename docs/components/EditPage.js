import { Edit } from '@ds-workshop/icons';

export function EditPage({ slug = '' }) {
	return (
		<a
			href={`https://github.com/dominikwilkowski/ds-workshop/edit/main${slug}/README.md`}
			css={{
				display: 'block',
				marginTop: '3rem',
			}}
		>
			<Edit css={{ height: '1rem' }} /> Edit this page
		</a>
	);
}
