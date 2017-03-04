<template>
  <div class="side-container animated" v-bind:class="{'fadeMiniNav': !isSideBarOpen, 'fadeFullNav': isSideBarOpen}">

    <div class="logo-area">
      <img src="../../assets/main/CXSYIcon.png" alt="">
      <span>创新石油</span>
    </div>

    <el-menu theme="dark" default-active="0" class="menu" @select="handleClick" :router=true>
      <el-menu-item index="map" :route="{name: 'map'}">地图</el-menu-item>
      <el-menu-item index="indicator" :route="{name: 'indicator'}">示功图</el-menu-item>
      <el-menu-item index="warnlog" :route="{name: 'warnlog'}">报警信息</el-menu-item>
      <el-menu-item index="welllist" :route="{name: 'welllist'}">井列表</el-menu-item>
    </el-menu>
  </div>
</template>

<script>


  export default {
    computed: {
      activeIndex() {
        return this.$route.name
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
