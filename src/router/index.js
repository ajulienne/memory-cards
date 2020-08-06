import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CategoryPage from "../views/CategoryPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/category",
    name: "AddCategory",
    component: () =>
      import(/* webpackChunkName: "add-category" */ "../views/AddCategory.vue"),
  },
  {
    path: "/category/:id",
    name: "Category",
    component: CategoryPage,
  },
  {
    path: "/category/:id/add",
    name: "AddCard",
    component: () =>
      import(/* webpackChunkName: "add-card" */ "../views/AddCard.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
