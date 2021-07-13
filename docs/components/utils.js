import dynamic from 'next/dynamic';

export const mdxComponents = {
	Button: dynamic(() => import('@ds-workshop/button').then((mod) => mod.Button)),
};
