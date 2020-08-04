import Vue from "vue";
import VueRouter from "vue-router";
import CardList from "../views/CardList.vue";
import CardSelector from "../views/CardSelector.vue";

Vue.use(VueRouter);

const routes = [
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
    path: "/cards",
    name: "CardList",
    component: CardList,
    children: [
      {
        path: ":id",
        name: "CardSelector",
        component: CardSelector,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
