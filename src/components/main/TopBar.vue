<template>
  <div class="top-container">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router="true">

      <div class="logo-area">
        <img src="../../assets/main/CXSYIcon.png" alt="">
        <span>创新石油</span>
      </div>
      <el-menu-item index="map">地图</el-menu-item>
      <el-menu-item index="2">示功图</el-menu-item>
      <el-menu-item index="3">报警信息</el-menu-item>
      <el-menu-item index="4">井列表</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 'map'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .top-container {

    .el-menu {

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
</style>
