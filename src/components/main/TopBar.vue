<template>
  <div class="top-container" v-bind:class="{'side-bar-open': iconSwitch}">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <button class="switch-btn" @click="changeSideBar">
        <i v-if="iconSwitch" class="el-icon-d-arrow-left"></i>
        <i v-if="!iconSwitch" class="el-icon-d-arrow-right"></i>
      </button>
      <!--<div class="logo-area">-->
      <!--<img src="../../assets/main/CXSYIcon.png" alt="">-->
      <!--<span>创新石油</span>-->
      <!--</div>-->
      <el-menu-item index="map">地图</el-menu-item>
      <el-menu-item index="2">示功图</el-menu-item>
      <el-menu-item index="3">报警信息</el-menu-item>
      <el-menu-item index="4">井列表</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    computed: {
      iconSwitch() {
        return this.$store.state.layout.isSideBarOpen
      }
    },
    data() {
      return {
        activeIndex: 'map'
      };
    },
    methods: {
      changeSideBar() {
        this.$store.dispatch('changeSideBar')
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .top-container {

    .el-menu {

      .switch-btn {
        float: left;
        height: 60px;
        width: 60px;
        padding: 10px;
        background: none;
        border: none;
        outline: none;
      }

      .logo-area {
        display: flex;
        align-items: center;
        height: 60px;
        float: left;
        margin-right: 20px;

        span {
          font-size: 20px;
        }

        img {
          height: 60px;
          padding: 10px;
          float: left;
          width: 60px;
        }
      }
    }
  }

  .side-bar-open {
    margin-left: 220px;
  }
</style>
