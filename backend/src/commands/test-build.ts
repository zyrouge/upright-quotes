import { rm } from "fs-extra";
import {
    generateQuoteOutputJson,
    generateQuoteOutputPng,
} from "../builders/exports";
import { Paths } from "../config";
import { getQuotesTable } from "../parsers/quotes";

const testBuild = async () => {
    Paths.enableTestMode();

    const table = await getQuotesTable();

    await rm(Paths.output, {
        recursive: true,
        force: true,
    });

    const index = 0;
    const quote = table.quotes[index];
    if (!quote) {
        throw Error(`Index ${index} doesn't exist in table.`);
    }

    await generateQuoteOutputJson(index, quote);
    await generateQuoteOutputPng(index, quote);
};

testBuild();
