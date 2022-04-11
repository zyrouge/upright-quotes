import { FilePaths } from "../config";

export class FontFamily {
    constructor(public readonly family: string, public readonly path: string) {}

    // Source: https://tailwindcss.com/docs/customizing-colors#default-color-palette
    static families = {
        urbanistItalic: new FontFamily(
            "UrbanistItalic",
            FilePaths.urbanistItalicFont
        ),
        urbanistExtraBold: new FontFamily(
            "UrbanistExtraBold",
            FilePaths.urbanistExtraBoldFont
        ),
    } as const;
}
