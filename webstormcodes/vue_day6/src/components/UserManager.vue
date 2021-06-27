<template>
  <div>
    <div id="usertable">
      <h3>{{msg}}</h3>
      <router-link to="/userManager/userAdd" style="float: left">添加</router-link>
      <table border="1" width="100%">
        <tr>
          <th>编号</th>
          <th>用户名</th>
          <th>用户角色</th>
          <th>用户权限</th>
          <th>权限url</th>
          <th>手机号</th>
          <th>邮件</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
        <tr v-for="(user,index) in users" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.username}}</td>
          <td>{{user.roleList}}</td>
          <td>{{user.permList}}</td>
          <td>{{user.permUrlList}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.email}}</td>
          <td>{{user.createTime}}</td>
          <td>
            <a href="" @click.prevent="deleteUser(user.id)">删除</a>
            <a href="" @click.prevent="updateUser">更改</a>
          </td>
        </tr>
      </table>
    </div>
    <hr>
    <div>
      <router-view/>
    </div>
  </div>


</template>

<script>
export default {
  name: "UserManager",
  data() {
    return{
      msg: "用户管理",
      users: [],
      user:{},
    }
  },
  methods: {
    deleteUser(userId) {
      console.log(userId);
      if (confirm("请确认要删除吗")) {
        this.$http.get("http://localhost:8081/userManager/deleteUser/" + userId).then(res => {
          console.log(res.data);
          if (res.data.code != 200) {
            alert("删除失败");
          } else {
            alert("删除成功");
            this.findAll();
          }
        }).catch(err => {
          alert(err);
        });

      }
    },
    updateUser(user) {
    },
    findAll() {
      this.$http.get("http://localhost:8081/userManager/getAll").then(res => {
        console.log(res);
        //todo 把list解析出来，用","分割
        this.users = res.data.data;
      }).catch(err=>{
        alert(err);
      });
    }
  },
  created() {
    this.findAll();
  }
}
</script>

<style scoped>
  th {
    background-color: bisque;
  }
  #usertable {
    position: relative;
    left: 10%;
    width: 80%;
    text-align: center;
  }

</style>
