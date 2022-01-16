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
          <el-badge :hidden=readHiddenFlag :value=this.blogDto.readCount :max=this.flagMaxNum class="item" type="warning">
            <el-button type="info" size="small">阅读量</el-button>
          </el-badge>
          <el-badge :hidden=likeHiddenFlag :value=this.blogDto.likeCount :max=this.flagMaxNum class="item" type="warning">
            <el-button type="success" icon="el-icon-thumb" size="small">点赞</el-button>
          </el-badge>
          <el-badge :hidden=commentHiddenFlag :value=this.blogDto.commentCount :max=this.flagMaxNum class="item" type="warning">
            <el-button type="primary" icon="el-icon-edit" size="small">评论</el-button>
          </el-badge>
          <el-badge :hidden=collectHiddenFlag :value=this.blogDto.collectCount :max=this.flagMaxNum class="item" type="warning">
            <el-button type="warning" icon="el-icon-star-off" size="small">收藏</el-button>
          </el-badge>
          <el-badge :hidden=forwardHiddenFlag :value=this.blogDto.forwardCount :max=this.flagMaxNum class="item" type="warning">
            <el-button type="text" icon="el-icon-position" size="small">转发</el-button>
          </el-badge>
          <el-badge :hidden=trashHiddenFlag :value=this.blogDto.trashCount :max=this.flagMaxNum class="item" type="warning">
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
      commentHiddenFlag: true,
      collectHiddenFlag: true,
      forwardHiddenFlag: true,
      trashHiddenFlag: true,
      readHiddenFlag: true,

      flagMaxNum: 99,
    }
  },
  created() {
    // console.log(this.$route.params.obj);
    // this.blogDto = this.$route.params.obj;
    this.blogDto = this.$route.query.obj;
    
    console.log("created: ")
    console.log(this.blogDto);

    this.likeHiddenFlag = (this.blogDto.likeCount <= 0);
    this.commentHiddenFlag = (this.blogDto.commentCount <= 0);
    this.collectHiddenFlag = (this.blogDto.collectCount <= 0);
    this.forwardHiddenFlag = (this.blogDto.forwardCount <= 0);
    this.trashHiddenFlag = (this.blogDto.trashCount <= 0);
    this.readHiddenFlag = (this.blogDto.readCount <= 0);
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
