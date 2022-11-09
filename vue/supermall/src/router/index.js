import Vue from 'vue'
import VueRouter from "vue-router";
import Router from "vue-router";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.use(VueRouter)

export default new Router({
    routes: [
        {
            path: '/index',
            name: 'Index',
            component: () => import('@/views/Index')
        },
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/user/Login')
        }
    ]
})
