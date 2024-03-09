/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	rootDir: '../../',
	testEnvironment: 'jsdom',
	modulePaths: ['<rootDir>'],
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/config/jest/empty.tsx',
		'\\.svg': '<rootDir>/config/jest/svg.ts',
	},
	setupFilesAfterEnv: ['<rootDir>/config/jest/jestSetup.ts'],
};

export default config;
