const withPreconstruct = require('@preconstruct/next');

module.exports = withPreconstruct({
	basePath: process.env.NEXT_PUBLIC_BASE_PATH,
});
