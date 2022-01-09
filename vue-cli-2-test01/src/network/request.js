import axios from "axios";
import errorCode from '../../utils/errorCode'
import {Message, MessageBox} from "element-ui";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// request是基本请求，设置
// 拦截器等
const instance = axios.create({
  baseURL: 'http://localhost:8081',
  timeout: 10000
})

instance.interceptors.request.use(config => {
  console.log("发送拦截器");
  return config;
}, error => {
  console.log(error)
  Promise.reject(error)
})

instance.interceptors.response.use(res => {
  const code = res.data.code || 200
  const msg = errorCode[code] || res.data.message || errorCode['default'];
  if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
    return res.data
  }
  if (code === 401) {
    MessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }
    ).then(() => {
      store.dispatch('LogOut').then(() => {
        location.href = '/index';
      })
    }).catch(() => {
    });
    return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
  } else if (code === 500) {
    Message({
      message: msg,
      type: 'error'
    })
    return Promise.reject(new Error(msg))
  } else if (code !== 200) {
    Message({
      message: msg,
      type: 'error'
    })
    return Promise.reject(msg)
  } else {
    Message({
      message: msg,
      type: 'success'
    })
    return res.data
  }
})

export default instance
