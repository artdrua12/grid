<template>
  <div class="page__middle">
    <h1>{{this.title}}</h1>
    <div class="page__pagination">Показано X из {{this.count}}</div>
    <div class="page-control">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    count: {
      require: true
    }
  }
};
</script>

<style scoped>
.page__middle {
  display: flex;
  align-items: center;
}
.page__pagination {
  margin-left: auto;
  margin-right: 10px;
}
.page-control{
  display: flex;
}
.page-control__group{
  display: flex;
  padding: 15px;
  border-left: 2px solid #dadec0;
}
button{
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  padding: 10px;
  background-color: rgba(235, 241, 234, 0.7);
}
</style>