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
        markList: []
      }
    },
    created () {

    },
    methods: {
      // 获取油井信息
      getWellData() {
        let that = this
        this.$http.get(API.wellInfo).then(
          (res) => {
            console.log(res)
            if (res.data.status === '0') {
              // 正确的处理
              that.dealWellData(res.data.data)
            }
            else {
              // 错误的处理
            }
          },
          () => {
            // 网络错误或服务器端错误
          }
        )
      },
      // 处理油井信息 TODO：加单元测试！
      dealWellData(data) {
        for (let item of data) {
          if (markList[item.BLOCK_ID] === null) {
            markList[item.BLOCK_ID] = []
          }
          markList[item.BLOCK_ID].push({id: item.ID, name: item.Name, })
        }
      }
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
