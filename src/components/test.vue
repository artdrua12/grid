<template>
  <div class="table top">
      <div v-for="i in 1" :key="i" class="">first {{1}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  }
};
</script>

<style scoped>
.title{
    width: 100%;
    height: 100%;
    grid-auto-columns: 1fr;
    grid-auto-rows: auto;
    
}
.block{
    background-color: aquamarine;
}

.row1{
    grid-row: 1;
}
.row2{
    grid-row: 2;
}
</style>