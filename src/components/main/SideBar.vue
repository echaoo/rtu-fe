<template>
  <div class="side-container animated" v-bind:class="{'fadeMiniNav': !isSideBarOpen, 'fadeFullNav': isSideBarOpen}">
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
    created () {

    },
    methods: {
      handleClick(index) {
        this.$store.commit('setSideBarIndex', index)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .side-container {
    position: absolute;
    top: 0;
    height: 100%;
    /*width: 220px;*/
    display: inline-block;
    overflow: hidden;

    .menu {
      height: 100%;
      /*width: 280px;*/
      overflow: scroll;
      padding-bottom: 60px;
    }
  }

  @keyframes fadeMiniNav {
    0% {
      width: 220px;
    }

    100% {
      width: 70px;
      /*display: block;*/
    }
  }

  .fadeMiniNav {
    animation-name: fadeMiniNav;
  }

  @keyframes fadeFullNav {
    0% {
      width: 70px;
    }

    100% {
      width: 220px;
    }
  }

  .fadeFullNav {
    animation-name: fadeFullNav;
  }
</style>
