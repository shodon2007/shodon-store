import webpack from 'webpack';
import {Options} from "./types/buildTypes";

function buildResolves(options: Options) {
    const resolves: webpack.ResolveOptions = {
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
    }

    return resolves;
}

export default buildResolves;
