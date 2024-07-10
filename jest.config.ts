import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!**/vendor/**'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	transform: {
		'.(ts|tsx)': 'ts-jest',
	},
	coveragePathIgnorePatterns: ['/node_modules/', '/coverage', 'package.json', 'package-lock.json', 'index.tsx'],
};

export default config;
