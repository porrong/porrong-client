import { createApp } from "vue";
import router from "./router";
import VueAxios from "vue-axios";
import axios from "axios";

import App from "./App.vue";
const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.mount("#app");
