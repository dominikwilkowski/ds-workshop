export function Footer(props) {
	return (
		<footer
			css={{
				gridArea: 'footer',
				padding: '1rem 0',
				textAlign: 'center',
			}}
			{...props}
		>
			(c) by Dom
		</footer>
	);
}
