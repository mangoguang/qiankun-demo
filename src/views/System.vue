<template>
  <div>
    <div id="container" class="system">系统页面</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import axios from "axios";
import { registerMicroApps } from "qiankun";

export default {
  name: "System",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  mounted() {
    console.log("systemPage", document.getElementById("container"));
    registerMicroApps([
      {
        name: "systemApp",
        entry: "//localhost:8081",
        container: "#container",
        activeRule: "/system",
      },
    ]);
    // 启动 qiankun
    // start();
    // axios
    //   .get("/mock/user/permission")
    //   .then(function (response) {
    //     console.log("response", response);
    //   })
    //   .catch(function (error) {
    //     console.log("error", error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
  },
};
</script>
