import {Options} from "./types/buildTypes";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

function buildPlugins(options: Options) {
    const webpackPlugins: webpack.WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({
            template: options.paths.html,
        }),
        new MiniCssExtractPlugin(),
    ];

    return webpackPlugins;
}

export default buildPlugins;
