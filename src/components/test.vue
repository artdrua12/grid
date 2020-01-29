<template>
  <div class="app">
    <SideMenu class="sidebar" />
    <div class="slide" :class="{'show':!show}">
      <button @click="show=!show">click</button>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import SideMenu from "./SideMenu";
export default {
  data() {
    return {
      show: true
    };
  },
  components: {
    SideMenu
  }
};
</script>

<style scoped>
div.app {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: min-content 1fr;
}
.sidebar {
  grid-area: 1/1/3/3;
  background: rgba(221, 39, 39, 0.5);
  z-index: 1;
}

.slide {
  grid-area: 1/1/2/2;
  width: 50px;
  z-index: 2;
  transition: width 0.5s ease-in-out;
}

.content {
  grid-area: 1/2/3/3;
  background: rgba(224, 184, 5, 0.9);
  z-index: 2;
}
.show {
  width: 300px;
}
</style>