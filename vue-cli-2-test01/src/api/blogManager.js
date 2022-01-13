import request from "@/network/request";

export function blogList(config) {
  return request({
    url: '/blog/getBlogList',
    method: 'post',
    data: config
  })
}

export function readBlog(config) {
  const blogDto = {
    id: '',
    blogName: config
  }
  return request({
    url: '/blog/readBlog',
    method: 'post',
    data: blogDto
  })
}
