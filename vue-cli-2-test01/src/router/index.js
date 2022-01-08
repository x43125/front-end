import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/views/Index')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login')
    }
  ]
})
