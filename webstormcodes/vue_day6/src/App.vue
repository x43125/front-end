<template>
  <div id="app">
    <div id="header">
      <h1>ppdream.xyz</h1>
    </div>
    <div id="routerLink">
      <img src="./assets/logo.png">
      <br>
      <router-link to="/">主页</router-link> <br>
      <router-link to="/user/login">登陆注册</router-link> <br>
      <router-link to="/userManager">用户管理</router-link> <br>
      <router-link to="/blog">博客</router-link>
    </div>
    <div id="routerView">
      <router-view/>
    </div>
    <div>
      <h1>
<!--        政府要求！！！ -->
        <a href="http://beian.miit.gov.cn/">
<!--          todo 后期要把此处换成自己的备案号 -->
          京ICP备999999号
        </a>
        </h1>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  position: absolute;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
#header {
  text-align: center;
}
#routerLink {
  position: relative;
  text-align: left;
  background-color: papayawhip;
  border: solid 1px;
  width: 10%;
  height: 85%;
  float: left;
}
#routerView {
  position: relative;
  text-align: center;
  background-color: azure;
  width: 89%;
  height: 85%;
  float: right;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
