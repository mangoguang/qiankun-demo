<template>
  <div class="page-box home-page">
    <h1>首页</h1>
    <ul>
      <li v-for="item in 60" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

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
};
</script>

<style scoped lang="scss">
.home-page {
  margin: 16px;
  background: #fff;
}
</style>
