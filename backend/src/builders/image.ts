import { createCanvas, registerFont } from "canvas";
import { ensureFile, writeFile } from "fs-extra";
import { FilePaths } from "../config";
import { Constants, Links } from "../constants";
import { IQuote } from "../models/exports";
import { ColorScheme } from "../tools/colors";
import { FontFamily } from "../tools/fonts";

export interface IDesignOptions {
    size: number;
    textPaddingX: number;
    textSpacingY: number;
    qFontFamily: FontFamily;
    qFontSize: number;
    qFontReducer: number;
    qFontSizeReducer: number;
    aFontFamily: FontFamily;
    aFontSize: number;
    cFontFamily: FontFamily;
    cFontSize: number;
    cPaddingX: number;
    cPaddingY: number;
}

export const generateQuoteOutputPng = async (index: number, quote: IQuote) => {
    // @ts-ignore
    const color = ColorScheme.getColor(quote.color);

    const design: IDesignOptions = {
        size: 1000,
        textPaddingX: 100,
        textSpacingY: 15,
        qFontFamily: FontFamily.families.urbanistExtraBold,
        qFontSize: 58,
        qFontReducer: 25,
        qFontSizeReducer: 8,
        aFontFamily: FontFamily.families.urbanistItalic,
        aFontSize: 24,
        cFontFamily: FontFamily.families.urbanistItalic,
        cFontSize: 12,
        cPaddingX: 10,
        cPaddingY: 5,
    };

    registerFont(design.qFontFamily.path, {
        family: design.qFontFamily.family,
    });
    registerFont(design.aFontFamily.path, {
        family: design.aFontFamily.family,
    });

    const canvas = createCanvas(design.size, design.size);
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = color.primary;
    ctx.fillRect(0, 0, design.size, design.size);

    const tMaxWidth = design.size - design.textPaddingX * 2;
    const words = quote.quote.split(/\s+/);

    design.qFontSize =
        design.qFontSize -
        design.qFontSizeReducer *
            Math.floor(words.length / design.qFontReducer);

    ctx.font = `${design.qFontSize}pt ${design.qFontFamily.family}`;
    ctx.fillStyle = color.contrast;
    ctx.textAlign = "start";
    ctx.textBaseline = "middle";

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
    const tSingleSpacedHeight = tSingleHeight + design.textSpacingY;
    const tHeight = tSingleSpacedHeight * lines.length;
    const tTop = (design.size - tHeight) / 2;
    lines.forEach((line, i) => {
        ctx.fillText(line, design.textPaddingX, tTop + tSingleSpacedHeight * i);
    });

    ctx.font = `${design.aFontSize}pt ${design.aFontFamily.family}`;
    ctx.fillText(
        `~ ${quote.author}`,
        design.textPaddingX,
        tTop + tHeight - design.textSpacingY / 2
    );

    ctx.font = `${design.cFontSize}pt ${design.cFontFamily.family}`;
    ctx.textAlign = "end";
    ctx.textBaseline = "bottom";
    ctx.fillText(
        Links.buildQuoteLink(index),
        design.size - design.cPaddingX,
        design.size - design.cPaddingY
    );

    const cSingleHeight = getTextHeight(ctx.measureText("Yy"));
    ctx.font = `${design.cFontSize}pt ${design.qFontFamily.family}`;
    ctx.fillText(
        Constants.title,
        design.size - design.cPaddingX,
        design.size - design.cPaddingY * 2 - cSingleHeight
    );

    const filePath = FilePaths.getOutputQuotePng(index);
    await ensureFile(filePath);
    await writeFile(filePath, canvas.toBuffer("image/png"));
};

function getTextHeight(metrics: TextMetrics) {
    return metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
}
