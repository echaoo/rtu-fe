<template>
  <div class="main-container">
    <side-bar></side-bar>
    <div class="main-box" v-bind:class="{'side-bar-open': isSideBarOpen, 'side-bar-close': !isSideBarOpen}">
      <top-bar></top-bar>
      <router-view></router-view>
    </div>
    <right-side-menu v-show="isRightMenuOpen"></right-side-menu>
  </div>
</template>

<script>
  import SideBar from './SideBar.vue'
  import TopBar from './TopBar.vue'
  import RightSideMenu from './RightSideBar.vue'

  export default {
    computed: {
      isSideBarOpen() {
        return this.$store.state.layout.isSideBarOpen;
      },
      isRightMenuOpen() {
        return this.$store.state.layout.isRightMenuOpen;
      }
    },
    created() {
//      this.$store.dispatch('getSideBarList')
    },
    methods: {

    },
    components: {
      SideBar,
      TopBar,
      RightSideMenu
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .main-container {
    position: relative;
    overflow: hidden;
    min-height: 100%;

    .main-box {
      height: auto;
    }

    .side-bar-open {
      margin-left: 220px;
      transition: margin-left 1s;
    }

    .side-bar-close {
      margin-left: 70px;
      transition: margin-left 1s;
    }

  }
</style>
