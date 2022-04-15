export interface IColorScheme {
    primary: string;
    contrast: string;
}

export class ColorScheme implements IColorScheme {
    constructor(
        public readonly primary: string,
        public readonly contrast: string
    ) {}

    toJson(): IColorScheme {
        return { primary: this.primary, contrast: this.contrast };
    }

    // Source: https://tailwindcss.com/docs/customizing-colors#default-color-palette
    static schemes = {
        neutral: new ColorScheme("#F5F5F5", "#000000"),
        biased: new ColorScheme("#171717", "#FFFFFF"),
        murple: new ColorScheme("#6E427F", "#FFFFFF"),
        indigo: new ColorScheme("#6366F1", "#FFFFFF"),
        violet: new ColorScheme("#8B5CF6", "#FFFFFF"),
        purple: new ColorScheme("#A855F7", "#FFFFFF"),
        space: new ColorScheme("#283057", "#FFFFFF"),
        salmon: new ColorScheme("#F59678", "#000000"),
        rose: new ColorScheme("#EE5558", "#FFFFFF"),
        amber: new ColorScheme("#1C1917", "#FACC15"),
        sapphire: new ColorScheme("#155E75", "#FFFFFF")
    } as const;

    static get codes() {
        return Object.keys(ColorScheme.schemes);
    }

    static getColor(code: string) {
        if (!ColorScheme.isValidColor(code)) {
            throw new Error(`Invalid color: ${code}`);
        }

        // @ts-ignore
        return this.schemes[code] as ColorScheme;
    }

    static isValidColor(code: string) {
        // @ts-ignore
        return this.schemes[code] instanceof ColorScheme;
    }
}
