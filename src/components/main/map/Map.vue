<template>
  <div>
    <div class="map">
      <img :src="mapPath" alt="ass">
    </div>
  </div>
</template>

<script>
  import API from '../../../config/request'

  export default {
    data () {
      return {
        mapPath: ''
      }
    },
    created () {
      let that = this;
      this.$http.get(API.block).then(
        function (res) {
          if (res.data.status === '0') {
            that.mapPath = res.data.data[0].MapPath;
            that.mapPath = 'http://' + that.mapPath;
          }
        })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .map {

  }
</style>
