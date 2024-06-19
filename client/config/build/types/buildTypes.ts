export interface paths {
	entry: string;
	output: string;
	html: string;
	src: string;
}

export interface Options {
	paths: paths;
	mode: 'development' | 'production';
	isDev: boolean;
	port: number;
}
