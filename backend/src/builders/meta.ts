import { ensureFile, writeFile } from "fs-extra";
import { FilePaths } from "../config";
import { IMeta } from "../models/meta";
import { generateQuotesCountBadge } from "./badge";

export const generateMeta = async (meta: IMeta) => {
    await ensureFile(FilePaths.outputMetaJson);
    await writeFile(FilePaths.outputMetaJson, JSON.stringify(meta));
};

export const generateMetaOutputs = async (meta: IMeta) => {
    await generateMeta(meta);
    await generateQuotesCountBadge(meta);
}
