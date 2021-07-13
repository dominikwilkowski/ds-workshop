import { forwardRef } from 'react';

// import { Loading } from './loading';

// import { useMediaQuery } from '../hooks/use-media-query';

export const Button = forwardRef((props, ref) => {
	return <button css={{ background: 'red' }} ref={ref} {...props} />;
});

Button.displayName = 'Button';
