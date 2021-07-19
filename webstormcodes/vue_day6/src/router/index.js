import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Login from "../components/Login";
import Register from "../components/Register";
import UserManager from "../components/UserManager";
import UserAdd from "../components/UserAdd";
import Blog from "../components/Blog";
import PageBar from "../components/PageBar";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/userManager',
      name: 'UserManager',
      component: UserManager,
      children: [
        {
          // 子路由不加"/"
          path: 'userAdd',
          name: 'UserAdd',
          component: UserAdd
        },
      ]
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: 'pageBar',
      name: 'PageBar',
      component: PageBar
    }

  ]
})
