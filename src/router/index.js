import Vue from 'vue'
import Router from 'vue-router'
import todolist from '../pages/todolist'
import phone from '../pages/phone'
import current from '../pages/current'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todolist',
      component: todolist
    },
    {
      path: '/phone',
      component: phone
    },
    {
      path: '/current',
      component: current
    }
  ]
})
