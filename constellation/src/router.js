import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Index from './components/index'
import starSelect from './components/starSelect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/select',
      name: 'select',
      component: starSelect
    }
  ]
})
