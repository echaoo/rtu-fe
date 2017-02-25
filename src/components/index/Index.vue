<template>
  <div class="index-container">
    <div class="bg-container">
      <img class="logo" src="../../assets/logo.png" alt="RTU-LOGO">
      <div class="login-area">
        <login-panel></login-panel>
      </div>
    </div>
    <rtu-footer></rtu-footer>
  </div>
</template>

<script>
  import LoginPanel from './LoginPanel'
  import RtuFooter from './RtuFooter.vue'
  export default {
    components: {
      LoginPanel,
      RtuFooter
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .index-container {
    height: 100%;

    .bg-container {
      background: url('../../assets/bg.jpg');
      height: 100%;
      width: 100%;

      .logo {
        margin-top: 40px;
        margin-left: 30px;
      }

      .login-area {
        float: right;
        margin-top: 50px;
        margin-right: 30px;
      }
    }
  }
</style>
