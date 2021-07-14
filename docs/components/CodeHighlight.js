import PrismHighlight, { Prism } from 'prism-react-renderer';
import rangeParser from 'parse-numeric-range';

import { theme } from './prism-theme';

['js', 'jsx', 'ts', 'tsx'].forEach((lang) => {
	Prism.languages.insertBefore(lang, 'template-string', {
		'gql-template-string': {
			pattern: /gql`[^`]*`/,
			inside: Prism.languages.graphql,
		},
	});
});

const getShouldHighlightLine = (meta) => {
	const pattern = /{([\d,-]+)}/;
	const result = pattern.exec(meta);

	if (result) {
		const lineNumbers = rangeParser(result[1]);
		return (index) => lineNumbers.includes(index + 1);
	} else {
		return () => false;
	}
};

export const CodeHighlight = ({ code, language, metastring }) => {
	const shouldHighlightLine = getShouldHighlightLine(metastring);

	return (
		<PrismHighlight Prism={Prism} theme={theme} code={code} language={language}>
			{({ tokens, getLineProps, getTokenProps }) => (
				<code
					css={{
						// we don't want ligatures because they look strange in lots of cases
						// and mess up the editor
						fontFeatureSettings: 'initial',
						MozFontFeatureSettings: 'initial',
						minWidth: '100%',
					}}
				>
					{tokens.map((line, i) => {
						return (
							<div
								key={i}
								{...getLineProps({
									line,
									key: i,
								})}
								css={{
									backgroundColor: shouldHighlightLine(i) ? 'rgba(0,0,0,0.05)' : undefined,
								}}
							>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</div>
						);
					})}
				</code>
			)}
		</PrismHighlight>
	);
};
