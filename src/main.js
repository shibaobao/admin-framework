import Vue from 'vue'
import store from 'store'
import App from './app.vue'
import http from 'plugins/$http'
import router from 'plugins/router'
import storage from 'vue-ls'

import 'plugins/ant-design'
import 'common/scss/index.scss'

Vue.config.productionTip = false

Vue.use(http)
Vue.use(storage, {
  namespace: 'MMS_',
  name: 'ls',
  storage: 'local'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
