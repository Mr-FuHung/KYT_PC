import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from './element/Element-ui';


import api from '@/api';//数据请求
Vue.prototype.$api = api;//在Vue原型链挂载

Vue.config.productionTip = false
Vue.use(ElementUi)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
