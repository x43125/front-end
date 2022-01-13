<template>
  <el-container>
    <el-header>{{ msg }}</el-header>
    <el-container>
      <el-aside>
        <!--      <el-table-->
        <!--        :data="tableData"-->
        <!--        style="width: 100%"-->
        <!--        :row-class-name="tableRowClassName">-->
        <!--        <el-table-column-->
        <!--          prop="blogName"-->
        <!--          label="博客"-->
        <!--          width="180"-->
        <!--        @click="readBlog">-->

        <!--        </el-table-column>-->
        <!--      </el-table>-->
        <div>
          <p v-for="(item,i) in tableData" @click="readBlog(item.blogName)" >
            <a href="javascript:;">  {{ item.blogName }}</a>
          </p>
        </div>
      </el-aside>
      <el-main>
        <div>
          <p>{{ this.blogDto.blogName }}</p>
          <p>{{ blogContent }}</p>
        </div>
        <!--      <router-view/>-->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      msg: '博客页',
      keywordDto: {
        current: '1',
        size: '10',
        total: ''
      },
      blogDto: {
        id: '',
        blogName: '',
        blogContent: ''
      },
      tableData: [],
      blogContent: ''
    }
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex % 2 === 0) {
        return 'warning-row';
      } else if (rowIndex % 2 === 1) {
        return 'success-row';
      }
      return '';
    },
    readBlog(blogName) {
      this.blogDto.blogName = blogName;
      this.blogContent = '';
      this.$store.dispatch("ReadBlog", blogName).then(result => {
        console.log(result.data);
        this.blogContent = result.data;
      }).catch(error => {
        console.log(error);
      })
    }
  },
  created() {
    this.$store.dispatch("BlogList", this.keywordDto).then(result => {
      this.tableData = result.data.list;
    }).catch(error => {
      console.log(error);
    })
  }
}
</script>

<style scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>




















