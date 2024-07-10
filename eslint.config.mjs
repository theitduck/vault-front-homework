import pluginJs from '@eslint/js';
import pluginTsEslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';
import globals from 'globals';
import pluginJest from 'eslint-plugin-jest';

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		plugins: {
			'@typescript-eslint': pluginTsEslint.plugin,
		},
		languageOptions: {
			parser: pluginTsEslint.parser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: globals.browser,
		},
		rules: {
			...pluginJs.configs.recommended.rules,
			...pluginTsEslint.configs.recommended.rules,
			...fixupConfigRules(pluginReactConfig).rules,
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
		},
	},
	{
		files: ['**/*.spec.{js,ts,jsx,tsx}', '**/*.test.{js,ts,jsx,tsx}', '**/__tests__/**/*.{js,ts,jsx,tsx}'],
		plugins: {
			jest: pluginJest,
		},
		languageOptions: {
			globals: pluginJest.environments.globals.globals,
		},
		rules: {
			...pluginJest.configs.recommended.rules,
		},
	},
	{
		files: ['**/*.js'],
		languageOptions: {
			sourceType: 'script',
		},
	},
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
