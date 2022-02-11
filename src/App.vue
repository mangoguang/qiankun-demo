<template>
  <div id="app">
    <a-layout id="components-layout-demo-custom-trigger">
      <!-- 左侧边栏 -->
      <a-layout-sider
        class="left-sider"
        v-model="collapsed"
        :trigger="null"
        collapsible
      >
        <div class="logo-box">
          <span class="logo-left"></span><span class="logo-right"></span>
        </div>
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
          <a-sub-menu key="sub1">
            <div slot="title">
              <a-icon type="user" />
              <span>subnav 1</span>
            </div>
            <a-menu-item key="1"> option1 </a-menu-item>
            <a-menu-item key="2"> option2 </a-menu-item>
            <a-menu-item key="3"> option3 </a-menu-item>
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
          <!-- <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item> -->
        </a-menu>

        <!-- <a-menu
        mode="inline"
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        :style="{ height: '100%', borderRight: 0 }"
      >
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" />subnav 1</span>
          <a-menu-item key="1"> option1 </a-menu-item>
          <a-menu-item key="2"> option2 </a-menu-item>
          <a-menu-item key="3"> option3 </a-menu-item>
          <a-menu-item key="4"> option4 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="laptop" />subnav 2</span>
          <a-menu-item key="5"> option5 </a-menu-item>
          <a-menu-item key="6"> option6 </a-menu-item>
          <a-menu-item key="7"> option7 </a-menu-item>
          <a-menu-item key="8"> option8 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="notification" />subnav 3</span>
          <a-menu-item key="9"> option9 </a-menu-item>
          <a-menu-item key="10"> option10 </a-menu-item>
          <a-menu-item key="11"> option11 </a-menu-item>
          <a-menu-item key="12"> option12 </a-menu-item>
        </a-sub-menu>
      </a-menu> -->
      </a-layout-sider>

      <!-- 右侧 -->
      <a-layout
        class="right-sider"
        :style="{ marginLeft: collapsed ? '80px' : '200px' }"
      >
        <!-- 顶部导航 -->
        <a-layout-header class="header-nav">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <a-menu
            theme="dark"
            mode="horizontal"
            :default-selected-keys="['2']"
            :style="{ lineHeight: '64px' }"
          >
            <a-menu-item key="1"> nav 1 </a-menu-item>
            <a-menu-item key="2"> nav 2 </a-menu-item>
            <a-menu-item key="3"> nav 3 </a-menu-item>
          </a-menu>
        </a-layout-header>

        <a-breadcrumb class="breadcrumb">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <!-- 主内容 -->
        <a-layout-content class="main-container">
          <router-view id="web-view" />
          <!-- <ul>
          <li v-for="item in 60" :key="item">{{ item }}</li>
        </ul> -->
        </a-layout-content>
      </a-layout>
    </a-layout>
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

<style lang="scss">
.left-sider {
  position: fixed !important;
  left: 0;
  height: 100vh;
}
.main-container {
  // height: calc(100vh - 101px);
  // margin: 16px;
  // padding: 16px;
  // overflow: hidden;
  ul {
    margin: 0 16px 16px 16px;
    // background: #fff;
  }
}
.page-box {
  // height: calc(100% - 32px);
  // overflow-y: scroll;
}

i.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 16px;
  cursor: pointer;
  transition: color 0.3s;
  color: #fff;
}

.trigger:hover {
  color: #1890ff;
}

.logo-box {
  display: flex;
  flex-direction: row;
  height: 64px;
  span {
    display: block;
  }
  .logo-left {
    width: 32px;
    height: 32px;
    background: url(./assets/logo.jpeg) no-repeat;
    background-position: center;
    background-size: 100% 100%;
    margin: 16px 24px;
  }
  .logo-right {
    flex: 1;
    margin: 16px 0;
    background: url(./assets/logo.jpeg) no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
}

.header-nav {
  display: flex;
  flex-direction: row;
  padding: 0;
}
// 面包屑导航
div.breadcrumb {
  padding: 8px 16px 8px 24px;
  background: #fff;
}
</style>
