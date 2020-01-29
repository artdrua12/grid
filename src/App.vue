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
::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-track{
  background-color: antiquewhite;
}
::-webkit-scrollbar-thumb{
  background: linear-gradient(to top, rgb(184, 187, 182), rgb(58, 54, 54));
  border-radius: 10px
}
.flex {
  display: flex;
}
.grid {
  display: grid;
}
</style>
