<template>
  <div class="sidemenu grid">
    <button @click="isCollapse=!isCollapse">Show</button>

    <el-aside width="auto">
      <el-menu
        class="el-menu-vertical-demo"
        default-active="1"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">Investigtions</span>
        </el-menu-item>

        <el-divider></el-divider>

        
        <el-submenu v-for="(item,index) in dataMenu" :key="index" :index="`${index}`" scroll>
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </template>
          <el-menu-item
            v-for="(item2, index2) in item.items"
            :key="index2"
            :index="`${index}-${index2}`"
          >{{item2}}</el-menu-item>
        </el-submenu>

        <el-divider></el-divider>

        <router-link tag="el-menu-item" index="2" to="/">
          <i class="el-icon-menu"></i>
          <span>Home</span>
        </router-link>

        <router-link tag="el-menu-item" index="3" to="/table">
          <i class="el-icon-menu"></i>
          <span>Table</span>
        </router-link>

        <router-link tag="el-menu-item" index="4" to="/test">
          <i class="el-icon-menu"></i>
          <span>Test</span>
        </router-link>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      dataMenu: [
        {
          icon: "el-icon-location",
          title: "Navigator One",
          items: ["one", "two", "three"]
        },
        { icon: "el-icon-menu", title: "Navigator Two", items: ["one", "two"] },
        {
          icon: "el-icon-document",
          title: "Navigator Three",
          items: ["one", "two", "three"]
        },
        {
          icon: "el-icon-setting",
          title: "Navigator Four",
          items: ["one", "two", "three", "four", "five"]
        },
        {
          icon: "el-icon-location",
          title: "Navigator Five",
          items: ["one", "two", "three"]
        }
      ]
    };
  }
};
</script>

<style scoped>
.sidemenu {
  height: 100vh;
  grid-template-rows: min-content 1fr;
  /* background-color: #545c64; */
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 300px;
}
.el-menu-vertical-demo {
  min-height: 100%;
}
.el-menu {
  overflow-y: auto;
}
ul {
  display: flex;
  flex-direction: column;
}
.el-divider {
  margin: 0px;
}
.el-divider:nth-of-type(2) {
  margin-top: auto;
}
</style>