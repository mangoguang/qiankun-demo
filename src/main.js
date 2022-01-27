import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start } from "qiankun";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

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
    name: "vueApp",
    entry: "//localhost:8081",
    container: "#container",
    activeRule: "/app-vue",
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
