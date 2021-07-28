import { Type } from '@ds-workshop/type';

export function Blockquote(props) {
	return (
		<Type
			as="blockquote"
			look="body20"
			css={{
				borderLeft: '5px solid var(--focus)',
				margin: 0,
				paddingLeft: '2rem',
				'& p': {
					fontSize: 'inherit',
					maxWidth: 'inherit',
					lineHeight: 'inherit',
					fontWeight: 'inherit',
					color: 'inherit',
					fontFamily: 'inherit',
				},
			}}
			{...props}
		/>
	);
}
