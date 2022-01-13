import {blogList, readBlog} from "@/api/blogManager";

const blog = {

  actions: {
    BlogList({commit}, config) {
      return blogList(config);
    },
    ReadBlog({commit}, config) {
      return readBlog(config);
    }
  }
}

export default blog
