import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router/index";
import pinia from "./stores";
import vant from "vant";
// 公共样式
import "@/styles/index.less";
// vant部分组件样式
import "vant/es/toast/style";
import "vant/es/dialog/style";
import "vant/es/notify/style";
import "vant/es/image-preview/style";
import router from "./router/index";
const app = createApp(App).use(Router).use(pinia).use(vant);
// 解决由于使用组合式setup函数被多次调用导致无法获取到路由信息的问题
router.isReady().then(() => app.mount("#app"));
