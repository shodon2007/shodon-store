import path from "path";

import {
    Options,
    paths,
    buildConfig,
} from './config/build';


const paths: paths ={
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'dist'),
}
interface env {
    mode: 'development'
}

const webpackConfig = (env: env) => {
    const mode = env.mode ?? 'development';
    const isDev = env.mode === 'development';

    const options : Options =  {
        paths,
        mode,
        isDev,
    }

    return buildConfig(options);
}

export default webpackConfig;
