<template>
  <div class="index-container">

    <login-panel></login-panel>
  </div>
</template>

<script>
  import LoginPanel from './LoginPanel'
  export default {
      components: {
          LoginPanel
      }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .index-container {
    background: url('../../assets/bg.jpg');
    position: absolute;
    min-height: 100%;
    width: 100%;
  }
</style>
