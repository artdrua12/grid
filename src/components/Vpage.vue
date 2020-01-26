<template>
  <div class="vpage grid">
    <div class="title grid">
      <slot v-if="showTitle" name="titleTop"></slot>
      <slot v-if="showTitle" name="titleCenter"></slot>
      <slot v-if="showTitle" name="titleBottom"></slot>
      <button @click="showTitle=!showTitle" class="button">Show Title</button>
    </div>
    <div class="contents" grid>
      <slot name="content"></slot>
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
  grid-template-rows: min-content 1fr;
}
.title {
  background-color: rosybrown;
  position: sticky;
  top: 0px;
}
.contents {
  background-color: navajowhite;
}

.button {
  width: 200px;
  align-self: flex-end;
  justify-self: end;
}
</style>