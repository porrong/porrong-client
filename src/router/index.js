import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    conponent: null,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
