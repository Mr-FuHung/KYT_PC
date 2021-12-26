import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import home from '../views/home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    // redirect(to) {
    //   return { name: '404' }
    // },
    meta: {
      title: '404'
    },
    component: () => import('@/views/404.vue')
  },
  {
    path: '/',
    redirect: '/home',
    component: index,
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
          title: '关于我们',
          keepAlive: true
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/aboutUs/aboutUs.vue')
      },
      {
        path: 'join',
        name: 'join',
        meta: {
          title: '加入我们',
          keepAlive: true
        },
        component: () => import('@/views/joinUs/joinUs.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        meta: {
          title: '联系我们',
          keepAlive: true
        },
        component: () => import('@/views/contactUs/contactUs.vue')
      },
      {
        path: '/home/health',
        name: 'health',
        meta: {
          title: '健康小课堂'
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/healthClass/healthClass.vue')
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
