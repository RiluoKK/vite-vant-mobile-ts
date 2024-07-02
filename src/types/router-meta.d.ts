/**
 * @description 扩展ruoter-meta的类型
 */
import 'vue-router'
export {};
declare module "vue-router" {
  interface RouteMate {
    // 路由名称
    title: string;
    // 路由图标
    icon: string;
    // 该页面是否为tabbar页面
    isTabbarPage: boolean;
  }
}
