<template>
  <div class="main-container">
    <top-bar></top-bar>
    <!--<side-bar></side-bar>-->
    <router-view></router-view>
    <button @click="logout">登出</button>
  </div>
</template>

<script>
  import SideBar from './SideBar.vue'
  import TopBar from './TopBar.vue'
  export default {
    methods: {
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
      }
    },
    components: {
      SideBar,
      TopBar
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
