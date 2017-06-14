<template>
  <div>
    <div class="head-title">
      <span class="head-left">实时曲线</span>
      <span>
        <el-date-picker
          v-model="startTime"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions0">
    </el-date-picker>
        <span class="bridge">到</span>
        <el-date-picker
          v-model="endTime"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions0">
    </el-date-picker>
      </span>
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
            <div class="ibox-content" v-if="nodata" id="lineChart" style="overflow: hidden;">
              <div class="nodata" v-if="nodata">暂无数据</div>
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
        value: '',
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > (Date.now() - 8.64e7 + 3600 * 24 * 1000);
          }
          // TODO: 禁用未来的日期
        },
        startTime: '',
        endTime: '',
        nodata: true
      }
    },
    mounted () {
      this.$http.get(API.parameter).then(res => {
        this.parameter = res.data.data
      })
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
        let start = this.formatTime(this.startTime)
        let end = this.formatTime(this.endTime)
        let that = this
        this.$http.post(API.historyLineData, {wellid: this.blockId, parameter: val, starttime: start, endtime: end}).then(res => {
            if (res.data.status === '0') {
              that.nodata = false
              this.paintLineChart(res.data.unit, res.data.data)
            } else if (res.data.status === '3') {
              that.nodata = true
            }
        })
      },
      paintLineChart (unit, data) {
        let xdata = this.settleData(data, 'Key', '时间')
        let ydata = this.settleData(data, 'Value', unit)
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
              name: '时间',
              type: 'line',
              data: ydata
            }
          ]
        }
        myChart.setOption(option)
      },
      settleData (data, key, unit) {
        let arr = []
        for (let i = 0; i < data.length; i++) {
          if (i === data.length - 1) {
            data[i][key] = data[i][key] + '  ' + unit
          }
          arr.push(data[i][key])
//          console.log(data[i])
        }
        return arr
      },
      formatTime (date) {
        let str = date.toString()
        let arr = str.split(' ')
        let result = arr[3] + '/' + this.getMon(arr[1]) + '/' + arr[2] + ' ' + arr[4]
        return result
      },
      getMon (mon) {
          switch (mon) {
            case 'Jan':
                return '01'
            case 'Feb':
                return '02'
            case 'Mar':
                return '03'
            case 'Apr':
                return '04'
            case 'May':
                return '05'
            case 'Jun':
                return '06'
            case 'Jul':
                return '07'
            case 'Aug':
                return '08'
            case 'Sep':
                return '09'
            case 'Oct':
                return '10'
            case 'Nov':
                return '11'
            case 'Dec':
                return '12'
          }
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
    background-color: #ffffff !important;
    color: inherit;
    height: 335px !important;
    padding: 15px 20px 20px 20px;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0;
  }

  .bridge {
    width: 40px;
    height: 30px;
    display: inline-block;
    text-align: center;
    background-color: #eaeaea;
  }

  .nodata {
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: #666;
  }
</style>
