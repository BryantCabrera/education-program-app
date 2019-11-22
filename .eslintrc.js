module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	plugins: ['prettier', 'filenames', '@typescript-eslint'],
	extends: [
		// 'plugin:@typescript-eslint/recommended',  // We're not using the recommended rules from @typescript-eslint/eslint-plugin  (but leaving this comment as documentation)
		'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
	},
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// e.g. '@typescript-eslint/explicit-function-return-type': 'off',
		// 0 is 'off', 1 is 'warning', 2 is 'error'
		'camelcase': 'off',
		'curly': 1,
		'max-depth': [1, 5],
		'max-lines': [1, { max: 500, skipBlankLines: true }],
		'no-const-assign': 1,
		'no-var': 1,
		'prefer-const': 1,
		'@typescript-eslint/camelcase': [1],
		'@typescript-eslint/class-name-casing': [1],
		'@typescript-eslint/interface-name-prefix': [1, { prefixWithI: 'always' }],
	},
};
