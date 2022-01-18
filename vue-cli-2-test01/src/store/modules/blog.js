import {blogList, readBlog, likeBlog} from "@/api/blogManager";

const blog = {
  // state: {
  //   blogDto:
  // },

  actions: {
    BlogList({commit}, config) {
      return blogList(config);
    },
    ReadBlog({commit}, config) {
      return readBlog(config);
    },
    LikeBlog({commit}, likeBlogDto) {
      return likeBlog(likeBlogDto)
    }
  }
}

export default blog
