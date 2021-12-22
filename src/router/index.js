import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    component: index,
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          title: '康益堂'
        },
        component: index
      },
      {
        path: 'about',
        name: 'about',
        meta: {
          title: '关于我们'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
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
