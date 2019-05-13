import axios from 'axios'
import store from 'plugins/store/store'

const baseUrl = process.env.VUE_APP_API_URL
const commonParams = {}

const CancelToken = axios.CancelToken
let _cancel = {}

export function setCommonParams (obj) {
  Object.assign(commonParams, obj)
}

export function post (url) {
  return function (params = {}) {
    return handleAjax(axios.post(baseUrl + url, param(Object.assign({}, commonParams, params)), {
      headers: { 'Content-Type': 'application/json' },
      cancelToken: new CancelToken(function executor (c) {
        // An executor function receives a cancel function as a parameter
        _cancel[url] = c
      })
    }))
  }
}

export function get (url) {
  return function (params = {}) {
    return handleAjax(
      axios.get(baseUrl + url, {
        params: Object.assign({}, commonParams, params),
        cancelToken: new CancelToken(function executor (c) {
          _cancel[url] = c
        })
      })
    )
  }
}

export function cancel (url) {
  return function () {
    _cancel[url] && _cancel[url]()
  }
}

function handleAjax (ajaxPromise) {
  return ajaxPromise.then((res) => {
    const serverData = res.data
    if (serverData.errorCode === 0) {
      let data = serverData.result // TODO
      /* if (typeof data === 'string') {
        data = JSON.parse(data)
      } */
      return data
    } else if (serverData.errorCode === undefined) {
      // new restful api doesn't use errorCode
      return serverData
    } else {
      return handleError({
        errorCode: serverData.errorCode,
        errorMessage: serverData.errorMessage
      })
    }
  }).catch((e) => {
    store.commit('updateError', {
      errorCode: e.errorCode ? e.errorCode : e.response.data.code,
      errorMessage: e.errorMessage ? e.errorMessage : e.response.data.message
    })
    return Promise.reject(axios.isCancel(e) ? e.errorMessage : e)
  })
}

function handleError (e) {
  store.commit('updateError', e)
  return Promise.reject(e)
}

function param (obj) {
  if (!obj) {
    return ''
  }
  let s = []
  for (let prefix in obj) {
    buildParams(prefix, obj[prefix], add)
  }

  function add (key, value) {
    s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value)
  }

  return s.join('&')
}

const rbracket = /\[\]$/

function buildParams (prefix, obj, add) {
  let name
  if (Array.isArray(obj)) {
    // Serialize array item.
    obj.forEach(function (v, i) {
      if (rbracket.test(prefix)) {
        // Treat each array item as a scalar.
        add(prefix, v)
      } else {
        // Item is non-scalar (array or object), encode its numeric index.
        buildParams( prefix + '[' + (typeof v === 'object' && v !== null ? i : '') + ']', v, add )
      }
    })
  } else if (typeof obj === 'object') {
    // Serialize object item.
    for (name in obj) {
      buildParams(prefix + '[' + name + ']', obj[name], add)
    }
  } else {
    // Serialize scalar item.
    add(prefix, obj)
  }
}
