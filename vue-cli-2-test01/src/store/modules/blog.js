import {blogList} from "@/api/blogManager";

const blog = {

  actions: {
    BlogList({commit}, config) {
      return blogList(config)
    }
  }
}

export default blog
