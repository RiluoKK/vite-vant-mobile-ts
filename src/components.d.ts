export {};
declare module "vue" {
  export interface GlobalComponents {
    // 在这里暴露出你的组件
    Tabbar: typeof import("./components/Tabbar/index.vue")["default"];
  }
}
