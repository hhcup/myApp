import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "about" */ '../views/test.vue')
    },
    {
      path: '/girls',
      name: 'girls',
      component: () => import(/* webpackChunkName: "about" */ '../views/girls/girls.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
