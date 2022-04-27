import { createApp } from "vue";
import App from "./App.vue";
import { IconComponent } from "./tools/icons";
import { executeConsoleMessage } from "./tools/console";

import "./assets/styles.css";

executeConsoleMessage();

createApp(App).component("Icon", IconComponent).mount("#app");
