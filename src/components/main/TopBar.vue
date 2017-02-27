<template>
  <div class="top-container">
    <el-menu :default-active="activeIndex" class="" mode="horizontal" @select="handleSelect" :router=true>
      <button class="switch-btn" @click="changeSideBar">
        <i v-if="iconSwitch" class="el-icon-d-arrow-left"></i>
        <i v-if="!iconSwitch" class="el-icon-d-arrow-right"></i>
      </button>
      <div class="logo-area">
        <img src="../../assets/main/CXSYIcon.png" alt="">
        <span>创新石油</span>
      </div>
      <el-menu-item index="map" :route="{name: 'map'}">地图</el-menu-item>
      <el-menu-item index="indicator" :route="{name: 'indicator'}">示功图</el-menu-item>
      <el-menu-item index="warnlog" :route="{name: 'warnlog'}">报警信息</el-menu-item>
      <el-menu-item index="welllist" :route="{name: 'welllist'}">井列表</el-menu-item>

      <el-menu-item v-on:click="logout">登出</el-menu-item>
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
    computed: {
      activeIndex() {
          return this.$route.name
      }
    },
    methods: {
      changeSideBar() {
        this.$store.dispatch('changeSideBar')
      },
      logout() {
        this.$store.dispatch('doLogout').then(
          (rs) => {
          if (rs) {
            this.$notify({
              title: '成功',
              message: '登出成功',
              type: 'success'
            })
            this.$router.push({name: 'index'});
          }
        }
      )
      },
      handleSelect(key, keyPath) {
//        console.log(key, keyPath);
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
