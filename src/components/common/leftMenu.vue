<template>
  <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
    <a-sub-menu key="sub1">
      <div slot="title">
        <a-icon type="user" />
        <span>subnav 1</span>
      </div>
      <a-menu-item @click="toAboutPage" key="1"> option1 </a-menu-item>
      <a-menu-item @click="toHomePage" key="2"> option2 </a-menu-item>
      <a-menu-item @click="toSystemAboutPage" key="3">
        option3
      </a-menu-item>
      <a-menu-item key="4"> option4 </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <div slot="title">
        <a-icon type="video-camera" />
        <span>subnav 2</span>
      </div>
      <a-menu-item key="5"> option5 </a-menu-item>
      <a-menu-item key="6"> option6 </a-menu-item>
      <a-menu-item key="7"> option7 </a-menu-item>
      <a-menu-item key="8"> option8 </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub3">
      <div slot="title">
        <a-icon type="upload" />
        <span>subnav 3</span>
      </div>
      <a-menu-item key="9"> option9 </a-menu-item>
      <a-menu-item key="10"> option10 </a-menu-item>
      <a-menu-item key="11"> option11 </a-menu-item>
      <a-menu-item key="12"> option12 </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">

</style>
