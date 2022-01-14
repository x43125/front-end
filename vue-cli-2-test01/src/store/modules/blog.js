import {blogList, readBlog} from "@/api/blogManager";

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
    // SetBlog({commit}, config) {
    //   this.state.id = config.id;
    //   this.state.name = config.name;
    //   this.state.content = config.content;
    // }
  }
}

export default blog
