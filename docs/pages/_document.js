import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		const siteUrl = process.env.siteUrl;
		const metaTitle = 'Design System Workshop';
		const metaDescription = 'Design System Workshop';

		return (
			<Html>
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="mask-icon" color="#2684FF" href="/safari-pinned-tab.svg" />
					<link rel="shortcut icon" href="/favicon.ico" />

					<meta property="og:title" content={metaTitle} />
					<meta property="og:description" content={metaDescription} />
					<meta property="og:image" content={`${siteUrl}/og-image-landscape.png`} />
					<meta property="og:image:width" content="761" />
					<meta property="og:image:height" content="410" />
					<meta property="og:type" content="website" />
					<meta property="og:locale" content="en" />

					<meta name="twitter:title" content={metaTitle} />
					<meta name="twitter:description" content={metaDescription} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:image" content={`${siteUrl}/og-image-landscape.png`} />

					<meta name="msapplication-TileColor" content="#2684FF" />
					<meta name="msapplication-config" content="/browserconfig.xml" />
					<meta name="theme-color" content="#ffffff" />

					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
