<template>
  <div class="index-container">
    <div class="bg-container">
      <img class="logo" src="../../assets/logo.png" alt="RTU-LOGO">
      <div class="login-area">
        <login-panel></login-panel>
      </div>
      <div class="carousel hidden-sm hidden-xs">
        <carousel-text></carousel-text>
      </div>
    </div>
    <div class="footer-container">
      <rtu-footer></rtu-footer>
    </div>
  </div>
</template>

<script>
  import LoginPanel from './LoginPanel'
  import RtuFooter from './RtuFooter.vue'
  import CarouselText from './CarouselText.vue'
  export default {
    created() {
      this.$store.dispatch('checkLogin').then(
          rs => {
            if (rs) {
                this.$router.push('main')
            }
          }
      )
    },
    components: {
      LoginPanel,
      RtuFooter,
      CarouselText
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .index-container {
    height: 100%;

    .bg-container {
      background: url('../../assets/bg.jpg') no-repeat;
      background-size: cover;
      height: 90%;
      width: 100%;

      .logo {
        margin-top: 40px;
        margin-left: 30px;
      }

      .login-area {
        float: right;
        margin-top: 100px;
        margin-right: 70px;
      }

      .carousel {
        width: 500px;
        margin-left: 8%;
        margin-top: 8%;
      }
    }

    .footer-container {
      min-height: 10%;
    }
  }
</style>
