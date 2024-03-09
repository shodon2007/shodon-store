import { Options } from './types/buildTypes';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

function buildPlugins(options: Options) {
	const webpackPlugins: webpack.WebpackPluginInstance[] = [
		new HtmlWebpackPlugin({
			template: options.paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: 'disabled',
		}),
	];

	return webpackPlugins;
}

export default buildPlugins;
