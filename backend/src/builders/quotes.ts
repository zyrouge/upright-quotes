import { ensureFile, writeFile } from "fs-extra";
import { FilePaths } from "../config";
import { IQuote, IQuotesTable, IQuoteOutput } from "../models/exports";
import { ColorScheme } from "../tools/colors";

export const generateQuoteOutputJson = async (index: number, quote: IQuote) => {
    const response: IQuoteOutput = {
        ...quote,
        index,
        color: ColorScheme.getColor(quote.color).toJson(),
    };

    const filePath = FilePaths.getOutputQuoteJson(index);
    await ensureFile(filePath);
    await writeFile(filePath, JSON.stringify(response));
};

export const generateQuoteTableOutputJson = async (table: IQuotesTable) => {
    const response: IQuoteOutput[] = table.quotes.map((x, i) => ({
        ...x,
        index: i,
        color: ColorScheme.getColor(x.color).toJson(),
    }));

    await ensureFile(FilePaths.outputQuotesTableJson);
    await writeFile(FilePaths.outputQuotesTableJson, JSON.stringify(response));
};