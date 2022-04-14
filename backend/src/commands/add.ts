import { createPromptModule } from "inquirer";
import { IQuote } from "../models/quote";
import { getQuotesTable, saveQuotesTable } from "../parsers/quotes";
import { ColorScheme } from "../tools/colors";

const add = async () => {
    const prompt = createPromptModule();

    const { quote, author, color } = await prompt(
        [
            {
                
                name: "quote",
                type: "input",
                message: "Quote:",
            },
            {
                
                name: "author",
                type: "input",
                message: "Author:",
            },
            {
                
                name: "color",
                type: "list",
                message: "Color:",
                choices: ColorScheme.codes
            }
        ]
    );

    const nQuote: IQuote = {
        quote, author, color
    };

    const table = await getQuotesTable();
    table.quotes.push(nQuote);
    await saveQuotesTable(table);
};

add();
