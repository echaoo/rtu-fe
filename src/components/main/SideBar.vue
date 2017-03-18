<template>
  <div class="side-container animated" v-bind:class="{'fadeMiniNav': !isSideBarOpen, 'fadeFullNav': isSideBarOpen}">

    <div class="logo-area">
      <img src="../../assets/main/CXSYIcon.png" alt="">
      <span v-show="isSideBarOpen">创新石油</span>
    </div>

    <el-menu theme="dark" :default-active="activeIndex" class="menu" @select="handleClick" :router=true>
      <div v-if="navSwitch">
        <el-menu-item index="map" :route="{name: 'map'}"><i class="el-icon-picture"></i><span v-show="isSideBarOpen">地图</span></el-menu-item>
        <el-menu-item index="indicator" :route="{name: 'indicator'}"><i class="el-icon-setting"></i><span v-show="isSideBarOpen">示功图</span></el-menu-item>
        <el-menu-item index="warnlog" :route="{name: 'warnlog'}"><i class="el-icon-warning"></i><span v-show="isSideBarOpen">报警信息</span></el-menu-item>
        <el-menu-item index="welllist" :route="{name: 'welllist'}"><i class="el-icon-more"></i><span
          v-show="isSideBarOpen">井列表</span></el-menu-item>
      </div>
      <div v-if="!navSwitch">
        <el-menu-item index="index"><i class="xds-icon fa fa-home"></i><span v-show="isSideBarOpen">首页</span></el-menu-item>
        <el-submenu index="curve">
          <template slot="title"><i class="xds-icon fa fa-line-chart"></i>曲线</template>
          <el-menu-item index="realcurve">实时曲线</el-menu-item>
          <el-menu-item index="historycurve">历史曲线</el-menu-item>
        </el-submenu>
        <el-submenu index="record">
          <template slot="title"><i class="xds-icon fa fa-edit"></i>记录</template>
          <el-menu-item index="1-1">报警记录</el-menu-item>
          <el-menu-item index="1-2">操作记录</el-menu-item>
        </el-submenu>
        <el-menu-item index="regulation"><i class="xds-icon fa fa-rss"></i><span v-show="isSideBarOpen">遥调</span></el-menu-item>
        <el-submenu index="sigleIndicator">
          <template slot="title"><i class="xds-icon fa fa-area-chart"></i>示功图</template>
          <el-menu-item index="1-1">历史示功图</el-menu-item>
          <el-menu-item index="1-2">示功图对比</el-menu-item>
        </el-submenu>
        <el-menu-item index="regulation"><i class="xds-icon fa fa-database"></i><span v-show="isSideBarOpen">全部数据</span></el-menu-item>
        <el-menu-item index="regulation"><i class="xds-icon fa fa-android"></i><span v-show="isSideBarOpen">智能模块</span></el-menu-item>
        <el-menu-item index="regulation"><i class="xds-icon fa fa-file-text"></i><span v-show="isSideBarOpen">数据报表</span></el-menu-item>
      </div>
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
      },
      navSwitch() {
        return this.$store.state.layout.showIndex
      }
    },
    methods: {
      handleClick() {

      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .el-submenu i {
    margin-right: 10px;
  }

  .el-menu-item i {
    margin-right: 10px;
  }

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
