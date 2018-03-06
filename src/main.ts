import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
const init = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
