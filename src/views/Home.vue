<template>
  <div class="page-box home-page">
    <h1>首页</h1>
    <div id="microApp"></div>
    <!-- <ul>
      <li v-for="item in 60" :key="item">{{ item }}</li>
    </ul> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  mounted() {
    console.log("homePage");
    axios
      .get("/mock/user/userInfo")
      .then(function (response) {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log("error", error);
      })
      .then(function () {
        // always executed
      });
  },
};
</script>

<style scoped lang="scss">
.home-page {
}
</style>
