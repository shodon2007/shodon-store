type Mods = Record<string, boolean>;

function classNames(
	className: string,
	mods: Mods = {},
	additional: string[] = [],
): string {
	return [
		className,
		...Object.entries(mods)
			.filter(([, value]) => value)
			.map(([key]) => key),
		...additional,
	].join(' ');
}

export default classNames;
