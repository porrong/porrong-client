import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import LoginRequestPage from "../views/LoginRequestPage.vue";
import MainPage from "../views/MainPage.vue";

const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/login",
    component: LoginRequestPage,
  },
  {
    path: "/main",
    component: MainPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
