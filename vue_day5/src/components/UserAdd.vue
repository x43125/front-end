<template>
  <div>
    <form action="">
      姓名：<input type="text" v-model="user.name"><br>
      年龄：<input type="text" v-model="user.age"><br>
      薪酬：<input type="text" v-model="user.salary"><br>
      描述：<input type="text" v-model="user.des"><br>
      <input type="button" value="保存用户" style="margin-top: 10px" @click="saveUser">
      <input type="button" value="取消" style="margin-top: 10px" @click="changeRouter">
    </form>
  </div>
</template>

<script>
export default {
  name: "UserAdd",
  data() {
    return {
      user: {},
    }
  },
  methods: {
    changeRouter() {
      this.$router.push({name:"User"});
    },
    saveUser() {
      this.$http.post("http://localhost:8081/user/saveOrUpdate", this.user).then(res=>{
        alert("添加成功");
        this.$router.push({name:"User"});
      })
    }
  }
}
</script>

<style scoped>

</style>
