<template>
  <el-container>
    <el-header>
      <h1>登陆界面</h1>
    </el-header>
    <el-main>
      <el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="checkUserName">
          <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="loginForm.passwd" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>

export default {
  name: "Login",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        // if (this.loginForm.password !== '') {
        //   this.$refs.ruleForm.validateField('checkPass');
        // }
        callback();
      }
    };
    const validateCheckUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };

    return {
      loginForm: {
        username: '',
        passwd: ''
      },
      rules: {
        checkPass: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkUserName: [
          {validator: validateCheckUserName, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!');
          this.$store.dispatch("Login", this.loginForm).then(() => {
            this.$router.push({path: this.redirect || '/'}).catch(() => {
            });
          }).catch(error => {
            console.log("登陆失败");
            console.log(error);
          })
        } else {
          console.log('error validate!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
.demo-ruleForm {
  width: 33%;
  margin-left: 25%;
}

</style>
