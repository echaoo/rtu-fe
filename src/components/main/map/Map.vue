<template>
  <div class="map-container" v-bind:style="{background: 'url('+mapPath+')'}" v-bind:class="{'map-side-bar-open': isSideBarOpen}">
    <mark-pin></mark-pin>
  </div>
</template>

<script>
  import API from '../../../config/request'
  import MarkPin from './MarkPin.vue'

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
      return {}
    },
    created () {

    },
    components: {
      MarkPin
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .map-container {
    height: 100%;
    width: 100%;
    position: absolute;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .map-side-bar-open {
    padding-right: 260px;
  }
</style>
