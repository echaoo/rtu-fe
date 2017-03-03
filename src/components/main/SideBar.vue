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

  @-webkit-keyframes fadeMiniNav {
    0% {
      opacity: 1;
      width: 220px;
    }

    50% {
      opacity: 0.8;
    }

    100% {
      opacity: 1;
      width: 70px;
      /*display: block;*/
    }
  }

  @keyframes fadeMiniNav {
    0% {
      opacity: 1;
      width: 220px;
    }

    50% {
      opacity: 0.8;
    }

    100% {
      opacity: 1;
      width: 70px;
      /*display: block;*/
    }
  }

  .fadeMiniNav {
    -webkit-animation-name: fadeMiniNav;
    animation-name: fadeMiniNav;
  }

  @-webkit-keyframes fadeFullNav {
    from {
      0% {
        opacity: 1;
        width: 70px;
      }

      50% {
        opacity: 0.8;
      }

      100% {
        opacity: 1;
        width: 220px;
      }
    }
  }

  @keyframes fadeFullNav {
    0% {
      opacity: 1;
      width: 70px;
    }

    50% {
      opacity: 0.8;
    }

    100% {
      opacity: 1;
      width: 220px;
    }
  }

  .fadeFullNav {
    -webkit-animation-name: fadeFullNav;
    animation-name: fadeFullNav;
  }
</style>
