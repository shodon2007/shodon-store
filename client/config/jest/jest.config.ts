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
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
	setupFilesAfterEnv: ['<rootDir>/config/jest/jestSetup.ts'],
};

export default config;
