import { Options } from "./types/buildTypes";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

function buildRules(options: Options) {
    const rules: webpack.RuleSetRule[] = [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
        },
        {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        },
        {
            test: /\.scss$/i,
            use: [
                options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: (resPath: string): boolean => Boolean(resPath.endsWith('.module.scss')),
                            localIdentName: options.isDev
                                ? '[path][name]__[local]--[hash:base64:4]'
                                : '[hash:base64:8]',
                        }
                    },
                },
                "sass-loader",
            ],
        },
    ];

    return rules;
}

export default buildRules;
