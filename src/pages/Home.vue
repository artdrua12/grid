<template>
  <vpage>
    <template v-slot:page__top>
      <PageTop slot:default>
        <div v-for="i in 3" :key="i">center {{i}}</div>
      </PageTop>
    </template>

    <template v-slot:page__middle>
      <PageMiddle>
        <template v-slot:page-title>
          <h1> Заголовок </h1>
        </template>
        <template v-slot:page-tools>
          <div v-for="i in 3" :key="i">middle {{i}}</div>
        </template>
      </PageMiddle>
    </template>

    <template v-slot:page__bottom>
      <PageBottom slot:default>
        <button v-for="i in 3" :key="i"> Click{{i}}</button>
      </PageBottom>
    </template>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="Date" width="180"></el-table-column>
      <el-table-column prop="name" label="Name" width="180"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
    </el-table>
  </vpage>
</template>

<script>
import Vpage from "../components/Vpage";
import PageTop from "../components/vpageMinicomponent/PageTop";
import PageMiddle from "../components/vpageMinicomponent/PageMiddle";
import PageBottom from "../components/vpageMinicomponent/PageBottom";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ]
    };
  },
  components: {
    Vpage,
    PageTop,
    PageMiddle,
    PageBottom
  }
};
</script>

<style scoped>
</style>