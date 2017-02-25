<template>
  <div class="carousel">
    <div class="page1 animated" v-bind:class="{fadeIn: isShow, fadeOut: !isShow}">
      <h1>大数据云测控系统</h1>
      <h2>山东创新石油技术有限公司</h2>
      <h2>内部研发测试版本 V.0.1</h2>
    </div>
    <div class="page2 animated" v-bind:class="{fadeIn: !isShow, fadeOut: isShow}">
      <h1>系统安全及保密协议</h1>
      <p class="info">本系统尚处于研发阶段，内容和技术仍处于保密阶段，研发期间，任何个人及企业用户对涉及我公司知识产权方面的内容保密义务,未经书面许可,不得以任何方式向未经授权者透露。</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isShow: true
      }
    },
    created () {
      let that = this;
      let interval = setInterval(function () {
        that.isShow = !that.isShow
      }, 3000)
    },
    methods: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .carousel {
    .fadeIn {
      display: block;
    }

    .page1 {
      color: #212180;
      text-align: center;
      width: 500px;

      h1 {
        font-size: 50px;
      }

      h2 {
        margin-top: 40px;
      }
    }

    .page2 {
      color: #000;
      text-align: center;
      width: 500px;

      h1 {
        font-size: 50px;
      }

      .info {
        text-align: center;
        font-size: 18px;
        line-height: 30px;
        padding: 8% 15%;
      }
    }

    .fadeOut {
      display: none;
    }
  }

</style>
