import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta:{
      title:'康益堂'
    },
    component: home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  linkExactActiveClass: 'routerExact',
  linkActiveClass: 'routerActive',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (true) {//验证路径是否存在
      document.title = to.meta.title;//修改页面title
      next()
  } else {
      next('/404')
  }
})
export default router
