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
        type: Object,
        default () {
          return {
            id: 'chart1'
          }
        }
      },
      chartId: {
        type: String,
        default: 'chart1'
      }
    },
    watch: {
      chartData: {
        handler(val, oldVal){
          if (this.chartData.axisData[0] !== undefined) {
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
        let that = this
        let myChart = echarts.init(document.getElementById(that.chartId));
        let data = [];
        let len = parseInt(that.chartId.substring(5))//根据id确定渲染哪一个图表，有待优化

        for(let i = 0; i < that.chartData.axisData[len].length; i++) {
            let temp = [];
            temp.push(that.chartData.axisData[len][i]);
            temp.push(that.chartData.yaxisData[len][i]);
            data.push(temp);
        }
        console.log(data)
        let option = {
          tooltip: {
            formatter: function (params) {
              var data = params.data || [0, 0];
              return data[0].toFixed(2) + ', ' + data[1].toFixed(2);
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '3%',
            containLabel: true
          },
          xAxis: {
            min: 0,
            max: 4.5,
            type: 'value',
            axisLine: {onZero: false}
          },
          yAxis: {
            min: 0,
            max: 25,
            type: 'value',
            axisLine: {onZero: false}
          },
          series: [
            {
              id: 'a',
              type: 'line',
              smooth: true,
              symbolSize: 1,
              data: data
            }
          ]
        };
        myChart.setOption(option);
      }
    },
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .test {
    width: 100%;
    height: 300px;
  }
</style>
