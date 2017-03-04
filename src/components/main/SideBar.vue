<template>
  <div class="side-container animated" v-bind:class="{'fadeMiniNav': !isSideBarOpen, 'fadeFullNav': isSideBarOpen}">

    <div class="logo-area">
      <img src="../../assets/main/CXSYIcon.png" alt="">
      <span v-show="isSideBarOpen">创新石油</span>
    </div>

    <el-menu theme="dark" :default-active="activeIndex" class="menu" @select="handleClick" :router=true>
      <el-menu-item index="map" :route="{name: 'map'}"><i class="el-icon-picture"></i><span v-show="isSideBarOpen">地图</span></el-menu-item>
      <el-menu-item index="indicator" :route="{name: 'indicator'}"><i class="el-icon-setting"></i><span v-show="isSideBarOpen">示功图</span></el-menu-item>
      <el-menu-item index="warnlog" :route="{name: 'warnlog'}"><i class="el-icon-warning"></i><span v-show="isSideBarOpen">报警信息</span></el-menu-item>
      <el-menu-item index="welllist" :route="{name: 'welllist'}"><i class="el-icon-more"></i><span v-show="isSideBarOpen">井列表</span></el-menu-item>
    </el-menu>
  </div>
</template>

<script>


  export default {
    computed: {
      isSideBarOpen() {
        return this.$store.state.layout.isSideBarOpen;
      },
      activeIndex() {
        return this.$route.name
      }
    },
    methods: {
      handleClick() {

      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .side-container {
    position: absolute;
    top: 0;
    height: 100%;
    display: inline-block;
    overflow: hidden;

    .logo-area {
      display: inline-flex;
      align-items: center;
      height: 60px;
      float: left;
      background-color: #324157;
      width: 100%;

      span {
        font-size: 20px;
        color: white;
      }

      img {
        height: 60px;
        padding: 10px;
        float: left;
        width: 60px;
      }
    }

    .menu {
      display: inline-block;
      height: 100%;
      width: 100%;
      padding-bottom: 60px;
      border-radius: 0;
    }
  }

  @keyframes fadeMiniNav {
    0% {
      width: 220px;
    }

    100% {
      width: 70px;
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
