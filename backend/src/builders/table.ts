import { IQuotesTable } from "../models/quote";
import { generateQuoteOutputPng } from "./image";
import { generateQuoteOutputJson, generateQuoteTableOutputJson } from "./quotes";

export const generateQuoteOutputs = async (table: IQuotesTable) => {
    for (let i = 0; i < table.quotes.length; i++) {
        const quote = table.quotes[i]!;
        await generateQuoteOutputPng(i, quote);
        await generateQuoteOutputJson(i, quote);
    }
    await generateQuoteTableOutputJson(table);
};
