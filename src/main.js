import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start } from "qiankun";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "@/mock/mockServer";

Vue.config.productionTip = false;
Vue.use(Antd);

registerMicroApps([
  // {
  //   name: "reactApp",
  //   entry: "//localhost:3000",
  //   container: "#container",
  //   activeRule: "/app-react",
  // },
  {
    name: "microApp",
    entry: "//localhost:8882",
    container: "#microApp",
    activeRule: "/microApp",
  },
  // {
  //   name: "angularApp",
  //   entry: "//localhost:4200",
  //   container: "#container",
  //   activeRule: "/app-angular",
  // },
]);
// 启动 qiankun
start();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
