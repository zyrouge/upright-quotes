import { ExternalURLs } from "./constants";

export const executeConsoleMessage = () => {
    console.log(
        `Hello there! If you are here, you might be special! I appreciate your effort into opening the DevTools. But it would be nice if you check out ${ExternalURLs.github}!`
    );
};
