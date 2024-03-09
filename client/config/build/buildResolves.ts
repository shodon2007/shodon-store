import webpack from 'webpack';
import { Options } from './types/buildTypes';
import path from 'path';

function buildResolves(options: Options) {
	const resolves: webpack.ResolveOptions = {
		extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.json'],
		alias: {
			src: options.paths.src,
		},
	};

	return resolves;
}

export default buildResolves;
