<template>
  <div>
    <h3>{{msg}}</h3>
    <form action="">
      用户名：<input type="text" v-model="user.name"><br>
      用户角色：<input type="text" v-model="user.role"><br>
      用户权限：<input type="text" v-model="user.perms"><br>
      描述：<input type="text" v-model="user.des"><br>
      <input type="button" value="保存用户" style="margin-top: 10px" @click="saveUser">
      <input type="button" value="取消" style="margin-top: 10px" @click="changeRouter">
    </form>
    <br>

  </div>
</template>

<script>
export default {
  name: "UserAdd",
  data() {
    return {
      msg: "userAdd",
      user: {}
    }
  },
  methods: {
    changeRouter() {
      this.$router.push({name:"UserManager"});
    },
    saveUser() {
      this.$http.post("http://localhost:8081/user/save", this.user).then(res=>{

      }).catch(err=>{
        alert(err);
      })
    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>
