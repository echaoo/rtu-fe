<template>
  <div class="side-container animated" v-bind:class="{'fadeOutLeft': !isSideBarOpen, 'fadeInLeft': isSideBarOpen}">
    <el-menu theme="dark" default-active="2" class="menu" @select="handleClick">
      <el-menu-item v-for="(item, index) in sideBarConf.sideBarList" :index="index"><i class="el-icon-menu"></i>{{item[sideBarConf.index]}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import API from '../../config/request'

  export default {
    computed: {
      isSideBarOpen() {
        return this.$store.state.layout.isSideBarOpen;
      },
      sideBarConf() {
        return this.$store.state.layout.sideBarConf;
      }
    },
    created () {
      this.$http.get(API.block).then(
        response => {
          if (response.data.status === '0') {
            this.blockInfo = response.data.data;
          }
        })
    },
    methods: {
      handleClick(index) {
        console.log(123)
        console.log(index)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .side-container {
    position: absolute;
    height: 100%;
    width: 260px;
    display: inline-block;
    overflow: hidden;

    .menu {
      height: 100%;
      width: 280px;
      overflow: scroll;
      padding-bottom: 60px;
    }
  }
</style>
