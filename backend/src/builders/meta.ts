import { ensureFile, writeFile } from "fs-extra";
import { FilePaths } from "../config";
import { IMeta } from "../models/meta";

export const generateMeta = async (meta: IMeta) => {
    await ensureFile(FilePaths.outputMetaJson);
    await writeFile(FilePaths.outputMetaJson, JSON.stringify(meta));
};
