<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import API from './config/request'
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
    },
    methods: {
      getData () {
        this.$http.get(API.getOnesWarn).then(res => {
          if (res.data.status === '0') {
            this.$notify({
              title: '警告',
              message: '油井出现错误',
              type: 'error'
            });
          }
        })
      }
    },
    mounted () {
      this.getData()
      let that = this
      setInterval(function () {
        that.$http.get(API.getOnesWarn).then(res => {
          if (res.data.status === '0') {
            this.$notify({
              title: '警告',
              message: '油井出现错误',
              type: 'error'
            })
          }
        })
      }, 300000)
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
