import path from "path";

export class Paths {
    static root = path.resolve(__dirname, "../");
    static data = path.join(Paths.root, "data");
    static output = path.join(Paths.root, "dist");

    static enableTestMode() {
        Paths.output = path.join(Paths.root, "test-dist");
    }

    static get outputApi() {
        return path.join(Paths.output, "api");
    }

    static get outputQuotesParent() {
        return path.join(Paths.outputApi, "quotes");
    }

    static get outputBadgesParent() {
        return path.join(Paths.outputApi, "badges");
    }
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
    static outputQuotesTableJson = path.join(
        Paths.outputQuotesParent,
        "all.json"
    );
    static outputQuotesCountBadgeJson = path.join(
        Paths.outputBadgesParent,
        "count.json"
    );

    static getOutputQuoteJson(index: number) {
        return path.join(Paths.outputQuotesParent, `${index}.json`);
    }

    static getOutputQuotePng(index: number) {
        return path.join(Paths.outputQuotesParent, `${index}.png`);
    }
}
