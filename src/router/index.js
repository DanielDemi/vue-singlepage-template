import Vue from 'vue'
import Router from 'vue-router'
import moduleA from 'moduleA'

Vue.use(Router)

let routers = []
routers = routers.concat(moduleA)

const router = new Router({
  mode:'history',
  base: '', // 上下文
  routers
})
// 一般用于加载用户，或者权限，多语言等操作
// router.beforeEach(async (to, from, next) => {
//   next();
// })

export default router;
