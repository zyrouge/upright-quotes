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
        neutral: new ColorScheme("#f5f5f5", "#171717"),
        biased: new ColorScheme("#171717", "#f5f5f5"),
        red: new ColorScheme("#dc2626", "#fef2f2"),
        orange: new ColorScheme("#f97316", "#fff7ed"),
        amber: new ColorScheme("#f59e0b", "#fffbeb"),
        emerald: new ColorScheme("#10b981", "#ecfdf5"),
        teal: new ColorScheme("#14b8a6", "#f0fdfa"),
        indigo: new ColorScheme("#6366f1", "#eef2ff"),
        violet: new ColorScheme("#8b5cf6", "#f5f3ff"),
        purple: new ColorScheme("#a855f7", "#faf5ff"),
        fuchsia: new ColorScheme("#d946ef", "#fdf4ff"),
        pink: new ColorScheme("#ec4899", "#fdf2f8"),
        rose: new ColorScheme("#f43f5e", "#fff1f2"),
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
