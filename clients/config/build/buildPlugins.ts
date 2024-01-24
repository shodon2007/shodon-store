import {Options} from "./types/buildTypes";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

function buildPlugins(options: Options) {
    const webpackPlugins: webpack.WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({
            template: options.paths.html,
        }),
    ];

    return webpackPlugins;
}

export default buildPlugins;
