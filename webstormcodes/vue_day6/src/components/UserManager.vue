<template>
  <div>
    <h3>{{msg}}</h3>
    <table border="1" width="100%">
      <tr>
        <th>编号</th>
        <th>用户名</th>
        <th>用户角色</th>
        <th>用户权限</th>
        <th>手机号</th>
        <th>邮件</th>
        <th>创建时间</th>
        <th>操作</th>
      </tr>
<!--      <tr v-for="(user,index) in users" :key="user.id">-->
<!--        <td v-model="user.id"></td>-->
<!--        <td v-model="user.username"></td>-->
<!--        <td v-model="user.role"></td>-->
<!--        <td v-model="user.perms"></td>-->
<!--        <td v-model="user.phone"></td>-->
<!--        <td v-model="user.email"></td>-->
<!--        <td v-model="user.create_time"></td>-->
<!--        <td><a href="" @click="deleteUser">删除</a> <a href="" @click="updateUser">更改</a></td>-->
      <tr v-for="(user,index) in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.username}}</td>
        <td>{{user.role}}</td>
        <td>{{user.perms}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.email}}</td>
        <td>{{user.createTime}}</td>
        <td><a href="" @click="deleteUser">删除</a> <a href="" @click="updateUser">更改</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "UserManager",
  data() {
    return{
      msg: "用户管理",
      users: [],
      user:{}
    }
  },
  methods: {
    deleteUser(userId) {
    },
    updateUser(user) {
    }
  },
  created() {
    this.$http.get("http://localhost:8081/user/getAllUsers").then(res => {
      console.log(res);
      this.users = res.data.data;
    }).catch(err=>{
      alert(err);
    })
  }
}
</script>

<style scoped>

</style>
