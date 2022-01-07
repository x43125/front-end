<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside>
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;" size="mini">
            <el-radio-button :label="true"> <<</el-radio-button>
            <el-radio-button :label="false"> >></el-radio-button>
          </el-radio-group>

          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                   :collapse="isCollapse">

            <el-menu-item index="0">
              <i class="el-icon-s-home"></i>
              <span slot="title">
                <router-link to="/index">主页</router-link>
              </span>
            </el-menu-item>

            <el-menu-item index="2">
              <i class="el-icon-document"></i>
              <span slot="title">
                <router-link to="/blog">博客</router-link>
              </span>
            </el-menu-item>

            <el-menu-item index="3">
              <i class="el-icon-mouse"></i>
              <span slot="title">
                <router-link to="/game">游戏</router-link>
              </span>
            </el-menu-item>

            <el-menu-item index="4">
              <i class="el-icon-news"></i>
              <span slot="title">
                <router-link to="/new">新闻</router-link>
              </span>
            </el-menu-item>

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span>tool</span>
              </template>
              <el-submenu index="1-1">
                <template slot="title">todo-list</template>
                <el-menu-item index="1-1-1">todo</el-menu-item>
                <el-menu-item index="1-1-2">archive</el-menu-item>
                <el-menu-item index="1-1-3">trash</el-menu-item>
              </el-submenu>
              <el-submenu index="1-2">
                <template slot="title">short-hand-list</template>
                <el-menu-item index="1-2-1">short-hand</el-menu-item>
                <el-menu-item index="1-2-2">trash</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main>
          <!--          Main-->
          <router-view/>
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

  }
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

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  /*line-height: 200px;*/
  margin-right: 20px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  margin-right: 20px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  /*line-height: 260px;*/
}

.el-container:nth-child(7) .el-aside {
  /*line-height: 320px;*/
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

</style>
