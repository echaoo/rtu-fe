<template>
  <div>
    <div class="head-title">
      <span class="head-left">实时曲线</span>
      <span class="head-right">
        <span>选择曲线参数：</span>
        <span>
          <el-select v-model="value" placeholder="请选择" @change="getCurveData(value)">
    <el-option v-for="(item, index) in parameter" :key="index" :label="item" :value="item">
    </el-option>
  </el-select>
        </span>
      </span>
    </div>
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="row">
        <div class="col-lg-12">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>油井报警信息记录</h5>
            </div>
            <div class="ibox-content" id="lineChart" style="overflow: hidden;">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //  import singleWell from '../../../api/singleWell'
  import API from '../../../config/request'
  import * as echarts from "echarts"
  export default {
    data () {
      return {
        selected: '',
        parameter: [],
        value: ''
      }
    },
    mounted () {
      this.$http.get(API.parameter).then(res => {
        this.parameter = res.data.data
      });
      this.$store.commit('setIsNowTime', true)
      this.$store.commit('setNavSwitch', false)
    },
    computed: {
      blockId() {
        return this.$store.state.layout.blockId
      }
    },
    methods: {
      getCurveData (val) {
        this.$http.post(API.initialization, {wellid: this.blockId, parameter: val}).then(res => {
          console.log(res.data.data)
          this.paintLineChart(res.data.unit, res.data.data)
        })
      },
      paintLineChart (unit, data) {
        let xdata =  this.settleData(data, 'Key', '时间')
        let ydata =  this.settleData(data, 'Value', unit)
        console.log(xdata)
        let myChart = echarts.init(document.getElementById('lineChart'))
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
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xdata
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:'时间',
              type:'line',
              data:ydata
            }
          ]
        }
        myChart.setOption(option)
      },
      settleData (data, key, unit) {
        let arr = []
        for (let i = 0; i < data.length; i++) {
          if (i === data.length -1) {
            data[i][key] = data[i][key] + '  ' + unit
          }
          arr.push(data[i][key])
//          console.log(data[i])
        }
        return arr
      }
    }
  }
</script>
<style scoped>
  .head-title {
    height: 60px;
    padding: 15px 30px;
    background-color: #fff;
  }

  .head-left {
    font-size: 20px;
  }

  .head-right {
    float: right;
    font-size: 16px;
  }

  .ibox-content {
    background-color: #ffffff!important;
    color: inherit;
    height: 335px !important;
    padding: 15px 20px 20px 20px;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0;
  }
</style>
