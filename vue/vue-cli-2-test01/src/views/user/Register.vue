<template>
  <el-container>
    <el-header>
      <h1>注册界面</h1>
    </el-header>
    <el-main>
      <el-form ref="form" :model="registerForm" label-width="80px" class="demo-registerForm">
        <el-form-item label="用户名">
          <el-input v-model="registerForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="registerForm.passwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="registerForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="registerForm.birthday" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="registerForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">注册</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      registerForm: {
        username: '',
        passwd: '',
        sex: '',
        birthday: '',
        phone: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      this.$store.dispatch("Register", this.registerForm).then(result => {
        this.$router.push({path: this.redirect || '/'}).catch(() => {
        });
      }).catch(error => {
        console.log("注册失败");
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>
.demo-registerForm {
  width: 33%;
  margin-left: 25%;
}
</style>
