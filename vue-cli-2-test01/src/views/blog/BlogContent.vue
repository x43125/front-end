<template>
  <div>
    <el-container>
      <el-header>
        <p>{{ this.$route.params.obj.name }}</p>
<!--        <p>{{ // this.$route.params.name }}</p>-->
      </el-header>
      <el-main>
        <div>
          <p>{{ this.$route.params.obj.content }}</p>
<!--          <p>{{ // this.$route.params.content }}</p>-->
        </div>
      </el-main>
      <el-footer>
        <el-badge :value="12" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
        <el-badge :value="1" class="item" type="primary">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="2" class="item" type="warning">
          <el-button size="small">回复</el-button>
        </el-badge>

        <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="clearfix">
              评论
              <el-badge class="mark" :value="12"/>
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              回复
              <el-badge class="mark" :value="3"/>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

export default {
  name: "BlogContent",
  data() {
    return {
      blogDto: ''
    }
  },
  created() {
    // this.blogDto = this.$store.getters.blog;
    // this.blogDto = this.$store.getters.blog;
    // console.log(this.$route.params);
    // this.blogDto = this.$route.params.obj;
  }
}
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
