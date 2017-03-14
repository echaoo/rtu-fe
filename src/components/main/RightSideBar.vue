<template>
  <div class="right-side-container animated">
    <el-menu theme="dark" default-active="0" class="menu" @select="handleClick">
      <el-menu-item index="all"><i class="el-icon-menu"></i>全部区块</el-menu-item>
      <el-menu-item v-for="(item, index) in sideBarList" :index="index.toString()"><i class="el-icon-menu"></i>{{item.Name}}
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
      sideBarList() {
        return this.$store.state.layout.sideBarList;
      }
    },
    data() {
      return {
        index: 0
      }
    },
    methods: {
      handleClick(index) {
        this.$store.commit('setSideBarIndex', index)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .right-side-container {
    position: absolute;
    float: right;
    right: 0;
    z-index: 999;
    overflow: hidden;


    .menu {
      padding-bottom: 60px;
      overflow: hidden;
    }
  }
</style>
