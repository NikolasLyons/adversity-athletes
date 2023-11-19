import { createRouter, createWebHashHistory } from "vue-router";


function loadPage(page) {
  return () => import(`./pages/${page}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: loadPage("HomePage"),
  },
  {
    path: "/aboutus",
    name: "About Us",
    component: loadPage("AboutUs"),
  },
  {
    path: "/coaches",
    name: "Coaches",
    component: loadPage("Coaches"),
  },
  {
    path: "/sponsorship",
    name: "Sponsors",
    component: loadPage("Sponsors"),
  },

];

export const router = createRouter({
  linkActiveClass: "router-link-active",
  linkExactActiveClass: "router-link-exact-active",
  history: createWebHashHistory(),
  routes,
});