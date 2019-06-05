import Vue from 'vue'
import App from './app.vue'
import router from 'plugins/router'
import store from 'store'
import 'plugins/element-ui'
import 'common/scss/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
