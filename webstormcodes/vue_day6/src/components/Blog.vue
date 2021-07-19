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
      <div id="blogCatalog">
        <h4>
        博客列表:
        标题
        两到三行正文
        阅读量，点赞数，评论数，上架时间
        </h4>
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
        </div>

        <div>
          <!--      分页按钮 -->
          <h4>分页按钮</h4>
<!--          todo 调试-->
          <router-link to="/pageBar">fenye</router-link>
          <router-view/>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      msg: "Blog",
    }
  }
}
</script>

<style scoped>

#blogCatalog {
  width: 10%;
  height: 80%;
  float: left;
  background-color: burlywood;
}
#blogContent {
  width: 78%;
  height: 80%;
  float: left;
  margin-left: 1%;

  background-color: #42b983;
}
#blogClassification {
  width: 10%;
  height: 80%;
  float: right;
  background-color: antiquewhite;
}

</style>
