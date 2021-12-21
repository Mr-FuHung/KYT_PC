import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    meta: {
      title: '康益堂'
    },
    component: home,
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '康益堂'
        },
        component: home
      },
      {
        path: 'about',
        name: 'about',
        meta: {
          title: '关于我们'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
      }
    ]
  },

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
