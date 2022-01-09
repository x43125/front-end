import request from "@/network/request";


export function sayHello() {
  return request({
    url: '/test/sayHello'
  })
}

export function testGet() {
  return request({
    url: '/test/testGet'
  })
}

export function testParam(key1, key2) {
  return request({
    url: '/test/testParam',
    method: 'post',
    params: {
      key1, key2
    }
  })
}

export function testBody(requestBody) {
  return request({
    url: '/test/testBody',
    method: 'post',
    data: requestBody
  })
}
