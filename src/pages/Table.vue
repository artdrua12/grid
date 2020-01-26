<template>
  <vpage>
     <template v-slot:titleCenter>
      <div class="titleCenter flex">
         <div v-for="i in 3" :key="i" class="block">center {{1}}</div>
      </div>
    </template>
    <template v-slot:titleBottom>
      <div class="titleBottom flex">
        <div v-for="i in 6" :key="i" class="block">botoom {{1}}</div>
      </div>
    </template>
    <template v-slot:content>
      <h1 v-for="i in 30" :key="i">{{i}}contentNotScroll</h1>
    </template>
  </vpage>
</template>

<script>
import Vpage from "../components/VpageNotSticky";
export default {
  data() {
    return {};
  },
  components: {
    Vpage
  }
};
</script>

<style scoped>
.titleCenter div:nth-child(1) {
  margin-right: auto;
}
.block {
  border: 1px solid;
  height: 70px;
  padding: 3px 20px
}
</style>