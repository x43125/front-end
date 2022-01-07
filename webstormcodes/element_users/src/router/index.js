import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/index";
import List from "../components/users/List";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/users',
      component: List
    }
  ]
})
