import axios from 'axios'

// axios.defaults.baseURL = '/mock';
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.data && response.data.code === '0') {
      return Promise.resolve(response.data)
    } else if (response.config.url.indexOf('json') > -1) {
      return response
    } else {
      return Promise.reject(response.data)
    }
  },
  (error) => {
    if (error.response && error.response.data && error.response.data.errorCode === 'pleaseRefreshByHeader') {
      top.window.location.href = '/portal/index.action'
    } else {
      return Promise.reject(error)
    }
  }
)

const http = {
  post (url, params, headers = {}) {
    return axios({
      method: 'post',
      url: `${url}?t=` + new Date().getTime(),
      data: params,
      headers
    })
  },
  get (url, params, headers = {}) {
    return axios({
      method: 'get',
      url: `${url}?t=` + new Date().getTime(),
      params,
      headers
    })
  }
}

export default http
