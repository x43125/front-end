import request from "@/network/request";

export function register(userInfo) {

  return request({
    url: '/user/register',
    method: 'post',
    data: userInfo
  })
}
