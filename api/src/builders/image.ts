import { createCanvas, registerFont } from "canvas";
import { ensureFile, writeFile } from "fs-extra";
import { FilePaths } from "../config";
import { ExternalLinks } from "../constants";
import { IQuote } from "../models/exports";
import { ColorScheme } from "../tools/colors";
import { FontFamily } from "../tools/fonts";

const size = 1000;
const textPaddingX = 100;
const textSpacingY = 15;
const qFontFamily = FontFamily.families.urbanistExtraBold;
const qFontSize = "58pt";
const aFontFamily = FontFamily.families.urbanistItalic;
const aFontSize = "24pt";
const cFontFamily = FontFamily.families.urbanistItalic;
const cFontSize = "12pt";
const cPaddingX = 10;
const cPaddingY = cPaddingX / 2;

export const generateQuoteOutputPng = async (index: number, quote: IQuote) => {
    // @ts-ignore
    const color = ColorScheme.getColor(quote.color);

    registerFont(qFontFamily.path, {
        family: qFontFamily.family,
    });
    registerFont(aFontFamily.path, {
        family: aFontFamily.family,
    });

    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = color.primary;
    ctx.fillRect(0, 0, size, size);

    ctx.font = `${qFontSize} ${qFontFamily.family}`;
    ctx.fillStyle = color.contrast;
    ctx.textAlign = "start";
    ctx.textBaseline = "middle";

    const tMaxWidth = size - textPaddingX * 2;
    const words = quote.quote.split(/\s+/);

    let i = 0;
    const lines = [""];
    for (const word of words) {
        const appendedLine = `${lines[i]} ${word}`.trim();
        const lMetrics = ctx.measureText(appendedLine);

        if (lMetrics.width < tMaxWidth) {
            lines[i] = appendedLine;
            continue;
        }

        i++;
        lines[i] = word;
    }

    const tSingleHeight = getTextHeight(ctx.measureText("Yy"));
    const tSingleSpacedHeight = tSingleHeight + textSpacingY;
    const tHeight = tSingleSpacedHeight * lines.length;
    const tTop = (size - tHeight) / 2;
    lines.forEach((line, i) => {
        ctx.fillText(line, textPaddingX, tTop + tSingleSpacedHeight * i);
    });

    ctx.font = `${aFontSize} ${aFontFamily.family}`;
    ctx.fillText(
        `~ ${quote.author}`,
        textPaddingX,
        tTop + tHeight - textSpacingY / 2
    );

    ctx.font = `${cFontSize} ${cFontFamily.family}`;
    ctx.textAlign = "end";
    ctx.textBaseline = "bottom";
    ctx.fillText(ExternalLinks.credits, size - cPaddingX, size - cPaddingY);

    const filePath = FilePaths.getOutputQuotePng(index);
    await ensureFile(filePath);
    await writeFile(filePath, canvas.toBuffer("image/png"));
};

function getTextHeight(metrics: TextMetrics) {
    return metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
}
