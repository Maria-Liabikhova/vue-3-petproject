import { createApp } from "vue";
import App from "./App.vue";
import "@/css/vars.css";
import "@/css/styles.css";
import router from "./router";
import store from "./store";
import directives from "@/directives/index.js";
import components from "@/components/ui/index.js";

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
directives.forEach((directive) => {
  app.directive(directive.name, directive);
});
app.use(store).use(router).mount("#app");
