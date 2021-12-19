<template>
  <div id="app">
<!--    头部导航栏 -->
    <div id="header">
      <div id="webName">
        <h1>{{webName}}</h1>
      </div>
    </div>

<!--    主体 -->
    <div id="body">
<!--      菜单栏 -->
      <div id="menuBar">
        <div id="webLog"><img src="./assets/logo.png"></div>
        <div id="routerLink">
          <ul>
            <li><router-link to="/">主页</router-link> </li><br/>
            <li><router-link to="/user/login">登陆注册</router-link></li><br/>
            <li><router-link to="/userManager">用户管理</router-link></li><br/>
            <li><router-link to="/blog">博客</router-link></li><br/>
            <li><router-link to="/blogManger">博客管理</router-link></li>
          </ul>
        </div>
      </div>

<!--      实际显示内容主体 -->
      <div id="content">
        <div id="routerView">
          <router-view/>
        </div>
      </div>

      <div id="toolBar"></div>
    </div>

<!--    底部栏 -->
    <div id="tail">
      <div id="record">
        <h1>
          <!--        政府要求！！！ -->
          <a href="http://beian.miit.gov.cn/">
            <!--          todo 后期要把此处换成自己的备案号 -->
            京ICP备999999号
          </a>
        </h1>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      webName: 'ppdream.xyz',
    }
  }
}
</script>

<style>
#app {
  /*position: absolute;*/
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
#header {
  text-align: center;
  background-color: #bfa;
  /*position: absolute;*/
  /*top: 0;*/
}
#body {
  /*position: absolute;*/
}
#menuBar {
  position: relative;
  text-align: left;
  background-color: papayawhip;
  border: solid 1px;
  width: 250px;
  height: 1100px;
  float: left;
}
#content {
  position: relative;
  text-align: center;
  background-color: azure;
  width: 2200px;
  height: 1100px;
  margin-left: 10px;
  float: left;
}
#tail {
  position: absolute;
  bottom: 0;
  text-align: center;
  background-color: azure;
  width: 100%;
  height: 100px;
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
