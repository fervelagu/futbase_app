module.exports = {
	root: true,
	extends: ['@react-native-community', 'plugin:prettier/recommended'],
	env: {
		'react-native/react-native': true
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['react', 'react-native', 'prettier'],
	rules: {
		quotes: ['error', 'single'],
		'comma-dangle': ['error', 'never'],
		'comma-spacing': ['error', { before: false, after: true }],
		'linebreak-style': ['error', 'unix'],
		'no-trailing-spaces': 'error',
		'no-unused-vars': [
			'error',
			{ vars: 'all', args: 'after-used', ignoreRestSiblings: false }
		],
		'no-useless-escape': 0,
		'react-native/no-unused-styles': 2,
		'react-native/split-platform-components': 2,
		'react-native/no-inline-styles': 2,
		'react-native/no-color-literals': 2,
		'react-native/no-raw-text': 2,
		'react/prop-types': [0, { ignore: 'all' }],
		'react-native/sort-styles': 0
	}
};
