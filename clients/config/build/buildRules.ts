import {Options} from "./types/buildTypes";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

function buildRules(options: Options) {
    const rules: webpack.RuleSetRule[] = [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
        },
        {
            test: /\.scss$/i,
            use: [
                // Creates `style` nodes from JS strings
                options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
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
                // Compiles Sass to CSS
                "sass-loader",
            ],
        },
    ];

    return rules;
}

export default buildRules;
