<template>
  <div id="main"></div>
</template>

<script>
  import * as echarts from "echarts";
  export default {
    created() {
      var myChart = echarts.init(document.getElementById('main'));


    },
    methods: {

    },
    components: {
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #main {
    width: 100%;
    height: 100%;
  }
</style>
