<template>
  <div id="app">
    <default />
  </div>
</template>

<script>
import Default from "./components/Default.vue";

export default {
  name: "app",
  components: {
    Default
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0px;
}
.flex {
  display: flex;
}
.grid {
  display: grid;
}
</style>
