module.exports = {
	parser: "babel-eslint",
	env: {
		es6: true,
		node: true,
		browser: true,
	},
	extends: ["eslint:recommended"],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		semi: ["error", "always"],
		"no-console": "off",
	},
};
