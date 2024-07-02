import NProgress from "nprogress";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
NProgress.configure({ showSpinner: true, parent: "#app" });
// 路由定义
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach((to, from, failure) => {
  NProgress.done();
});
export default router;
