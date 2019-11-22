module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', 'prettier', 'filenames', '@typescript-eslint'],
	extends: [
		// 'plugin:@typescript-eslint/recommended',  // We're not using the recommended rules from @typescript-eslint/eslint-plugin  (but leaving this comment as documentation)
		'plugin:react/recommended',
		'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
		'prettier/react', // disables react-specific linting rules that conflict with prettier
	],
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
	},
	env: {
		browser: true,
		jasmine: true,
		jest: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// e.g. '@typescript-eslint/explicit-function-return-type': 'off',
		// 0 is 'off', 1 is 'warning', 2 is 'error'
		'prettier/prettier': 1, // Show prettier issues as warnings rather than errors (autoformat still works)
		camelcase: 'off',
		curly: 1,
		// 'filenames/match-regex': [1, '^(?!.*--)(?!^[0-9-])(?!.*(-|-\.spec)$)[a-z0-9-]+(\.spec)?$', true],
		'max-depth': [1, 5],
		'max-lines': [1, { max: 500, skipBlankLines: true }],
		'max-len': [1, { code: 200, ignoreComments: true, ignoreUrls: true }],
		'no-const-assign': 1,
		'no-var': 1,
		'prefer-const': 1,
		'@typescript-eslint/camelcase': [1],
		'@typescript-eslint/class-name-casing': [1],
		'@typescript-eslint/interface-name-prefix': [1, { prefixWithI: 'always' }],
		// react specific
		'react/prop-types': 0,
		'react/no-unescaped-entities': 0,
	},
};
