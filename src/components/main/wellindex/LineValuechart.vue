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
      chartData: {
        type: Array
      },
      chartId: {
        type: String,
        default: 'barchart'
      },
      datalabel: {
        type: Array
      },
      label1: {
        type: String
      },
      label2: {
        type: String
      },
      label3: {
        type: String
      },
      name: {
        type: String
      }
    },
    watch: {
      chartData: {
        handler(val, oldVal){
          this.paintChart();
        }
      }
    },
    mounted () {
      this.paintChart();
    },
    methods: {
      paintChart () {
        var xdata = this.chartData[0]
        var dataA = this.chartData[1]
        var dataB = this.chartData[2]
        var dataC = this.chartData[3]
        var myChart = echarts.init(document.getElementById(this.chartId));
        var option = {
          title: {
            show: false,
            left: 'center',
            text: 'ABC三相电压有效值',
            textStyle: {
              fontSize: 13
            }
          },
          exporting: {
            enabled: true//提供下载
          },
          grid: {
            left: 10,
            bottom: 20,
            containLabel: true
          },
          xAxis: {
            type: 'category',
            name: '时间',
            axisLine: {onZero: false},
            data: xdata
          },
          yAxis: {
            type: 'value',
            name: this.name,
            axisLine: {onZero: false}
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            layout: 'vertical',
            x: 'center',
            y: 'bottom',
            borderWidth: 0,
            data: this.datalabel
          },
          series: []
        };
        option.series = new Array();
        option.series[0] = new Object();
        option.series[0].name = this.label1;
        option.series[0].type = 'line';
        option.series[0].animation = false;
        option.series[0].smoth = true;
        option.series[0].symbolSize = 1;
        option.series[0].data = dataA;
        option.series[1] = new Object();
        option.series[1].name = this.label2;
        option.series[1].type = 'line';
        option.series[1].animation = false;
        option.series[1].smoth = true;
        option.series[1].symbolSize = 1;
        option.series[1].data = dataB;
        option.series[2] = new Object();
        option.series[2].name = this.label3;
        option.series[2].type = 'line';
        option.series[2].animation = false;
        option.series[2].smoth = true;
        option.series[2].symbolSize = 1;
        option.series[2].data = dataC;
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
