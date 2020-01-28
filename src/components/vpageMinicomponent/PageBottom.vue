<template>
  <div class="page__bottom">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page__bottom {
  display: flex;
}
button {
  margin-right: 5px;
  padding: 5px 20px;
}
</style>