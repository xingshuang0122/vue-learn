import Vue from 'vue'
import Router from 'vue-router'
import Navigation from './components/Navigation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Navigation,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'main.home',
          component: () => import('./views/home/Home.vue')
        },
        {
          path: 'community',
          name: 'main.community',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/community/Community.vue')
        },
        {
          path: 'shopCart',
          name: 'main.shopCart',
          component: () => import('./views/shopCart/ShopCart.vue')
        },
        {
          path: 'myself',
          name: 'main.myself',
          component: () => import('./views/myself/Myself.vue')
        }
      ]
    }
  ]
})
