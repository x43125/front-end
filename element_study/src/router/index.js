import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/Index'
import Blog from "../components/Blog";
import Shop from "../components/Shop";
import Tool from "../components/Tool";
import Game from "../components/Game";
import New from "../components/New";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/blog',
      component: Blog
    },
    {
      path: '/game',
      component: Game
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/tool',
      component: Tool
    },
    {
      path: '/new',
      component: New
    }
  ]
})
