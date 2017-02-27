<template>
  <div :id="test" class="test">

  </div>
</template>

<script>
  import * as echarts from "echarts";

  export default {
    data() {return {test: 'test1'}},
    props: {
      chartData: {
        type: Object,
        default () {
          return {
            id: 'chart1'
          }
        }
      }
    },
    mounted () {
      this.paintChart();
    },
    methods: {
      paintChart () {
        let that = this
        let myChart = echarts.init(document.getElementById(this.test));
        let option = {
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: that.chartData.axisData
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              type:'line',
              stack: '总量',
              data: that.chartData.yaxisData
            }
          ]
        };
        myChart.setOption(option);
      }
    },
    components: {
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .test {
    width: 300px;
    height: 300px;
  }
</style>
