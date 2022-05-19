import { createApp } from "vue";
import "./index.css";
import router from "./router";
import VueAxios from "vue-axios";
import store from "./store";
import axios from "axios";

import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueAxios, axios);
app.mount("#app");

app.config.globalProperties.axios = axios;
axios.defaults.baseURL = "http://localhost:8989";
