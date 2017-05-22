<template>
  <div v-bind:id="chartId" class="test"></div>
</template>

<script>
  import * as echarts from "echarts";
  export default {
    data() {
      return {test: 'test1'}
    },
    props: {
      chartId: {
        type: String,
        default: 'barchart'
      },
      chartData: {
        type: Object,
        default () {
          return {
            id: 'barchart'
          }
        }
      },
    },
    watch: {
      chartData: {
        handler(val, oldVal){
          if (this.chartData.timeData[0] !== undefined) {
            this.paintChart();
          }
        },
        deep: true
      },
      chartId: {
        handler(val, oldVal){
          this.$nextTick(function () {
            this.paintChart ()
          })

        },
        deep: true
      }
    },
    mounted () {
      this.paintChart()
    },
    methods: {
      paintChart () {
        let myChart = echarts.init(document.getElementById(this.chartId));
        let xdata = this.chartData.timeData
        let data1 = this.chartData.loadData1
        let data2 = this.chartData.loadData2
        console.log(xdata)
        console.log(data1)
        console.log(data2)
        let option = {
          title: {
            show:false,
            left: 'center',
            text: '',
            textStyle: {
              fontSize: 1
            }
          },
          exporting: {
            enabled: true//提供下载
          },
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: 10,
            bottom: 20,
            containLabel: true
          },
          xAxis: {
            type: 'category',
            name: '时间',
            axisLine: { onZero: false },
            data: xdata,
            axisLabel: {
              //interval: 0,
            }
          },
          yAxis: {
            type: 'value',
            name: '载荷(KN)',
            axisLine: { onZero: false }
          },
          legend: {
            layout: 'vertical',
            x: 'center',
            y: 'bottom',
            borderWidth: 0,
            data: ['最大载荷', '最小载荷']
          },
          series: []
        };
        option.series = new Array();
        option.series[0] = new Object();
        option.series[0].name = '最大载荷';
        option.series[0].type = 'bar';
        option.series[0].data = data1;
        option.series[1] = new Object();
        option.series[1].name = '最小载荷';
        option.series[1].type = 'bar';
        option.series[1].data = data2;
        myChart.setOption(option);
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .test {
    width: 100%;
    height: 350px;
  }
</style>
