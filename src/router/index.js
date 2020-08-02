import Vue from "vue";
import VueRouter from "vue-router";
import CardList from "../views/CardList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CardList",
    component: CardList,
  },
  {
    path: "/add",
    name: "AddCard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "add-card" */ "../views/AddCard.vue"),
  },
  {
    path: "/remove",
    name: "RemoveCard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "remove-card" */ "../views/RemoveCard.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
