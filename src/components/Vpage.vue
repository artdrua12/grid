<template>
  <div class="page" :style="{'height': this.vpageheight}">

    <div class="page__bar" :class="{'slide': !showTitle}">
      <slot v-if="showTitle" name="page__top"></slot>
      <slot v-if="showTitle" name="page__middle"></slot>
      <slot v-if="showTitle" name="page__bottom"></slot>
      <button @click="showTitle=!showTitle" class="button">Show Title</button>
    </div>

    <slot></slot>

    <slot name="page-footer"></slot>
  </div>
</template>

<script>

export default {
  props: {
    vpageheight: {
      default: "100%"
    }
  },
  data() {
    return {
      showTitle: true
    };
  }
};
</script>

<style scoped>
div.page {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
}
.page__bar {
  background-color: rgba(235, 241, 234, 0.7);
  display: grid;
  grid-gap: 5px;
  position: sticky;
  top: 0px;
  z-index: 2;
  transition: all 0.3s;
  padding: 10px;
}
.button {
  position: absolute;
  right: 0px;
  bottom: -25px;
}
.slide {
  transform: translateY(-100%);
}
</style>