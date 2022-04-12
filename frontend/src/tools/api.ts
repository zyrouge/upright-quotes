import { ExternalURLs } from "./constants";

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
    static url =
        import.meta.env["VITE_API_URL"] ??
        `https://cdn.jsdelivr.net/gh/${ExternalURLs._ghUsername}/${ExternalURLs._ghRepo}@${ExternalURLs._ghDistBranch}/api`;

    static async getMeta(): Promise<IMeta> {
        const resp = await API.request(API.getMetaJsonURL());
        const json = await resp.json();
        return json as IMeta;
    }

    static async getQuoteJson(index: number): Promise<IQuote> {
        const resp = await API.request(API.getQuoteJsonURL(index));
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

    static request(input: RequestInfo, init?: RequestInit) {
        return fetch(input, {
            cache: "reload",
            ...init,
        });
    }
}
