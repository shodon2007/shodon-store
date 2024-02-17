

type Mods = Record<string, boolean>

export default function classNames(className: string, mods: Mods = {},  additional: string[] = []):string {
    return [
        className,
        ...Object.entries(mods).filter(([, value]) => value).map(([key]) => key),
        ...additional,
    ].join(' ');
}
