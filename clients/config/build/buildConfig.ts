import 'webpack-dev-server';
import webpack from 'webpack';
import {Options} from "./types/buildTypes";
import buildResolves from "./buildResolves";
import buildRules from "./buildRules";
import buildPlugins from "./buildPlugins";
function buildConfig(options: Options) {
    const config: webpack.Configuration = {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: '[filename].[contenthash].js',
            clean: true,
        },
        resolve: buildResolves(options),

        module: {
            rules:buildRules(options)
        },
        plugins:buildPlugins(options),
        devServer: {
            historyApiFallback: true,
        }
    };

    return config;
}

export default buildConfig;
