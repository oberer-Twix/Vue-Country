import { createRouter, createWebHistory } from "vue-router";
import Countries from "../views/Countries.vue";
import About from "../views/About.vue";
import CountryDetails from "../views/CountryDetails.vue";

const routes = [
  {
    path: "/",
    redirect: "/countries",
  },
  {
    path: "/countries",
    name: "countries",
    component: Countries,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/country/:name",
    name: "country",
    component: CountryDetails,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
