<template>
  <div v-bind:id="chartId" class="test"></div>
</template>

<script>
  import * as echarts from "echarts";
  import $ from 'jquery'
  export default {
    data() {
      return {test: 'test1'}
    },
    props: {
      chartId: {
        type: String,
        default: 'barchart'
      },
      name: {
        type: String,
        default: ''
      },
      chartData: {
        type: Object,
        default () {
          return {
            id: 'barchart'
          }
        }
      },
      label: {
        type: Array
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

    },
    methods: {
      paintChart () {
        let xdata = this.chartData.timeData
        let data1 = this.chartData.loadData1
        let data2 = this.chartData.loadData2
        let data = []
        for (let i = 0; i < xdata.length; i++) {
            data.push([data1[i], data2[i]])
        }
        let option = {
          chart: {
            type: 'columnrange',
            inverted: true,
            backgroundColor: '#f8f8ff',
          },
          title: {
            text: '',
            style: {
              fontSize: '14px'
            }
          },
          credits: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          xAxis: {
            categories: xdata
          },
          yAxis: {
            title: {
              text: '温度 ( °C )'
            }
          },
          tooltip: {
            valueSuffix: '°C'
          },
          plotOptions: {
            columnrange: {
              dataLabels: {
                enabled: true,
                formatter: function () {
                  return this.y + '°C';
                }
              }
            }
          },
          legend: {
            enabled: false
          },
          series: [{
            name: '温度',
            data: data
          }]
        };
//        $('#' + this.chartId).highcharts(option)
        Highcharts.chart(this.chartId, option)
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
