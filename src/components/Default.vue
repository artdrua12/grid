<template>
  <div class="globalDefaultWrapper grid">
    <side-menu class="sidebar" />
    <div class="router" :class="{'slide': !isCollapse}">
      <button @click="isCollapse=!isCollapse">Show2</button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideMenu from "./SideMenu";
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  components: {
    SideMenu
  }
};
</script>

<style scoped >
.globalDefaultWrapper {
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
}
.sidebar {
  position: sticky;
  top: 0px;
}
.router {
  width: 100%;
  transition: 0.3s all ease-in-out;
}
.slide {
  transform: translateX(-255px);
  width: calc(100% + 255px);
}

</style>