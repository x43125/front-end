<template>
  <el-container>
    <el-header class="blog-header">{{ msg }}</el-header>
    <el-container>
      <el-aside class="blog-name-list" width="150px">
        <div>
          <p v-for="(item,i) in tableData" @click="readBlog(item.name)">
            <router-link :to="{name: 'BlogContent', params:{obj: blogDto}}">{{ item.name }}</router-link>
<!--            <router-link :to="{name: 'BlogContent'}">{{ item.name }}</router-link>-->
<!--            <a @click="routerTo()">{{ item.name }}</a>-->
          </p>
        </div>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      msg: '博客页',
      keywordDto: {
        current: '1',
        size: '10',
        total: ''
      },
      blogDto: {
        id: '',
        name: '',
        content: '',
        likeCount: '1',
        commentCount: '0',
        forwardCount: '0',
        readCount: '0'
      },
      tableData: [],

    }
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex % 2 === 0) {
        return 'warning-row';
      } else if (rowIndex % 2 === 1) {
        return 'success-row';
      }
      return '';
    },
    readBlog(blogName) {
      this.blogDto.content = '';
      this.$store.dispatch("ReadBlog", blogName).then(result => {
        // console.log(result.data);
        console.log("读取成功: " + blogName);
        this.blogDto.id = 1;
        this.blogDto.content = result.data;
        this.blogDto.name = blogName;
      }).catch(error => {
        console.log(error);
      });
      // this.$store.commit('SetBlog', this.blogDto)
    },
    routerTo() {
      this.$router.push({
        name: 'BlogContent',
        params: {obj: this.blogDto}
      })
    }
  },
  created() {
    this.$store.dispatch("BlogList", this.keywordDto).then(result => {
      this.tableData = result.data.list;
    }).catch(error => {
      console.log(error);
    })
  },
}
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
  background-color: #D3DCE6;
}
</style>




















