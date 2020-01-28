<template>
  <div class="page__middle">
    <div class="page__title">
      <slot name="page-title"></slot>
    </div>

    <div class="page__tools">
      <slot name="page-tools"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page__middle {
  display: flex;
}
.page__title {
    margin-right: auto
}
.page__tools{
    display: flex;
}
.page__tools div{
  border: 2px dotted rgb(52, 13, 221);
  padding: 12px;
  margin-right: 7px;
}
</style>