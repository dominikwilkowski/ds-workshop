import { useTheme } from './Theme';
import { LightMode } from './LightMode';
import { DarkMode } from './DarkMode';

export function DarkModeBtn(props) {
	const { theme, changeTheme } = useTheme();

	return (
		<button
			onClick={() => changeTheme()}
			css={{
				display: 'inline-flex',
				appearance: 'none',
				background: 'transparent',
				boxShadow: 'none',
				border: '0 none',
				borderRadius: '100%',
				lineHeight: 1,
				padding: 0,
				margin: 0,
				color: 'var(--muted)',
				cursor: 'pointer',
				transition: 'color 0.3s ease',
				'&:hover, &:focus': {
					color: 'var(--link)',
				},
			}}
			{...props}
		>
			{theme === 'dark' ? (
				<LightMode css={{ height: 'var(--space-xlarge)' }} />
			) : (
				<DarkMode css={{ height: 'var(--space-xlarge)' }} />
			)}
		</button>
	);
}
