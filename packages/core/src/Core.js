import { Global } from '@emotion/react';
import { Fragment } from 'react';

import { reset } from './reset';
import { Theme } from './Theme';

export function Core({ children }) {
	return (
		<Fragment>
			<Global styles={reset} />
			<Theme>{children}</Theme>
		</Fragment>
	);
}
