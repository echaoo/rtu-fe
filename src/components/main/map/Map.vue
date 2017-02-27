<template>
  <div class="map-container">
    <img :src="mapPath" alt="loading map">
  </div>
</template>

<script>
  import API from '../../../config/request'

  export default {
    computed: {
      mapPath() {
          return 'http://' + this.$store.state.layout.sideBarList[parseInt(this.$store.state.layout.selectedSide)].MapPath
      }
    },
    data () {
      return {
      }
    },
    created () {

    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .map-container {
    height: 100%;
    width: 100%;
    position: absolute;

    img {
      height:100%;
    }
  }
</style>
