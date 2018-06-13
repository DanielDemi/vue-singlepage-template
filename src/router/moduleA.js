// 按需加载
const HelloWorld = resolve => {
  import('@/components/Hello-world/HelloWorld').then(module => {
    resolve(module);
  });
}

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
})
