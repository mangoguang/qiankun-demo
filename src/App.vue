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
        <!-- 左侧导航栏 -->
        <LeftMenu />
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
          <TopMenu />
        </a-layout-header>

        <!-- 页签 -->
        <a-tabs
          class="page-tab"
          v-model="activeKey"
          :tabBarStyle="tabBarStyle"
          hide-add
          type="editable-card"
          @edit="onEdit"
        >
          <a-tab-pane v-for="pane in panes" :key="pane.key">
            <span slot="tab">
              <a-icon
                type="reload"
                @click="tabRefresh"
                v-show="pane.key === activeKey"
              />
              {{ pane.title }}
            </span>
            <!-- 面包屑导航 -->
            <!-- <a-breadcrumb class="breadcrumb">
              <a-breadcrumb-item>Home</a-breadcrumb-item>
              <a-breadcrumb-item>List</a-breadcrumb-item>
              <a-breadcrumb-item>App</a-breadcrumb-item>
            </a-breadcrumb> -->

            <!-- 主内容 -->
            <a-layout-content class="main-container">
              <router-view id="web-view" />
              <!-- <ul>
              <li v-for="item in 60" :key="item">{{ item }}</li>
            </ul> -->
            </a-layout-content>
          </a-tab-pane>
        </a-tabs>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
import TopMenu from "@/components/common/topMenu"
import LeftMenu from "@/components/common/leftMenu"

export default {
  name: "Home",
  components: {
    TopMenu,
    LeftMenu
    // HelloWorld,
  },
  data() {
    const panes = [
      { title: "Tab 1", content: "Content of Tab 1", key: "1" },
      { title: "Tab 2", content: "Content of Tab 2", key: "2" },
    ];
    return {
      panes,
      collapsed: false,
      activeKey: panes[0].key,
      tabBarStyle: {
        marginBottom: 0,
        marginLeft: "16px",
        borderBottom: "none",
      },
    };
  },
  created() {
    this.getPermission();
  },
  methods: {
    onEdit(targetKey, action) {
      this[action](targetKey);
    },
    tabRefresh() {
      console.log("刷新tab页签");
    },
    toAboutPage() {
      this.$router.push("/system")
    },
    toSystemAboutPage() {
      this.$router.push("/system/about");
    },
    toHomePage() {
      this.$router.push("/");
    },
    getPermission() {
      axios
        .get("/mock/user/permission")
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
// .page-tab .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
//   border: none !important;
// }
.page-box {
  margin: 0 16px 16px 16px;
  background: #fff;
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
