<template>
  <div>
    <div class="map">
      <img :src="mapPath" alt="ass">
      <map-marker></map-marker>
    </div>
  </div>
</template>

<script>
  import API from '../../../config/request'
  import MapMarker from './MapMarker.vue'

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
    },
    components: {
        MapMarker
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .map {

  }
</style>
