<template>
  <div>
    <h1>用户列表</h1>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">

      <el-table-column
        label="编号"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px"> {{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="生日" prop="birthday"></el-table-column>
      <el-table-column label="性别" prop="sex"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>

      <el-table-column align="right" label="">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="根据姓名检索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-button style="margin-top: 0px" type="success" size="mini">添加</el-button>

    <transition name="el-zoom-in-center">
      <div v-show="show" class="transition-box">.el-zoom-in-center</div>
    </transition>

  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      tableData: [],
      search: '',
      show: true
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },

  created() {
    this.$http.get("http://localhost:8989/userManager/findAll").then(res => {
      this.tableData = res.data;
    });
  }
}
</script>

<style scoped>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
