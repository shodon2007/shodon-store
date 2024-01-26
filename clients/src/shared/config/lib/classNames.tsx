

type Mods = Record<string, boolean>

export function classNames(className: string, mods: Mods,  additional: string[]):string {
    return [
        className,
    ...Object.entries(mods).filter(([, value]) => value).map(([key]) => key),
        ...additional,
    ].join(' ');
}
