<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created() {
      this.$store.dispatch('checkLogin').then(
        rs => {
          if (!rs && this.$route.name !== 'reg') {
            this.$router.push({name: 'index'})
          }
          else {
            if (this.$route.name === 'index') {
              this.$router.push({name: 'main'})
            }
          }
        }
      )
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  * {
    margin: 0;
    padding: 0;
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
