<template>
  <div class="main-container">
    <side-bar></side-bar>
    <div class="main-box" v-bind:class="{'side-bar-open': isSideBarOpen, 'side-bar-close': !isSideBarOpen}">
      <top-bar></top-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import SideBar from './SideBar.vue'
  import TopBar from './TopBar.vue'

  export default {
    computed: {
      isSideBarOpen() {
        return this.$store.state.layout.isSideBarOpen;
      }
    },
    created() {
      this.$store.dispatch('getSideBarList')
    },
    methods: {

    },
    components: {
      SideBar,
      TopBar
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
    }

    .side-bar-close {
      margin-left: 70px;
    }

  }
</style>
