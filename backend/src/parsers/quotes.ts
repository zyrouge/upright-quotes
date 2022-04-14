import { readFile, writeFile } from "fs-extra";
import { FilePaths } from "../config";
import { IQuotesTable } from "../models/exports";

const _jsonIndent = 4;

export const getQuotesTable = async () => {
    const data = await readFile(FilePaths.quotesTable);
    const quotes = JSON.parse(data.toString()) as IQuotesTable;
    return quotes;
};

export const saveQuotesTable = async (table: IQuotesTable) => {
    await writeFile(FilePaths.quotesTable, JSON.stringify(table, undefined, _jsonIndent));
};
