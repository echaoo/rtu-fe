<template>
    <div class="carousel">
      <div class="page1" v-bind:class="fadeIn: isShow, fade: !isShow">
        <h1>大数据云测控系统</h1>
        <h2>山东创新石油技术有限公司<br/>内部研发测试版本 V.0.1</h2>
      </div>
      <div class="page2" v-bind:class="fadeIn: !isShow, fade: isShow">
        <h1>系统安全及保密协议</h1>
        <h2>本系统尚处于研发阶段，内容和技术仍处于保密阶段，研发期间，任何个人及企业用户对涉及我公司知识产权方面的内容保密义务,未经书面许可,不得以任何方式向未经授权者透露。</h2>
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
        let interval = setInterval(function () {
          isShow = !isShow
        }, 1000)
      },
      methods: {

      }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
