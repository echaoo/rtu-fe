<template>
  <div class="side-container" v-if="isSideBarOpen">
    <el-menu theme="dark" default-active="2" class="menu">
      <el-menu-item v-for="item in blockInfo" :index="item.ID"><i class="el-icon-menu"></i>{{item.Name}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import API from '../../config/request'

  export default {
    computed: {
      isSideBarOpen() {
        return this.$store.state.layout.isSideBarOpen;
      }
    },
    data () {
      return {
        blockInfo: []
      }
    },
    created () {
      this.$http.get(API.block).then(
        response => {
          if (response.data.status === '0') {
            this.blockInfo = response.data.data;
          }
        })
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .side-container {
    position: absolute;
    height: 100%;
    width: 260px;
    display: inline-block;

    .menu {
      height: 100%;
    }
  }
</style>
