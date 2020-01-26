<template>
  <div class="vpage grid">
    <div class="title grid">
      <slot v-if="showTitle" name="titleTop"></slot>
      <slot v-if="showTitle" name="titleCenter"></slot>
      <slot v-if="showTitle" name="titleBottom"></slot>
      <button class="button" @click="showTitle=!showTitle">Show Title</button>
    </div>

    <div class="content" grid>
      <slot name="contentScroll"></slot>
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
  height: 100vh;
  grid-template-rows: min-content 1fr;
}
.title {
  background-color: rosybrown;
}
.content {
  background-color: navajowhite;
  height: 100%;
  overflow-y: auto;
}

.button {
  width: 200px;
  align-self: flex-end;
  justify-self: end;
}
</style>