import { IColorScheme } from "../tools/colors";

export interface IQuote {
    quote: string;
    author: string;
    color: string;
}

export interface IQuotesTable {
    quotes: IQuote[];
}

export interface IQuoteOutput extends Omit<IQuote, "color"> {
    index: number;
    color: IColorScheme;
}
