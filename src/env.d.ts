import "vue-router";
declare module "vue-router" {
  interface RouteMate {
    // 路由名称
    title: string;
    // 路由图标
    icon: string;
  }
}
