import { createApp } from "vue";
import App from "./App.vue";
import { IconComponent } from "./tools/icons";

import "./assets/styles.css";

createApp(App).component("Icon", IconComponent).mount("#app");
