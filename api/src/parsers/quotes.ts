import { readFile } from "fs-extra";
import { FilePaths } from "../config";
import { IQuotesTable } from "../models/exports";

export const getQuotesTable = async () => {
    const data = await readFile(FilePaths.quotesTable);
    const quotes = JSON.parse(data.toString()) as IQuotesTable;
    return quotes;
};
