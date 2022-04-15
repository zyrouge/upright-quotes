import { ensureFile, writeFile } from "fs-extra";
import { FilePaths } from "../config";
import { IMeta } from "../models/meta";

export const generateQuotesCountBadge = async (meta: IMeta) => {
    await ensureFile(FilePaths.outputQuotesCountBadgeJson);
    await writeFile(
        FilePaths.outputQuotesCountBadgeJson,
        JSON.stringify({
            schemaVersion: 1,
            label: "Total Quotes",
            message: `${meta.size}`,
            color: "7a15e6",
        })
    );
};
