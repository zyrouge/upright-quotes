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

    static schemes = {
        IvoryBlack: new ColorScheme("#F5F5F5", "#000000"),
        BlackWhite: new ColorScheme("#171717", "#FFFFFF"),
        PurpleWhite: new ColorScheme("#6E427F", "#FFFFFF"),
        IndigoWhite: new ColorScheme("#6366F1", "#FFFFFF"),
        VioletWhite: new ColorScheme("#8B5CF6", "#FFFFFF"),
        LavenderWhite: new ColorScheme("#A855F7", "#FFFFFF"),
        SpaceWhite: new ColorScheme("#283057", "#FFFFFF"),
        SalmonBlack: new ColorScheme("#F59678", "#000000"),
        RoseWhite: new ColorScheme("#EE5558", "#FFFFFF"),
        BlackAmber: new ColorScheme("#1C1917", "#FACC15"),
        SapphireWhite: new ColorScheme("#155E75", "#FFFFFF"),
        SkyBlack: new ColorScheme("#49C6F4", "#000000"),
        CyanBlack: new ColorScheme("#0EE3D8", "#000000"),
        MangoBlack: new ColorScheme("#FF5915", "#000000"),
        LimeBlack: new ColorScheme("#AEFC27", "#000000"),
        NeonBlack: new ColorScheme("#40F717", "#000000"),
        GreenBlack: new ColorScheme("#11F871", "#000000"),
        RoseBlack: new ColorScheme("#FDC4E1", "#000000"),
        TealWhite: new ColorScheme("#317773", "#FFFFFF"),
        CobaltWhite: new ColorScheme("#8AAAE5", "#FFFFFF"),
        PeachOrange: new ColorScheme("#FCEDDA", "#EE4E34"),
        RedPink: new ColorScheme("#CC313D", "#F7C5CC"),
        BlackBeige: new ColorScheme("#DDC3A5", "#000000"),
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
