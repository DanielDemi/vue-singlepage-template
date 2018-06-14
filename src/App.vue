<template>
  <div id="app">
    <img src="./assets/images/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  created() {
      const skin = skinJson.default;
      this.renderSkin(skin, skinJson.packages, '/gbac/web');
    },
    methods: {
      /**
       * 根据子系统渲染皮肤
       * @param {String} skin 皮肤
       * @param {Object} packages 需要换肤的包
       * @param {String} system 子系统
       * @author chenguanbin
       */
      renderSkin(skin, packages, system) {
        const skinDir = `/static/skin/${skin}`;
        packages.forEach((pkg) => {
          let path = `${skinDir}/${pkg.name}/${pkg.stylePath}`;
          if (system !== undefined && system !== '') {
            path = `${system}${path}`;
          }
          this.loadCSS(path, pkg.name);
        });
      },
      /**
       * 往页面中插入css
       * @param {String} path CSS文件路径
       * @param {String} name 包名称
       * @author chenguanbin
       */
      loadCSS(path, name) {
        const head = document.getElementsByTagName('head')[0];
        const linkId = `skin-${name}`;
        let linkTag = document.getElementById(linkId);
        if (!linkTag) {
          linkTag = document.createElement('link');
          linkTag.href = path;
          linkTag.rel = 'stylesheet';
          linkTag.type = 'text/css';
          linkTag.setAttribute('id', linkId);
          head.appendChild(linkTag);
        } else {
          linkTag.href = path;
        }
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
