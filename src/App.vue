<template>
  <div id="app">
    <h>hello</h>
  </div>
</template>
<script>
  import skinJson from '../static/skin.json';
  export default {
    name: 'app',
    watch: {
      '$route': function (to, from) {
        this.defaultActive = to.path;
      }
    },
    data() {
      return {
        defaultActive: 'vehicleStatistics',
        hasNoSidebar: true
      };
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
  };
</script>

<style lang="less" scoped>
  @import 'assets/styles/variable';
  @import 'assets/styles/reset.css';
  @import 'assets/styles/hui-reset.css';
  @import 'assets/styles/common.css';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
    background-color: #e8ebf5;
    position: relative;
    overflow: hidden;
    .sidebar {
      position: absolute;
      top: 0px;
      left: 0px;
      bottom: 0px;
      width: 200px;
      min-height: 616px;
      background-color: #f5f5f5;
    }
    .container {
      position: absolute;
      top: 0px;
      left: 200px;
      right: 0px;
      bottom: 0px;
      border-radius: 5px;
      &.noSidebar{
        left: 0px;
      }
    }
  }
</style>
