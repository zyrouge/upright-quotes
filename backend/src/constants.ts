export class Constants {
    static title = "UprightQuotes";
}

export class Links {
    static website = "https://zyrouge.github.io/upright-quotes";
    static github = "https://github.com/zyrouge/upright-quotes";

    static buildQuoteLink(index: number) {
        return `${Links.website}/?index=${index}`;
    }
}
