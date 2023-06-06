module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'prettier', // should always be the last one, if eslint-config-next (next) plugin is not included.
		'next', // should always be the last one.
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react'],
	rules: {
		// Disable React import.
		'react/react-in-jsx-scope': 0,
	},
	overrides: [
		{
			files: ['**/*.stories.@(js|jsx|ts|tsx)'],
			rules: {
				'react/jsx-props-no-spreading': ['off'],
			},
		},
	],
}
