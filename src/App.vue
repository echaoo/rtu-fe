<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less" rel="stylesheet/less">
  * {
    margin: 0;
    padding:0;
  }

  html {
    height: 100%;

    body {
      height: 100%;

      #app {
        height: 100%;
      }
    }
  }

</style>
