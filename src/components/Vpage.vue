<template>
  <div class="vpage grid">
    <div class="title grid">
      <template v-if="showTitle">
        <h1 v-for="i in 3" :key="i">{{i}}title</h1>
        <v-slot></v-slot>
      </template>
      <button @click="showTitle=!showTitle">Show Title</button>
    </div>

    <div class="content grid">
      <h1 v-for="i in 1" :key="i">{{i}}contents</h1>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      showTitle: true
    };
  }
};
</script>

<style scoped>
.vpage {
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
}
.title {
  background-color: rosybrown;
  position: sticky;
  top: 0px;
}
.content {
  background-color: navajowhite;
}

button {
  width: 200px;
  grid-area: 0/1/-1/2
}
</style>