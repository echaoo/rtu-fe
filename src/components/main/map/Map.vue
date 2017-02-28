<template>
  <div class="map-container" v-bind:class="{'map-side-bar-open': isSideBarOpen}">
    <div v-bind:style="{'background-image': 'url('+mapPath+')'}" class="map">
      <map-marker v-for="item in markList"></map-marker>
    </div>
  </div>
</template>

<script>
  import API from '../../../config/request'
  import MapMarker from './MapMarker.vue'

  export default {
    computed: {
      isSideBarOpen() {
        return this.$store.state.layout.isSideBarOpen
      },
      mapPath() {
        if (this.$store.state.layout.sideBarList.length !== 0) {
          return 'http://' + this.$store.state.layout.sideBarList[parseInt(this.$store.state.layout.selectedSide)].MapPath
        } else {
          return ''
        }
      }
    },
    data () {
      return {
        markList: [1, 2]
      }
    },
    created () {

    },
    components: {
      MapMarker
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .map-container {
    height: 100%;
    width: 100%;
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;

    .map {
      height: 100%;
      width: 100%;
      background-size: 100% 100%;
    }

  }

  .map-side-bar-open {
    padding-right: 260px;
  }
</style>
