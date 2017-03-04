<template>
  <div id="indicator">
    <div class="wrapper animated fadeInRight">
      <div class="row">
        <div class="col-md-6">
          <div class="row" v-for="(item, index) in rederEven(chartMsgEven)">
            <div class="col-md-12">
              <div class="ibox float-e-margins">
                <div class="ibox-title">
                  <h5 style="display: inline-block;">油井{{ item.Well_ID }}</h5>
                  <span class="date"> {{item.Datetime}} </span>
                </div>
                <div class="ibox-content">
                  <div class="ct-perfect-fourth">
                    <line-chart :chart-data="chartData" :chart-id="chartId + (index===0?0:(index*2))"></line-chart>
                    <div class="row">
                      <div class="col-md-6">
                        <table class="table table-stripped small m-t-md">
                          <tbody>
                          <tr>
                            <td class="no-borders">
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td  class="no-borders">
                              冲&nbsp&nbsp&nbsp&nbsp程: {{item.Stroke}}(米)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              最小载荷: {{item.minload}}(KN)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              井口油压: {{item.O_Press}}(KN)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              井口温度: {{item.O_Temp}}(C)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              井口套压: {{item.Cas_Press}}(KN)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              有功功率: {{item.Actpow}}(KW)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              平衡率: {{item.Bal_Rate}}(%)
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="col-md-6">
                        <table class="table table-stripped small m-t-md">
                          <tbody>
                          <tr>
                            <td class="no-borders">
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td  class="no-borders">
                              冲&nbsp&nbsp&nbsp&nbsp次: {{item.Stroketimes}}(次)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              最大载荷: {{item.maxload}}(KN)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              汇管压力: {{item.Manif_Press}}(KN)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              汇管温度: {{item.Manif_Temp}}(C)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              功率因数: {{item.Pow_Factor}}(%)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              系统效率: {{item.Sys_Eff}}(%)
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row" v-for="(item, index) in rederOdd(chartMsgOdd)">
            <div class="col-md-12">
              <div class="ibox float-e-margins">
                <div class="ibox-title">
                  <h5 style="display: inline-block;">油井{{ item.Well_ID }}</h5>
                  <span class="date"> {{item.Datetime}} </span>
                </div>
                <div class="ibox-content">
                  <div class="ct-perfect-fourth">
                    <line-chart :chart-data="chartData" :chart-id="chartId + (index===0?1:((index*2)+1))"></line-chart>
                    <div class="row">
                      <div class="col-md-6">
                        <table class="table table-stripped small m-t-md">
                          <tbody>
                          <tr>
                            <td class="no-borders">
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td  class="no-borders">
                              冲&nbsp&nbsp&nbsp&nbsp程: {{item.Stroke}}(米)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              最小载荷: {{item.minload}}(KN)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              井口油压: {{item.O_Press}}(KN)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              井口温度: {{item.O_Temp}}(C)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              井口套压: {{item.Cas_Press}}(KN)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              有功功率: {{item.Actpow}}(KW)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              平衡率: {{item.Bal_Rate}}(%)
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="col-md-6">
                        <table class="table table-stripped small m-t-md">
                          <tbody>
                          <tr>
                            <td class="no-borders">
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td  class="no-borders">
                              冲&nbsp&nbsp&nbsp&nbsp次: {{item.Stroketimes}}(次)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              最大载荷: {{item.maxload}}(KN)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              汇管压力: {{item.Manif_Press}}(KN)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              汇管温度: {{item.Manif_Temp}}(C)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              功率因数: {{item.Pow_Factor}}(%)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fa fa-circle text-navy"></i>
                            </td>
                            <td>
                              系统效率: {{item.Sys_Eff}}(%)
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import API from '../../../config/request'
  import LineChart from './LineChart.vue'
  export default {
    data() {
      return {
        chartMsgOdd: [],
        chartMsgEven: [],
        chartData: {
          axisData: [],
          yaxisData: [],
          id: ''
        },
        chartId: 'chart',
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
            console.log(that.allData)
            let tempx= [];
            let tempy= [];
            let tempid = [];
            for(let i = 0; i < that.allData.length; i++) {
              tempx.push(that.allData[i].Indd_Data_Disp);
              tempy.push(that.allData[i].Indd_Data_Load);
//              tempid = 'chart'+ that.allData[i].ID;
            }
            that.chartData.axisData = tempx;
            that.chartData.yaxisData = tempy;
            console.log(tempx)
//            that.chartData.id = tempid;
          }
        })
    },
    methods: {
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
    components: {
      LineChart
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .date {
    float: right;
  }

  .text-navy {
    color: #1ab394;
  }

  .m-t-md {
    margin-top: 20px;
  }

  .no-borders {
    border: none !important;
  }

  #indicator {
    background-color: #f3f3f4;
  }

  .wrapper {
    padding: 30px 30px 40px;
  }

  .ibox {
    clear: both;
    margin-bottom: 25px;
    margin-top: 0;
    padding: 0;
  }

  .ibox.collapsed .ibox-content {
    display: none;
  }

  .ibox.collapsed .fa.fa-chevron-up:before {
    content: "\f078";
  }

  .ibox.collapsed .fa.fa-chevron-down:before {
    content: "\f077";
  }

  .ibox:after,
  .ibox:before {
    display: table;
  }

  .ibox-title {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background-color: #ffffff;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 3px 0 0;
    color: inherit;
    margin-bottom: 0;
    padding: 14px 15px 7px;
    min-height: 48px;
  }

  .ibox-content {
    background-color: #ffffff;
    color: inherit;
    padding: 15px 20px 20px 20px;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0;
  }

  .ibox-footer {
    color: inherit;
    border-top: 1px solid #e7eaec;
    font-size: 90%;
    background: #ffffff;
    padding: 10px 15px;
  }

</style>
