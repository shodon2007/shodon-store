import {Options} from "./types/buildTypes";
import webpack from "webpack";

function buildRules(options: Options) {
    const rules: webpack.RuleSetRule[] = [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
        }
    ];

    return rules;
}

export default buildRules;
