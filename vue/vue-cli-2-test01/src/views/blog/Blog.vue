<template>
  <el-container>
    <el-header class="blog-header">{{ msg }}</el-header>
    <el-container>
      <el-aside class="blog-name-list" width="150px">
        <div>
          <p
            v-for="(item, i) in tableData"
            :key="i"
            @click="readBlog(item.name)"
          >
            <!-- <router-link :to="{name: 'BlogContent', params:{obj: blogDto}}">{{i}}: {{ item.name }}</router-link> -->
            <!-- <a @click="routerTo()">{{i}}: {{ item.name }}</a> -->
            <!-- 不要用两个路由了 -->
            {{ i }}: {{ item.name }}
          </p>
        </div>
      </el-aside>
      <el-main v-show="blogContentShowFlag">
        <el-container>
          <el-header class="blog-name">
            <div>
              {{ this.blogDto.name }}
            </div>
            <time>发布于 {{ this.blogDto.createTime }}</time>
          </el-header>
          <el-main class="blog-content">
            <p>{{ this.blogDto.content }}</p>
          </el-main>

          <el-container class="blog-interact">
            <el-header class="blog-content-area">
              <el-badge
                :hidden="readHiddenFlag"
                :value="this.blogDto.readCount"
                :max="this.flagMaxNum"
                class="item"
                type="warning"
              >
                <el-button type="info" size="small">阅读量</el-button>
              </el-badge>
              <el-badge
                :hidden="likeHiddenFlag"
                :value="this.blogDto.likeCount"
                :max="this.flagMaxNum"
                class="item"
                type="warning"
              >
                <el-button
                  type="success"
                  icon="el-icon-thumb"
                  size="small"
                  @click="likeBlog()"
                  >点赞</el-button
                >
              </el-badge>
              <el-badge
                :hidden="commentHiddenFlag"
                :value="this.blogDto.commentCount"
                :max="this.flagMaxNum"
                class="item"
                type="warning"
              >
                <el-button type="primary" icon="el-icon-edit" size="small"
                  >评论</el-button
                >
              </el-badge>
              <el-badge
                :hidden="collectHiddenFlag"
                :value="this.blogDto.collectCount"
                :max="this.flagMaxNum"
                class="item"
                type="warning"
              >
                <el-button type="warning" icon="el-icon-star-off" size="small"
                  >收藏</el-button
                >
              </el-badge>
              <el-badge
                :hidden="forwardHiddenFlag"
                :value="this.blogDto.forwardCount"
                :max="this.flagMaxNum"
                class="item"
                type="warning"
              >
                <el-button type="text" icon="el-icon-position" size="small"
                  >转发</el-button
                >
              </el-badge>
              <el-badge
                :hidden="trashHiddenFlag"
                :value="this.blogDto.trashCount"
                :max="this.flagMaxNum"
                class="item"
                type="warning"
              >
                <el-button type="danger" icon="el-icon-delete" size="small"
                  >屏蔽</el-button
                >
              </el-badge>
            </el-header>

            <el-main>
              <h1>评论区</h1>
              <el-header>
                <!-- 正在登录的用户的头像 -->
                <img
                  class=""
                  width="38"
                  height="38"
                  src="static\img\yellow.png"/>
                <el-input
                  type="textarea"
                  placeholder="撰写评论"
                  v-model="textarea"
                  maxlength="300"
                  show-word-limit
                  autosize=""
                >
                </el-input>
              </el-header>
              <h1>其他用户评论区</h1>
              <el-main>
                <div>
                  <p v-for="(item, i) in touristList" :key="i">
                    {{i}}{{ item.name }}
                    <img width="38" height="38" src="picPath + item.picName + picSuffix">
                  </p>
                </div>
              </el-main>
            </el-main>

            <el-footer>
              <h1>推荐</h1>
            </el-footer>
          </el-container>
        </el-container>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      msg: "博客页",
      keywordDto: {
        current: "1",
        size: "10",
        total: "",
      },
      blogDto: {},
      tableData: [],

      likeHiddenFlag: true,
      commentHiddenFlag: true,
      collectHiddenFlag: true,
      forwardHiddenFlag: true,
      trashHiddenFlag: true,
      readHiddenFlag: true,

      flagMaxNum: 99,

      blogContentShowFlag: false,

      user: {
        id: "1",
        name: "xx",
      },
      text: "",
      textarea: "",
      commentLineNum: { minRows: 2, maxRows: 6 },

      picPath: '/static/img/',
      picSuffix: '.png',
      touristList: [
        {
          name: "wx",
          picName: "baxi",
        },
        {
          name: "wj",
          picName: "yellow",
        },
      ],

      loginTour: "",
    };
  },

  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return "warning-row";
      } else if (rowIndex % 2 === 1) {
        return "success-row";
      }
      return "";
    },
    readBlog(blogName) {
      this.blogDto = "";
      this.blogContentShowFlag = true;
      this.$store
        .dispatch("ReadBlog", blogName)
        .then((result) => {
          console.log("读取成功: " + blogName);
          this.blogDto = result.data;

          this.likeHiddenFlag = this.blogDto.likeCount <= 0;
          this.commentHiddenFlag = this.blogDto.commentCount <= 0;
          this.collectHiddenFlag = this.blogDto.collectCount <= 0;
          this.forwardHiddenFlag = this.blogDto.forwardCount <= 0;
          this.trashHiddenFlag = this.blogDto.trashCount <= 0;
          this.readHiddenFlag = this.blogDto.readCount <= 0;

          this.tourList = this.blogDto.tourList;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    likeBlog() {
      const likeBlogDto = {
        tourId: this.user.id,
        tourName: this.user.name,
        blogId: this.blogDto.id,
        blogName: this.blogDto.name,
      };

      console.log(likeBlogDto);
      this.$store
        .dispatch("LikeBlog", likeBlogDto)
        .then((result) => {
          console.log(result);
          this.blogDto.likeCount = result.data;
          // this.likeHiddenFlag = this.blogDto.data <= 0;
        })
        .catch((error) => {
          console.log(result);
        });
    },

    // routerTo() {
    //   this.$router.push({
    //     // name: 'BlogContent',
    //     path: "/blog/content",
    //     // params: {obj: this.blogDto}
    //     query: {
    //       obj: this.blogDto,
    //     },
    //   });
    // },
  },
  created() {
    this.$store
      .dispatch("BlogList", this.keywordDto)
      .then((result) => {
        this.tableData = result.data.list;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.blog-header {
  background-color: white;
}

.blog-name-list {
  background-color: #d3dce6;
}

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




















