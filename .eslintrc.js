module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true
	},
	useTabs: false,
	plugins: ['prettier'],
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto'
			}
		]
	}
};
