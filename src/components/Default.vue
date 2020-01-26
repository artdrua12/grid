<template>
  <div class="globalDefaultWrapper grid">
    <side-menu class="sidebar" />
    <!-- <vpage class="contentvpage">
      <template v-slot:titleTop><h2>Top</h2></template>
      <template v-slot:titleCenter><h1>Center</h1><span>Top2</span></template>
      <template v-slot:titleBottom> <h1>Bottom</h1></template>
      <template v-slot:contentNotScroll>
        <h1 v-for="i in 30" :key="i">{{i}}contentNotScroll </h1>
      </template>
    </vpage> -->
    <vpage class="contentvpage">  
      <template v-slot:titleTop><h2>Top</h2></template>
      <template v-slot:titleCenter><h1>Center</h1><span>Top2</span></template>
      <template v-slot:titleBottom> <h1>Bottom</h1></template>
      <template v-slot:contentNotScroll>
        <h1 v-for="i in 30" :key="i">{{i}}contentNotScroll </h1>
      </template>
      </vpage>
  </div>
</template>

<script>
import Vpage from "./Vpage";
// import VpageNotScroll from "./VpageNotScroll"
import SideMenu from "./SideMenu";
export default {
  data() {
    return {};
  },
  components: {
    Vpage,
    // vpagenotscrol:VpageNotScroll,
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