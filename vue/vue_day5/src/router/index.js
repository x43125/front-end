import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from "../components/User";
import Student from "../components/Student";
import UserAdd from "../components/UserAdd";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: 'add',
          name: "UserAdd",
          component: UserAdd,
        }
      ]
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    }
  ]
})
