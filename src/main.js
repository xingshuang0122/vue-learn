import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'
import vant from 'vant'
import 'vant/lib/index.css'
import VueLazyLoad from 'vue-lazyload'
import mqtt from 'mqtt'
// import stompjs from 'stompjs'
// import sockjs from 'sockjs'

Vue.use(VueLazyLoad)
Vue.use(VueLazyLoad, {
  lazyComponent: true
})
Vue.use(vant)
Vue.prototype.$axios = axios
Vue.prototype.$mqtt = mqtt
// Vue.prototype.$stompjs = stompjs
// Vue.prototype.$sockjs = sockjs

// 生产模式需要在main.js中关闭 ：Vue.config.productionTip = false ，作用是阻止 vue 在启动时生成生产提示。 即，不设false会在生产环境依旧提示：
// You are running Vue in development mode.
// Make sure to turn on production mode when deploying for production.
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
