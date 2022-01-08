<template>
  <el-container>
    <el-header>
      <router-link to="/login">登录</router-link>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>

</style>
