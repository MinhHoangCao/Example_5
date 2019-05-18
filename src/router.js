import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/abc',
      name: 'anw',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: "/users",
      name: 'User Table',
      component: () => import('./views/UserPage.vue')
    },
    {
      path: "/users/:id",
      name: 'User Detail',
      component: () => import('./views/UserDetailPage.vue')
    }
  ]
})
