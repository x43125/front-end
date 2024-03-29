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
      component: () => import('@/views/Index'),
      children: [
        {
          path: '/test',
          name: 'Test',
          component: () => import('@/views/Test')
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/user/Login')
        },
        {
          path: '/register',
          name: 'Register',
          component: () => import('@/views/user/Register')
        },
        {
          path: '/blog',
          name: 'Blog',
          component: () => import('@/views/blog/Blog'),
          children: [
            {
              // 废弃，不用转路由，直接放在一个页面
              path: '/blog/content',
              name: 'BlogContent',
              component: () => import('@/views/blog/BlogContent')
            }
          ]
        }
      ]
    },

  ]
})
