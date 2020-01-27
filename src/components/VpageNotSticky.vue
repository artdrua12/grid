<template>
  <div class="vpage grid">
    <div class="title grid" :class="{'slide': !showTitle}">
      <slot v-if="showTitle" name="titleTop"></slot>
      <slot v-if="showTitle" name="titleCenter"></slot>
      <slot v-if="showTitle" name="titleBottom"></slot>
      <button class="button" @click="showTitle=!showTitle">Show Title</button>
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
  height: 100vh;
  grid-template-rows: min-content 1fr;
}
.title {
  background-color: rosybrown;
  grid-gap: 5px;
  position: sticky;
  top: 0px;
  z-index: 2;
  transition: all 0.5s;
}
.contents {
  background-color: navajowhite;
  height: 100%;
  overflow-y: auto;
}

.button {
  position: absolute;
  right: 0px;
  bottom: -25px;
}
.slide {
  transition: all 0.5s;
  transform: translateY(-100%);
  height: 0px;
}
</style>