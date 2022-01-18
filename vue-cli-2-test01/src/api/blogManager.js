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
    name: config
  }
  return request({
    url: '/blog/readBlog',
    method: 'post',
    data: blogDto
  })
}

export function likeBlog(config) {
  return request({
    url: '/blog/incrLike',
    method: 'post',
    data: config
  })
}
