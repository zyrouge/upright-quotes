import { ensureFile, writeFile } from "fs-extra";
import { FilePaths } from "../config";
import { IQuote, IQuoteOutput } from "../models/exports";
import { ColorScheme } from "../tools/colors";

export const generateQuoteOutputJson = async (index: number, quote: IQuote) => {
    const response: IQuoteOutput = {
        ...quote,
        color: ColorScheme.getColor(quote.color).toJson(),
    };

    const filePath = FilePaths.getOutputQuoteJson(index);
    await ensureFile(filePath);
    await writeFile(filePath, JSON.stringify(response));
};
