export interface IMeta {
    size: number;
    generatedAt: number;
}

export interface IColorScheme {
    primary: string;
    contrast: string;
}

export interface IQuote {
    quote: string;
    author: string;
    color: IColorScheme;
}

export class API {
    static url = import.meta.env["VITE_API_URL"] ?? "/api";

    static async getMeta(): Promise<IMeta> {
        const resp = await fetch(API.getMetaJsonURL());
        const json = await resp.json();
        return json as IMeta;
    }

    static async getQuoteJson(index: number): Promise<IQuote> {
        const resp = await fetch(API.getQuoteJsonURL(index));
        const json = await resp.json();
        return json as IQuote;
    }

    static getMetaJsonURL() {
        return `${API.url}/meta.json`;
    }

    static getQuoteJsonURL(index: number) {
        return `${API.url}/quotes/${index}.json`;
    }

    static getQuoteImageURL(index: number) {
        return `${API.url}/quotes/${index}.png`;
    }
}
