<template>
  <div>
    <h1>{{msg}}</h1>
    <div v-bind:class="{main:true, active:isActive}" >
      <!--功能区-->
      <div class="switchWrapper flexCenter">
        <div class="btn flexCenter" @click="changeLR">
          <div class="text flexCenter">去登录</div>
          <div class="text flexCenter">去注册</div>
        </div>
      </div>

        <div class="outerBox">
          <div class="container flexCenter">
            <div class="signInBox">{{mainContent}}
              <form action="" name="register" v-show="!isActive">
                用户名: <input type="text" v-model="registerUser.username"> <br>
                手机号: <input type="text" v-model="registerUser.phone"> <br>
                邮箱: <input type="text" v-model="registerUser.email"> <br>
                密码: <input type="password" v-model="registerUser.password"> <br>
                验证码: <input type="text" v-model="registerUser.veryfycode"> <br>
                <input type="button" value="注册" @click="registfun">
              </form>
              <form action="" name="login" v-show="isActive">
                用户名: <input type="text" v-model="loginUser.username"><br>
                密码: <input type="password" v-model="loginUser.password"><br>
                验证码: <input type="text" v-model="loginUser.verifycode"><br>
                <input type="button" value="登录" @click="loginfun">
              </form>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "登录页",
      isActive: true,
      mainContent: "登录内容区",
      loginUser: {},
      registerUser: {},
    }
  },
  methods: {
    changeLR() {
      if (this.isActive) {
        setTimeout(()=>{
          this.mainContent = '注册内容区';
        }, 500);
      }else {
        setTimeout(()=>{
          this.mainContent = '登录内容区';
        }, 500);
      }
      this.isActive = !this.isActive;
    },
    loginfun() {
      console.log(this.loginUser);
      this.$http.post("http://localhost:8081/user/login", this.loginUser).then(res=>{
        console.log(res.data);
        if (res.data.code==200) {
          alert("登陆成功");
          this.$router.push("/");
        }else {
          alert(res.data.msg);
        }
      }).catch(err=>{
        alert(err);
      });
    },
    registfun() {
      console.log(this.registerUser);
      this.$http.post("http://localhost:8081/user/register", this.registerUser).then(res=>{
        console.log(res.data);
        if (res.data.code==200) {
          this.changeLR();
        } else {
          alert(res.data.msg);
        }
      }).catch(err=> {
        alert(err);
      })
    }
  }
}

</script>

<style scoped>
input {
  margin-top: 1px;
}
body {
  background-color: #ededed;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
.main {
  position: relative;
  width: 1000px;
  height: 550px;
  margin: auto;
  overflow: hidden;
}
.switchWrapper {
  position: absolute;
  z-index: 99;
  left: 0;
  overflow: hidden;
  width: 30%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  transition: transform 1s ease-in-out;
}
.switchWrapper::after {
  content: '';
  display: block;
  background-image: url("../assets/hellomorning.jpg");
  background-size: 1000px 550px;
  background-position: top left;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all 1s ease-in-out;
}
.btn {
  position: absolute;
  width: 90px;
  height: 36px;
  color: #fffffe;
  background-color: #ff8906;
  font-size: 15px;
  border-radius: 30px;
  cursor: pointer;
  flex-wrap: wrap;
  overflow: hidden;
}
.active .switchWrapper {
  transform: translateX(calc(1000px - 100%));
}
.text {
  width: 100%;
  height: 100%;
  transition: all 1s ease-in-out;
}
.active .text:first-child {
  margin-top: -100%;
}

.active .switchWrapper::after {
  background-position: top right;
}
.outerBox {
  position: absolute;
  z-index: 9;
  left: 30%;
  overflow: hidden;
  width: 70%;
  height: 100%;
  transition: all 1s ease-in-out;
}
.container {
  width: 100%;
  height: 100%;
  background-color: #fffffe;
}
.active .outerBox {
  transform: translateX(calc(-1000px + 100%));
}

</style>
