<template>
  <div>
    <div>
      <h3>{{msg}}</h3>
    </div>
<!--    左侧为大菜单栏-->

<!-- 中间：展示博客列表，一页展示10篇文章，后期可供选择-->
<!--
     标题
     两到三行正文
     阅读量，点赞数，评论数，上架时间
-->
    <div id="blogMainBody">
      <div id="blogCatalog">
        <h4>
        博客列表:
        标题
        两到三行正文
        阅读量，点赞数，评论数，上架时间
        </h4>
        <div >
          <ul v-for="(blog,index) in blogs" :key="blog.id">
            <li>
              <div id="blogName" @click="getBlogById(blog.id)">{{blog.name}}</div>
              <div id="blogContentAbb" @click="getBlogById(blog.id)">{{blog.content}}</div>
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

        <div>
          <!--      分页按钮 -->
          <h4>分页按钮</h4>
          <router-link to="/pageBar">fenye</router-link>
          <router-view/>
        </div>
      </div>

  <!--
        正文
        开始为隐藏，
        当选择某一文章后，在空出的位置展示
  -->
      <div id="blogContent">
        <div>
          <h4>
            正文
            开始为隐藏，
            当选择某一文章后，在空出的位置展示
          </h4>
          <div v-model="blog">
            <div>{{blog.content}}</div>
            <div>
              <div>阅读量：{{blog.readAmount}}</div>
              <div id="like" @click="likeBlog(blog.id)" >点赞数：{{blog.likeAmount}}</div>
              <div>评论数：{{blog.commentAmount}}</div>
            </div>
            <div>
              上线时间：{{blog.uploadTime}}
            </div>
          </div>
        </div>
      </div>
  <!--
       点击文章将压缩左侧菜单栏至一细列
       同时将博客列表向左侧平移，平移后博客列表右上提供压解缩本列按钮
       右侧将空出大量空白，在此处展示文章主体，全屏阅读文章按钮 zen模式
  -->
  <!--
       博客分类，标签等信息
       分类列表
       文章数
  -->
      <div id="blogClassification">
        <h4>
          博客分类，标签等信息
          分类列表
          文章数
        </h4>
        <div>
          <ul v-for="(tag,index) in tags" :key="tag.Id">
            <li>
              <div id="tagName" @click="getBlogListByTagId(tag.id)">{{tag.name}}</div>
              <div id="tagDescription" @click="getBlogListByTagId(tag.id)">{{tag.description}}</div>
            </li>
            <hr/>
          </ul>
        </div>

<!--        <div id="classificationBlogList">
          <h4>
            列表
            开始为隐藏，
            当选择某一标签后，在空出的位置展示
          </h4>
          <div>
            <ul v-for="(blog, index) in classBlogList" :key="blog.id">
              <li>
                <div @click="getBlogById(blog.id)">{{blog.name}}</div>
                <div @click="getBlogById(blog.id)">{{blog.content}}</div>
                <div>
                  阅读量：{{blog.readAmount}}
                  点赞数：{{blog.likeAmount}}
                  评论数：{{blog.commentAmount}}</div>
                <div>
                  上线时间：{{blog.uploadTime}}
                </div>
              </li>
              <hr/>
            </ul>
          </div>
        </div>-->
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      msg: "Blog",
      blog: {},
      mainBlog: {},
      blogs: [],
      tags: [],
      classBlogList: []
    }
  },
  methods: {
    likeBlog(blogId) {
      this.$http.get("http://localhost:8081/blog/likeBlogByBlogId/" + blogId).then(res => {
        console.log(res.data);
        //todo 把list解析出来，用","分割
        this.blog.likeAmount = res.data.data;
        this.getBlogList();
      }).catch(err=>{
        alert(err);
      });
    },
    getBlogList() {
      this.$http.get("http://localhost:8081/blog/getBlogList").then(res => {
        console.log(res);
        //todo 把list解析出来，用","分割
        this.blogs = res.data.data;
      }).catch(err=>{
        alert(err);
      });
    },
    getTagBlogList() {
      this.$http.get("http://localhost:8081/blog/getTagList").then(res => {
        console.log(res);
        //todo 把list解析出来，用","分割
        this.tags = res.data.data;
      }).catch(err=>{
        alert(err);
      });
    },
    getBlogById(blogId) {
      this.$http.get("http://localhost:8081/blog/getBlogByBlogId/" + blogId).then(res => {
        console.log(res);
        this.blog = res.data.data;
        // this.blog.readAmount = this.blog.readAmount+1;
        this.addReadAmount(blogId);
        // this.getBlogList();
      }).catch(err=>{
        alert(err);
      });
    },
    addReadAmount(blogId) {
      this.$http.get("http://localhost:8081/blog/addReadAmountByBlogId/" + blogId).then(res => {
        console.log(res);
        this.blog.readAmount = res.data.data;
      }).catch(err=>{
        alert(err);
      });
    },
    getBlogListByTagId(tagId) {
      this.$http.get("http://localhost:8081/blog/getBlogListByTagId/" + tagId).then(res => {
        console.log(res);
        this.classBlogList = res.data.data;
      }).catch(err=>{
        alert(err);
      });
    }
  },
  created() {
    this.getBlogList();
    this.getTagBlogList();
  }
}
</script>

<style scoped>
#blogMainBody {

}
#blogName:hover {
  color: #E96463;
  cursor:pointer
}
#blogContentAbb:hover {
  cursor:pointer
}
#tagName:hover {
  color: #E96463;
  cursor:pointer
}
#tagDescription:hover {
  cursor:pointer
}
#commentArea {
  float: left;
}
#uploadTime {
  float: right;
}
#blogCatalog {
  width: 490px;
  height: 1000px;
  float: left;
  background-color: burlywood;
}
/* todo
    - div随内容多少而变长
    - 模拟sticky效果实现菜单栏，底部栏等固定显示
*/
#blogContent {
  width: 1200px;
  height: 1000px;
  float: left;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #42b983;
}
#blogClassification {
  width: 490px;
  height: 1000px;
  float: left;
  background-color: antiquewhite;
}
/*#classificationBlogList {
  width: 62%;
  !*margin-left: 1%;*!
  background-color: antiquewhite;
}*/
</style>
