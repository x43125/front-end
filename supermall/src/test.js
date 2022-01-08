import {request} from "@/network/request";
// 请求通过这种封装来操作，就是将原先的直接请求包装一层 request，以做拦截操作和可移植性增强，也实现和第三方依赖 axios解耦
export function sayHello() {
    return request({
        url: '/test/sayHello'
    }).then(res => {
        console.log('sayHello');
        console.log(res);
    }).catch(error => {
        console.log(error);
    })
}

export function testParam(key1, key2) {

    return request({
        url: '/test/testParam',
        method: 'post',
        // RequestParam就用这种
        params: {
            key1: key1,
            key2: key2
        }
    }).then(res => {
        console.log('testParam');
        console.log(res);
    }).catch(error => {
        console.log(error);
    })
}

export function testBody(key1, key2) {
    const data = {
        key1,
        key2
    }

    return request({
        url: '/test/testBody',
        method: 'post',
        // RequestParam就用这种
        data: data
    }).then(res => {
        console.log('testBody');
        console.log(res);
    }).catch(error => {
        console.log(error);
    })
}


