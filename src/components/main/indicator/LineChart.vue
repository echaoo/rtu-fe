<template>
  <div class="wrapper animated fadeInRight">
    <div class="row">
      <div class="col-md-6">
        <div class="row" v-for="(item, index) in rederEven(chartMsgEven)">
          <div class="col-md-12">
            <div class="ibox float-e-margins">
              <div class="ibox-title">
                <h5>油井{{ item.Well_ID }}</h5>
              </div>
              <div class="ibox-content">
                <div class="ct-perfect-fourth">
                  <div class="test" :id="'chart' + item.ID"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row" v-for="item in rederOdd(chartMsgOdd)">
          <div class="col-md-12">
            <div class="ibox float-e-margins">
              <div class="ibox-title">
                <h5>油井{{ item.Well_ID }}</h5>
              </div>
              <div class="ibox-content">
                <div id="chart" class="ct-perfect-fourth">sds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as echarts from "echarts";
  import API from '../../../config/request'

  export default {
    data() {
      return {
        chartMsgOdd: [],
        chartMsgEven: [],
        test: 'test1',
        chartData: {
          axisData: [],
          yaxisData: [],
          id: ''
        },
        allData: []
      }
    },
    created() {
      let that = this;
      let body = {
        blockid: '1',
        page: '1',
        size: '6'
      };

      this.$http.post(API.indicator, body).then(
        function (res) {
          if (res.data.status === '0')
          {
            that.chartMsgOdd = res.data.data;
            that.chartMsgEven = res.data.data;
          }
        });

      this.$http.post(API.indicator, body).then(
        function (res) {
          if (res.data.status === '0') {
            that.allData = res.data.data;
            that.chartData.axisData = that.allData[0].Indd_Data_Disp;
            that.chartData.yaxisData = that.allData[0].Indd_Data_Load;
            that.chartData.id = 'chart1';
            this.paintChart(that.chartData.id);
          }
        })
    },
    methods: {
      paintChart (id) {
        let that = this
        let myChart = echarts.init(document.getElementById(id));
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
              type: 'line',
              stack: '总量',
              data: that.chartData.yaxisData
            }
          ]
        };
//        let option = {
//
//          tooltip: {
//            trigger: 'axis',
//            formatter: "Temperature : <br/>{b}km : {c}°C"
//          },
//          grid: {
//            left: '3%',
//            right: '4%',
//            bottom: '3%',
//            containLabel: true
//          },
//          xAxis: {
//            type: 'value',
//            axisLabel: {
//              formatter: '{value} °C'
//            }
//          },
//          yAxis: {
//            type: 'category',
//            axisLine: {onZero: false},
//            boundaryGap: false,
//            data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
//          },
//          series: [
//            {
//              type: 'line',
//              smooth: true,
//              lineStyle: {
//                normal: {
//                  width: 3,
//                  shadowColor: 'rgba(0,0,0,0.4)',
//                  shadowBlur: 10,
//                  shadowOffsetY: 10
//                }
//              },
//              data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
//            }
//          ]
//        };
        myChart.setOption(option);
      },
      rederOdd (chartMsgOdd) {
        return chartMsgOdd.filter(function (item, index) {
          return index % 2 === 1;
        })
      },
      rederEven (chartMsgEven) {
        return chartMsgEven.filter(function (item, index) {
          return index % 2 === 0;
        })
      }
    },
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .test {
    width: 300px;
    height: 300px;
  }
</style>
