<template>
  <div>
    <side-bar></side-bar>
    <button @click="logout">登出</button>
  </div>
</template>

<script>
  import SideBar from './SideBar.vue'
  export default {
    methods: {
      logout() {
        this.$store.dispatch('doLogout').then(
          (rs) => {
            console.log(rs);
            if (rs) {
              this.$router.push({name: 'index'});
            }
          }
        )
      }
    },
    components: {
      SideBar
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
