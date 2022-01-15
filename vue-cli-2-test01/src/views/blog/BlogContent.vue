<template>
  <div>
    <el-container>
      <el-header class="blog-name">
        <!--        <p>{{ this.$route.params.obj.name }}</p>-->
        <p>{{ this.blogDto.name }}</p>
      </el-header>
      <el-main class="blog-content">
        <!--        <p>{{ this.$route.params.obj.content }}</p>-->
        <p>{{ this.blogDto.content }}</p>
      </el-main>
      <el-container class="blog-interact">
        <el-header class="blog-content-area">
          <!--          <el-badge :value="12" class="item">-->
          <!--            <el-button size="small">点赞👍</el-button>-->
          <!--          </el-badge>-->
          <!--          <el-badge :value="3" class="item">-->
          <!--            <el-button size="small">评论</el-button>-->
          <!--          </el-badge>-->
          <!--          <el-badge :value="1" class="item" type="primary">-->
          <!--            <el-button size="small">转发</el-button>-->
          <!--          </el-badge>-->
          <!--          <el-badge :value="2" class="item" type="warning">-->
          <!--            <el-button size="small">收藏</el-button>-->
          <!--          </el-badge>-->


          <!--          <el-dropdown trigger="click">-->
          <!--        <span class="el-dropdown-link">-->
          <!--          点我查看<i class="el-icon-caret-bottom el-icon&#45;&#45;right"></i>-->
          <!--        </span>-->
          <!--            <el-dropdown-menu slot="dropdown">-->
          <!--              <el-dropdown-item class="clearfix">-->
          <!--                评论-->
          <!--                <el-badge class="mark" :value="12"/>-->
          <!--              </el-dropdown-item>-->
          <!--              <el-dropdown-item class="clearfix">-->
          <!--                回复-->
          <!--                <el-badge class="mark" :value="3"/>-->
          <!--              </el-dropdown-item>-->
          <!--            </el-dropdown-menu>-->
          <!--          </el-dropdown>-->


          <el-badge :hidden=likeHiddenFlag :value=this.blogDto.likeCount :max="99" class="item" type="warning">
            <el-button type="success" icon="el-icon-thumb" size="small">点赞</el-button>
          </el-badge>
          <el-badge :value="200" :max="99" class="item" type="warning">
            <el-button type="primary" icon="el-icon-edit" size="small">评论</el-button>
          </el-badge>
          <el-badge :value="200" :max="99" class="item" type="warning">
            <el-button type="warning" icon="el-icon-star-off" size="small">收藏</el-button>
          </el-badge>
          <el-badge :value="200" :max="99" class="item" type="warning">
            <el-button type="warning" icon="el-icon-position" size="small">转发</el-button>
          </el-badge>
          <el-badge :value="200" :max="99" class="item" type="warning">
            <el-button type="danger" icon="el-icon-delete" size="small">屏蔽</el-button>
          </el-badge>
        </el-header>

        <el-main>
          <h1>评论区</h1>
        </el-main>

        <el-footer>
          <h1>推荐</h1>
        </el-footer>
      </el-container>

    </el-container>
  </div>
</template>

<script>

export default {
  name: "BlogContent",
  data() {
    return {
      blogDto: '',
      likeHiddenFlag: true,
    }
  },
  created() {
    // this.blogDto = this.$store.getters.blog;
    // console.log(this.$route.params);
    this.blogDto = this.$route.params.obj;
    console.log(this.blogDto);
    console.log(this.blogDto.likeCount);
    if (this.blogDto.likeCount > 0) {
      this.likeHiddenFlag = false;

    }


  }
}
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}

.blog-name {
  background-color: #c2ffb4;
}

.blog-content {
  background-color: #c5ff92;
}

.blog-interact {
  background-color: #e4ff96;
}

.blog-content-area {
  margin-top: 10px;
}
</style>
