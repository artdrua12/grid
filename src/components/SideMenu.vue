<template>
  <div class="sidemenu grid">
    <button @click="isCollapse=!isCollapse">Show</button>

    <el-aside width="auto" >
      <el-menu
        class="el-menu-vertical-demo"
         default-active="1"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
      >
        <el-menu-item index="10">
          <i class="el-icon-menu"></i>
          <span slot="title">Investigtions</span>
        </el-menu-item>

        <el-divider></el-divider>

        <el-submenu v-for="(item,index) in dataMenu" :key="index" :index="`${index}`">
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
        <el-menu-item index="20">
          <i class="el-icon-menu"></i>
          <span slot="title">Text</span>
        </el-menu-item>

        <el-menu-item index="30">
          <i class="el-icon-menu"></i>
          <span slot="title">Text</span>
        </el-menu-item>
        <el-menu-item index="40">
          <i class="el-icon-menu"></i>
          <span slot="title">Text</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
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
  grid-template-rows: 20px 1fr;
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