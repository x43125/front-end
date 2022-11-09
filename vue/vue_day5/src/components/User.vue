<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <router-link to="/user/add" style="float: left;">添加</router-link>
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
          <td>
            <a href="" @click.prevent="deleteUser(user.id)">删除</a>
            <a href="" @click.prevent="updateUser(user)">修改</a>
          </td>
        </tr>
      </table>
    </div>
    <hr>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      msg: "用户管理",
      users: [],
      user: {},
    }
  },
  methods: {
    deleteUser(userId) {
      if (confirm("请确认是否删除")) {
        this.$http.get("http://localhost:8081/user/delete/" + userId).then(res => {
          alert("删除成功");
          this.findAll();
        }).catch(err => {
          alert("删除失败");
        })
      }
    },
    updateUser(user) {
      this.$http.post("http://localhost:8081/user/saveOrUpdate", user).then(res=>{
        alert("更改成功");
      }).catch(err=>{
        alert("更改失败");
      })
    },
    findAll() {
      this.$http.get("http://localhost:8081/user/getAll").then(res=>{
        this.users = res.data;
      });
    }
  },
  created() {
    this.findAll();
  },
  // 路由更新时触发
  beforeRouteUpdate(to, from, next) {
    this.findAll();
    next();
  }
}
</script>

<style scoped>
  th {
    background-color: bisque;
  }
</style>
