import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:8081',
        timeout: 20000
    })

    // 发送的拦截器，发送前做的操作
    instance.interceptors.request.use(config => {
        console.log('interceptors.request:');
        console.log(config);
        return config;
    },error => {
        console.log(error);
    })

    // 接受拦截器，接收到返回后做的操作
    instance.interceptors.response.use(res => {
        console.log('interceptors.response');
        console.log(res.data);
        return res.data;
    }, error => {
        console.log(error);
    })

    return instance(config)
}

