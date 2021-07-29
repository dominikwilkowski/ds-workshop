import { Type } from '@ds-workshop/type';

export function ListItem({ children, ...props }) {
	return (
		<Type as="li" look="body18" {...props}>
			{children}
		</Type>
	);
}
