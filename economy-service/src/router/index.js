import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: Login,
  },
  {
    path: "/sign-up",
    name: "",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/add-group",
    name: "",
    component: () => import("../views/AddGroup.vue"),
  },
  {
    path: "/add-m8",
    name: "",
    component: () => import("../views/AddM8.vue"),
  },
  {
    path: "/add-discipline",
    name: "",
    component: () => import("../views/AddDiscipline.vue"),
  },
  {
    path: "/m8s",
    name: "",
    component: () => import("../views/StudentsList.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.fullPath === "/add-group") {
    if (!store.state.token) {
      next("/");
    }
  }
  if (to.fullPath === "/add-discipline") {
    if (!store.state.token) {
      next("/");
    }
  }
  if (to.fullPath === "/add-m8") {
    if (!store.state.token) {
      next("/");
    }
  }
  next();
});

export default router;
