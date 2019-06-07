import axios from 'axios'

axios.defaults.timeout = 1000 * 10
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

axios.interceptors.request.use((config) => {
  // const token = Vue.ls.get('TOKEN')
  // if (token) {
  //   Object.assign(config.headers, {
  //     'Authorization': `Bearer ${token}`
  //   })
  // }
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  return res
}, (error) => {
  return Promise.reject(error)
})

export default {
  install: function (Vue) {
    Vue.http = axios
    Object.defineProperty(Vue.prototype, '$http', {
      value: axios
    })
  }
}
