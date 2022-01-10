<template>
  <el-container>
    <el-header>{{ msg }}</el-header>
    <el-aside>
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="blogName"
          label="博客"
          width="180">
        </el-table-column>
      </el-table>
    </el-aside>
    <el-main>主内容</el-main>
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
      tableData: [],
    }
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
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




















