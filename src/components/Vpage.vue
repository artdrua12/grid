<template>
  <div class="vpage grid">
    <div class="title grid">
      <h1>t</h1>
      <h1>t</h1>
      <slot v-if="showTitle" name="titleTop">
        <h1>t</h1>
      </slot>
      <slot v-if="showTitle" name="titleCenter"></slot>
      <slot v-if="showTitle" name="titlebottom"></slot>
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
  align-self: flex-end;
  justify-self: end;
}
</style>