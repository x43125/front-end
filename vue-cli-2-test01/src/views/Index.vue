<template>
  <el-container>
    <el-header>
      <h1>用户名，用户头像</h1>
    </el-header>

    <el-container>
      <el-aside class="menu-class">
        <el-row class="tac">
          <el-col :span="12">
            <!--          <h5>默认颜色</h5>-->
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">

              <el-menu-item index="2">
                <i class="el-icon-location"></i>
                <span>
                  <router-link to="/index">主页</router-link>
                </span>
              </el-menu-item>

              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">
                <router-link to="/test">测试</router-link>
              </span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">
                <router-link to="/login">登录</router-link>
              </span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">
                <router-link to="/register">注册</router-link>
              </span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">
                <router-link to="/blog">博客</router-link>
              </span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>

    <el-footer>
      <h1>小静静驰名商标</h1>
    </el-footer>
  </el-container>

</template>

<script>
export default {
  name: "Index",

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo {

  /*background-color: #99a9bf;*/
}

.menu-class {
  width: 25%;
  background-color: #ededed;
}
</style>
