import { Configuration } from 'webpack-dev-server';
import { Options } from './types/buildTypes';

export default function buildServer(options: Options): Configuration {
	return {
		port: options.port,
		historyApiFallback: true,
	};
}
