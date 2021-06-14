<template>
  <div>
    <h1>{{msg}}</h1>
    <div>
      <table border="1" width="100%">
        <tr>
          <th>编号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>工资</th>
          <th>描述</th>
          <th>操作</th>
        </tr>
        <tr v-for="(user,index) in users" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.salary }}</td>
          <td>{{ user.des }}</td>
          <td><a href="">删除</a><a href="">修改</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return{
      msg: "学生管理",
      users: [],
      user: {},
    }
  },
  methods: {},
  computed: {},
  created() {

  }
}
</script>

<style scoped>
  th {
    background-color: azure;
  }
</style>
