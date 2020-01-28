<template>
  <div class="page__top">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.page__top{
    display: flex;
}
.page__top div{
    display: flex;
    border: 2px solid #dadec0;
    padding: 12px;
    margin-right: 10px;
}
</style>