import request from "@/network/request";

export function blogList(config) {
  return request({
    url: '/blog/getBlogList',
    method: 'post',
    data: config
  })
}
