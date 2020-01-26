<template>
  <div class="globalDefaultWrapper grid">
    <side-menu class="sidebar" />

    <router-view></router-view>
  </div>
</template>

<script>
import SideMenu from "./SideMenu";
export default {
  data() {
    return {};
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
</style>