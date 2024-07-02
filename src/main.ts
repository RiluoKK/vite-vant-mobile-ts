import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router/index";
import pinia from "./stores";
import vant from "vant"
// 公共样式
import "@/styles/index.less"
createApp(App).use(Router).use(pinia).use(vant).mount("#app");
