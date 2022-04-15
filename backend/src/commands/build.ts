import { rm } from "fs-extra";
import { generateQuoteOutputs, generateMetaOutputs } from "../builders/exports";
import { Paths } from "../config";
import { getQuotesTable } from "../parsers/quotes";

const build = async () => {
    const table = await getQuotesTable();

    await rm(Paths.output, {
        recursive: true,
        force: true,
    });

    await generateQuoteOutputs(table);
    await generateMetaOutputs({
        size: table.quotes.length,
        generatedAt: Date.now(),
    });
};

build();
