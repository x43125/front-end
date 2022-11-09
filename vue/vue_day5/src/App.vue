<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <router-link to="/">主页</router-link>
    <router-link to="/user">用户管理</router-link>
    <router-link to="/student">学生管理</router-link>
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
</style>
