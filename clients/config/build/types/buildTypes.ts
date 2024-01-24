export interface paths {
    entry: string,
    output: string,
}

export interface Options {
    paths: paths,
    mode: 'development' | 'production',
    isDev: boolean
}
