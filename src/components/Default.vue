<template>
  <div class="globalDefaultWrapper grid">
    <side-menu class="sidebar" />
    <vpage class="contentvpage" />
  </div>
</template>

<script>
import Vpage from "./Vpage";
import SideMenu from "./SideMenu";
export default {
  data() {
    return {};
  },
  components: {
    Vpage,
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