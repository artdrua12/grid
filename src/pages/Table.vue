<template>
  <vpage vpageheight="100vh">
    <template v-slot:titleTop>
      <div class="titleTop flex">
        <div class="block">Table</div>
        <div class="block">Table two title</div>
      </div>
    </template>
    <template v-slot:titleCenter>
      <div class="titleCenter flex">
        <div v-for="i in 3" :key="i" class="block">center {{i}}</div>
      </div>
    </template>
    <template v-slot:titleBottom>
      <div class="titleBottom flex">
        <div v-for="i in 6" :key="i" class="block">botoom {{i}}</div>
      </div>
    </template>
    <template v-slot:content>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="Date" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
      </el-table>
    </template>
  </vpage>
</template>

<script>
import Vpage from "../components/Vpage";
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
  padding: 3px 20px;
}
</style>