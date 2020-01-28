<template>
  <div class="page__bottom">
    <slot></slot>
    <button class="right">{{nameA}}</button>
    <button>{{nameB}}</button>
  </div>
</template>

<script>
export default {
  props: {
    nameA: {
      type: String,
      default: "defaultA"
    },
    nameB: {
      type: String,
      default: "defaultB"
    }
  }
};
</script>

<style scoped>
.page__bottom {
  display: flex;
  align-items: center;
}
button {
  height: 20px;
  margin-right: 5px;
}
.right{
  margin-left: auto;
}
h3{
  padding: 20px;
  border: 1px dashed red;
}
</style>