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
      this.paintChart()
    },
    methods: {
      paintChart () {
        let xdata = this.chartData.timeData
        let data1 = this.chartData.loadData1
        let data2 = this.chartData.loadData2
        let option = {
          chart: {
            type: 'column',
            backgroundColor: '#f8f8ff',
          },
          title: {
            text: '',
            margin: 0,
            style: {
              fontSize: '1px'
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
          yAxis: [{
            title: {
              text: '温度（℃）'
            },
            lineWidth:1
          }, {
            title: {
              text: '压力（Pa）'
            },
            lineWidth:1,
            opposite: true
          }],
          legend: {
            shadow: false
          },
          tooltip: {
            shared: true
          },
          plotOptions: {
            column: {
              grouping: false,
              shadow: false,
              borderWidth: 0
            }
          },
          series: [{
            name: '温度（℃）',
            color: 'rgba(165,170,217,1)',
            pointPadding: 0.3,
            pointPlacement: -0.2,
            data: data1
          }, {
            name: '压力（Pa）',
            color: 'rgba(126,86,134,.9)',
            pointPadding: 0.4,
            pointPlacement: -0.2,
            yAxis: 1,
            data: data2
          }]
        };
        Highcharts.chart(this.chartId, option);
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
