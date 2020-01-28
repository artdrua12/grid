<template>
  <div class="page__footer">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page__footer {
  display: flex;
  justify-content: center;
  background-color: beige;
  padding: 15px;
}
button{
  width: 100px;
  height: 40px;
  margin-right: 5px;
}
</style>