import path from 'path';

import { Options, paths, buildConfig } from './config/build';

const paths: paths = {
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	output: path.resolve(__dirname, 'dist'),
	html: path.resolve(__dirname, 'public', 'index.html'),
	src: path.resolve(__dirname, 'src'),
};
interface env {
	mode: 'development' | 'production';
	port: number;
}

const webpackConfig = (env: env) => {
	const mode = env.mode ?? 'development';
	const isDev = env.mode === 'development';
	const port = env.port ?? 3333;

	const options: Options = {
		paths,
		mode,
		isDev,
		port,
	};

	return buildConfig(options);
};

export default webpackConfig;
