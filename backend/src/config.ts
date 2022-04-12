import path from "path";

export class Paths {
    static root = path.resolve(__dirname, "../");
    static data = path.join(Paths.root, "data");
    static output = path.join(Paths.root, "dist");
    static outputApi = path.join(Paths.output, "api");
    static outputQuotesParent = path.join(Paths.outputApi, "quotes");
}

export class FilePaths {
    static quotesTable = path.join(Paths.data, "quotes.json");
    static urbanistItalicFont = path.join(
        Paths.data,
        "fonts/Urbanist-Italic.ttf"
    );
    static urbanistExtraBoldFont = path.join(
        Paths.data,
        "fonts/Urbanist-ExtraBoldItalic.ttf"
    );

    static outputMetaJson = path.join(Paths.outputApi, "meta.json");
    static outputQuotesTableJson = path.join(Paths.outputQuotesParent, "all.json");

    static getOutputQuoteJson(index: number) {
        return path.join(Paths.outputQuotesParent, `${index}.json`);
    }

    static getOutputQuotePng(index: number) {
        return path.join(Paths.outputQuotesParent, `${index}.png`);
    }
}