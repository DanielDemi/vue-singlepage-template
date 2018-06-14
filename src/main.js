// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill' // 兼容ie es语法
import i18n from './i18n'
import api from './api/api'
// import moment from 'moment'; lodash基础工具

Vue.config.productionTip = false

// 引入moment用来方便设置日期
// Vue.prototype.$moment = moment;
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
