import { createWebHistory, createRouter } from "vue-router";
import Form from "./components/Form.vue";
import Looping from "./components/Looping.vue";

const routes = [
  {
    name: "Homepage",
    path: "/",
    component: Form,
  },
  {
    name: "Loop",
    path: "/loop/:name",
    component: Looping,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
