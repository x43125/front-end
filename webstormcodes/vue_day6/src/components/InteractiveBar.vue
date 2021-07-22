<template>
  <h4>{{name}}</h4>
  <div >
    <ul v-for="(blog,index) in blogs" :key="blog.id">
      <li>
        <div>
          <div id="addReadAmount" @click="addReadAmount(blog.id)">阅读量：{{blog.readAmount}}</div>
          <div id="likeBlog" @click="likeBlog(blog.id)">点赞数：{{blog.likeAmount}}</div>
          <div id="commentBlog" @click="commentBlog(blog.id)">评论数：{{blog.commentAmount}}</div>
          <div id="favoriteBlog" @click="favoriteBlog(blog.id)">favorite</div>
        </div>
        <div>
          上线时间：{{blog.uploadTime}}
        </div>
      </li>
      <hr/>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InteractiveBar",
  data() {
    return {
      addReadAmount(blogId) {

      },
      likeBlog(blogId) {
        this.$http.get("http://localhost:8081/blog/likeBlogByBlogId/" + {blogId}).then(res => {
          console.log(res);
          //todo 把list解析出来，用","分割
          this.blog.likeAmount = res.data.data;
        }).catch(err=>{
          alert(err);
        });
      },
      commentBlog(blogId) {

      },
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  #addReadAmount {
    float: left;
  }
  #likeBlog {
    float: left;
  }
  #commentBlog {
    float: left;
  }
  #favoriteBlog {
    float: right;
  }
</style>
