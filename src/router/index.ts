import useAppStore from "@/stores/modules/app";
import NProgress from "nprogress";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
NProgress.configure({ showSpinner: true, parent: "#app" });
declare module "vue-router" {
  interface RouteMeta {
    // 路由名称
    title: string;
    // 默认路由图标
    normalIcon?: string;
    // 激活路由图标
    activeIcon?: string;
    // 该页面是否为tabbar页面
    isTabbarPage: boolean;
    // 路由编码，唯一编码
    menuCode: number;
  }
}
// 路由定义
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home/index.vue"),
    meta: {
      title: "首页",
      isTabbarPage: true,
      menuCode: 100000,
      normalIcon: "home-o",
      activeIcon: "wap-home",
    },
  },
  {
    path: "/warning",
    name: "warning",
    component: () => import("@/pages/warning/index.vue"),
    meta: {
      title: "告警",
      isTabbarPage: true,
      menuCode: 200000,
      normalIcon: "bulb-o",
      activeIcon: "bell",
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/pages/user/index.vue"),
    meta: {
      title: "我的",
      isTabbarPage: true,
      menuCode: 300000,
      normalIcon: "contact-o",
      activeIcon: "contact",
    },
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
