<template>
  <vpage vpageheight="100vh">

    <template v-slot:page__middle>
      <PageMiddle title="Заголовок от Table" count="10" v-slot:default>
        <div class="page-control__group" v-for="i in 3" :key="i">
          <button>
            <img
              width="30px"
              src="https://www.pinclipart.com/picdir/big/11-114024_videos-to-business-personal-information-icon-png-clipart.png"
            />
            <span>text</span>
          </button>
          <button>
            <img
              width="30px"
              src="https://www.pinclipart.com/picdir/big/11-114024_videos-to-business-personal-information-icon-png-clipart.png"
            />
            <span>text</span>
          </button>
        </div>
      </PageMiddle>
    </template>

    <template v-slot:page__bottom>
      <PageBottom v-slot:default>
        <button v-for="i in 4" :key="i">Click{{i}}</button>
      </PageBottom>
    </template>


      <el-table :data="tableData" border style="width: 100%" height="100%">
        <el-table-column prop="date" label="Date" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
      </el-table>

    <template v-slot:page-footer>
      <PageFooter slot:default>
        <button v-for="i in 2" :key="i"> Click{{i}}</button>
      </PageFooter>
    </template>
  </vpage>
</template>

<script>
import Vpage from "../components/Vpage";
import PageMiddle from "../components/vpageMinicomponent/PageMiddle";
import PageBottom from "../components/vpageMinicomponent/PageBottom";
import PageFooter from "../components/vpageMinicomponent/PageFooter";
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
    PageMiddle,
    PageBottom,
    PageFooter
  }
};
</script>

<style scoped></style>