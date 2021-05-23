import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
      path: '/about',
      name: 'About',
      component: () => import('../pages/About/About')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home/Home')
    },
    {
      path: '/meeting/:id',
      name: 'Home',
      component: () => import('../pages/Meeting/Meeting')
    },

  ]
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router