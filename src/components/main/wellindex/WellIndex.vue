<template>
  <div id="wellindex">
    <div class="breadcrumb">
      <el-breadcrumb separator="/" style="align-items: center">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="wi-content">
      <el-row :gutter="20" style="margin-bottom: 20px">
        <el-col :span="6">
          <div class="well-transform" style="background-color: #fff">
            <span class="pidai pidai1"></span>
            <img src="../../../assets/main/peizhong1.png" alt="" class="peizhong">
            <span class="well-label">
              <span>上行冲程: 0.01m</span><br/>
              <span>上行冲程: 0.01m</span><br/>
              <span class="margin">上行冲程: 0.01m</span><br/>
              <span>上行冲程: 0.01m</span><br/>
              <span class="margin">上行冲程: 0.01m</span>
            </span>
            <img src="../../../assets/main/jingjiaqianduan1.png" alt="" class="jingjia">
            <span class="pidai pidai2"></span>
            <span class="jingkou">
              <span class="pidai top"></span>
              <span class="huosai"></span>
              <span class="huosai huosai1"></span>
              <img src="../../../assets/main/bang.png" alt="" class="line">
              <span class="bengjing"></span>
            </span>
            <span class="dis">5100米</span>
            <span class="dis-line"></span>
            <img src="../../../assets/main/beng.png" alt="" class="beng">
            <span class="beng-label">泵径：144mm</span>
          </div>
        </el-col>
        <el-col :span="18">
          <el-row :gutter="20" style="margin-bottom: 20px">
            <el-col :span="12">
              <div class="wellindex-chart">
                <div class="ibox float-e-margins margin-bottom">
                  <div class="ibox-title new-title">
                    <h5 style="display: inline-block;">油井基本信息</h5>
                    <span class="date"></span>
                  </div>
                  <div class="ibox-content" style="padding: 10px 20px 20px 15px">
                    <div class="ct-perfect-fourth">
                      <p class="well-row">
                        <span class="left">位置</span>
                        <span class="right">暂无</span>
                      </p>
                      <p class="well-row">
                        <span class="left">位置</span>
                        <span class="right">暂无</span>
                      </p>
                      <button class="optimize">人工智能优化</button>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="wellindex-chart">
                <div class="ibox float-e-margins margin-bottom">
                  <div class="ibox-title new-title">
                    <h5 style="display: inline-block;">基本控制</h5>
                    <span class="date"></span>
                  </div>
                  <div class="ibox-content" style="padding: 10px 20px 20px 15px">
                    <div class="ct-perfect-fourth">
                      <button class="optimize launch">启动</button>
                      <button class="optimize stop">停止</button>
                      <button class="optimize control">急停</button>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <div class="wellindex-chart">
                <div class="ibox float-e-margins margin-bottom">
                  <div class="ibox-title new-title">
                    <h5 style="display: inline-block;">油井基本信息</h5>
                  </div>
                  <div class="ibox-content" style="padding: 10px 20px 20px 15px;height: 345px;">
                    <div class="chart">
                      <line-chart :chart-data="chartData" :chart-id="id"></line-chart>
                    </div>
                    <span class="slider">
                    <span class="slider-label-left" style="width: 120px"> {{ chartTime[0] }}</span>
                    <span class="slider-label-right" style="width: 120px">{{ chartTime[chartTime.length - 1] }}</span>
                      <!--<span class="dot" v-for="(item, index) in new Array(chartTime.length)"-->
                      <!--v-bind:style="{ left: (100/chartTime.length)*index + '%'}"></span>-->
                      <el-slider
                        v-model="sliderTime"
                        show-stops
                        v-on:change="changeEvent"
                        :format-tooltip="formatTooltip"
                        :max="maxValue">
                      </el-slider>
                  </span>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-bottom: 20px">
        <el-col :span="8">
          <div class="wellindex-chart">
            <div class="ibox float-e-margins margin-bottom">
              <div class="ibox-title new-title">
                <h5 style="display: inline-block;">油井基本信息</h5>
              </div>
              <div class="ibox-content" style="padding: 10px 20px 20px 15px;">
                <div class="ct-perfect-fourth" style="height: 197px">
                  <div class="first">
                    <dash-board chart-id="dash1" :data="phl" title="平衡率"></dash-board>
                  </div>
                  <div class="first">
                    <dash-board chart-id="dash2" :data="xtxl" title="系统效率"></dash-board>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="wellindex-chart">
            <div class="ibox float-e-margins margin-bottom">
              <div class="ibox-title new-title">
                <h5 style="display: inline-block;">调节冲程</h5>
              </div>
              <div class="ibox-content" style="padding: 10px 20px 20px 15px">
                <div class="ct-perfect-fourth" style="height: 197px">
                  <span class="slider" style="margin: 43px 0">
                    <span class="slider-label-left">1米</span>
                    <span class="slider-label-right">5米</span>
                      <el-slider
                        v-model="sliderValue"
                        range
                        show-stops
                        :max="5">
                      </el-slider>
                  </span>
                  <button class="optimize">确定</button>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="wellindex-chart">
            <div class="ibox float-e-margins margin-bottom">
              <div class="ibox-title new-title">
                <h5 style="display: inline-block;">调节冲次</h5>
                <span class="date"></span>
              </div>
              <div class="ibox-content" style="padding: 10px 20px 20px 15px;">
                <div class="ct-perfect-fourth">
                  <span class="slider-title">上行冲次</span>
                  <span class="slider" style="margin-top: 0">
                    <span class="slider-label-left slider-width">1次/分</span>
                    <span class="slider-label-right slider-width">5次/分</span>
                      <el-slider
                        v-model="sliderValue"
                        range
                        show-stops
                        :max="5">
                      </el-slider>
                  </span>
                  <span class="slider-title">下行冲次</span>
                  <span class="slider" style="margin-top: 10px">
                    <span class="slider-label-left slider-width">1次/分</span>
                    <span class="slider-label-right slider-width">5次/分</span>
                      <el-slider
                        v-model="sliderValue"
                        range
                        show-stops
                        :max="5">
                      </el-slider>
                  </span>
                  <button class="optimize" style="margin-top: 10px">确定</button>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="wellindex-chart">
            <div class="ibox float-e-margins margin-bottom">
              <div class="ibox-title new-title">
                <h5 style="display: inline-block;">载荷变化图</h5>
                <span class="right-select">
                  <select v-model="loadSelect" v-on:change="changeData">
                    <option value="1">6h</option>
                    <option value="2">12h</option>
                    <option value="4">24h</option>
                  </select>
                </span>
              </div>
              <div class="ibox-content" style="padding: 10px 20px 20px 15px;">
                <div class="ct-perfect-fourth">
                  <bar-chart :chart-data="loadData" chart-id="load" name="载荷(KN)" :label="loadLabel"></bar-chart>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="wellindex-chart">
            <div class="ibox float-e-margins margin-bottom">
              <div class="ibox-title new-title">
                <h5 style="display: inline-block;">功率变化图</h5>
                <select v-model="powSelect" v-on:change="changePowData">
                  <option value="1">6h</option>
                  <option value="2">12h</option>
                  <option value="4">24h</option>
                </select>
              </div>
              <div class="ibox-content" style="padding: 10px 20px 20px 15px">
                <div class="ct-perfect-fourth">
                  <bar-chart :chart-data="powData" chart-id="pow" name="功率(KN)" :label="powLabel"></bar-chart>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="wellindex-chart">
            <div class="ibox float-e-margins margin-bottom">
              <div class="ibox-title new-title">
                <h5 style="display: inline-block;">ABC三相电压有效值</h5>
              </div>
              <div class="ibox-content" style="padding: 10px 20px 20px 15px;">
                <div class="ct-perfect-fourth">
                  <line-valuechart :chart-data="voltdata" chart-id="vol"></line-valuechart>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="wellindex-chart">
            <div class="ibox float-e-margins margin-bottom">
              <div class="ibox-title new-title">
                <h5 style="display: inline-block;">功率变化图</h5>
                <select v-model="powSelect" v-on:change="changePowData">
                  <option value="1">6h</option>
                  <option value="2">12h</option>
                  <option value="4">24h</option>
                </select>
              </div>
              <div class="ibox-content" style="padding: 10px 20px 20px 15px">
                <div class="ct-perfect-fourth">
                  <line-valuechart :chart-data="currData" chart-id="curr"></line-valuechart>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import LineChart from '../indicator/LineChart.vue'
  import DashBoard from './DashBoard.vue'
  import BarChart from './BarChart.vue'
  import LineValuechart from './LineValuechart.vue'
  import API from '../../../config/request'

  export default {
    data () {
      return {
        allData: [],
        chartData: {
          axisData: [],
          yaxisData: [],
          id: ''
        },
        chartTime: [],
        sliderValue: [2, 3],
        sliderTime: 0,
        left: [],
        id: 'chart0',
        maxValue: 0,
        phl: 0,
        xtxl: 0,
        loadData: {},
        powData: {},
        loadSelect: 1,
        powSelect: 1,
        loadLabel: ['最大载荷', '最小载荷'],
        powLabel: ['有功功率', '无功功率'],
        voltdata: [],
        currData: []
      }
    },
    methods: {
      getIndd () {
        //todo: wellid 的获取
        this.$http.post(API.getIndd, {wellid: 1}).then(
          function (res) {
            if (res.data.status === '0') {
//              console.log(res)
              this.allData = res.data.data;
              let obj = this.setChartData(this.allData)
              this.chartData.axisData = obj.xdata
              this.chartData.yaxisData = obj.ydata
              this.chartTime = obj.time
              this.maxValue = parseInt(this.chartTime.length - 1)
              this.loadData = this.setLoadData(obj.time, obj.load1, obj.load2, 1)
            }
          })
      },
      getimportant () {
        this.$http.post(API.getimportant, {wellid: 1}).then(
          function (res) {
            if (res.data.status === '0') {
              let data = res.data.data
              this.phl = parseInt(data[0].Calc001)
              this.xtxl = parseInt(data[0].Calc002)
              let obj1 = this.setImportantData(data)
              this.powData = this.setLoadData(obj1[0], obj1[1], obj1[2], 1)
              let tempArr = []
              tempArr.push(obj1[0])
              tempArr.push(obj1[3])
              tempArr.push(obj1[4])
              tempArr.push(obj1[5])
              this.voltdata = tempArr
            }
          })
      },
      getcurr () {
        this.$http.post(API.getcurr, {wellid: 1}).then(
          function (res) {
            if (res.data.status === '0') {
              let data = res.data.data
              let obj = this.setCurrData(data)
              this.currData = obj
              console.log(typeof this.currData)
            }
          })
      },
      setChartData (data) {
        let obj = {xdata: [], ydata: [], time: [], load1: [], load2: []}
        for (let i = 0; i < data.length; i++) {
          let xdata = ''
          let ydata = ''
          let t1 = (data[i].Time.split('('))[1].split(')');
          let t2 = new Date(parseInt(t1[0]));
          xdata = (data[i].MW4097 + data[i].MW4107 + data[i].MW4117 + data[i].MW4127 + data[i].MW4137 + data[i].MW4147 + data[i].MW4157 + data[i].MW4167 + data[i].MW4177 + data[i].MW4187 + data[i].MW4197 + data[i].MW4207 + data[i].MW4217 + data[i].MW4227 + data[i].MW4237 + data[i].MW4247 + data[i].MW4257 + data[i].MW4267 + data[i].MW4277 + data[i].MW4287).split(' ').map(function (x) {
            return (parseInt(x) / 1000)
          })
          ydata = (data[i].MW4297 + data[i].MW4307 + data[i].MW4317 + data[i].MW4327 + data[i].MW4337 + data[i].MW4347 + data[i].MW4357 + data[i].MW4367 + data[i].MW4377 + data[i].MW4387 + data[i].MW4397 + data[i].MW4407 + data[i].MW4417 + data[i].MW4427 + data[i].MW4437 + data[i].MW4447 + data[i].MW4457 + data[i].MW4467 + data[i].MW4477 + data[i].MW4487).split(' ').map(function (x) {
            return (parseInt(x) / 100)
          })
          let datatime = t2.getFullYear() + '/' + (parseInt(t2.getMonth()) + 1) + '/' + t2.getDate() + ' ' + t2.getHours() + ':' + t2.getMinutes() + ':' + t2.getSeconds();
          obj.xdata.push(xdata)
          obj.ydata.push(ydata)
          obj.time.push(datatime)
          obj.load1.push(data[i].MW4095)
          obj.load2.push(data[i].MW4096)
        }
        return obj
      },
      setImportantData (data) {
          let obj = []
          let time = []
          let pow1 = []
          let pow2 = []
          let voltdata1 = []
          let voltdata2 = []
          let voltdata3 = []
          let tempdata1 = []
          let tempdata2 = []
        for (let i = 0; i < data.length; i++) {
          let t1 = (data[i].Time.split('('))[1].split(')');
          let t2 = new Date(parseInt(t1[0]));
          let datatime = t2.getFullYear() + '/' + (parseInt(t2.getMonth()) + 1) + '/' + t2.getDate() + ' ' + t2.getHours() + ':' + t2.getMinutes() + ':' + t2.getSeconds();
          time.push(datatime)
          pow1.push(data[i].MW1041)
          pow2.push(data[i].MW1042)
          voltdata1.push([datatime, parseInt(data[i].MW1035) / 10])
          voltdata2.push([datatime, parseInt(data[i].MW1036) / 10])
          voltdata3.push([datatime, parseInt(data[i].MW1037) / 10])
          tempdata1.push(data[i].MW1010);
          tempdata2.push(data[i].MW1008);
        }
        obj.push(time.reverse())
        obj.push(pow1)
        obj.push(pow2)
        obj.push(voltdata1.reverse())
        obj.push(voltdata2.reverse())
        obj.push(voltdata3.reverse())
        obj.push(tempdata1)
        obj.push(tempdata2)
        return obj
      },
      setCurrData (data) {
        let obj = []
        let timedata = []
        let currdataA = []
        let currdataB = []
        let currdataC = []
        for (let i = 0; i < data.length; i++) {
          let t1 = (data[i].Time.split('('))[1].split(')');
          let t2 = new Date(parseInt(t1[0]));
          let datatime = t2.getFullYear() + '/' + (parseInt(t2.getMonth()) + 1) + '/' + t2.getDate() + ' ' + t2.getHours() + ':' + t2.getMinutes() + ':' + t2.getSeconds();
          timedata.push(datatime)
          currdataA.push([datatime, parseInt(data[i].MW1172) / 10])
          currdataB.push([datatime, parseInt(data[i].MW1173) / 10])
          currdataC.push([datatime, parseInt(data[i].MW1174) / 10])
        }
        obj.push(timedata.reverse())
        obj.push(currdataA.reverse())
        obj.push(currdataB.reverse())
        obj.push(currdataC.reverse())
        return obj
      },
      changeEvent (value) {
        this.id = 'chart' + value
        console.log(this.id)
      },
      formatTooltip (val) {
//        let index = this.sliderTime.indexOf(val)
        return this.chartTime[val] // 格式化返回值
      },
      setLoadData (time, load1, load2, t) {
        let s = time
        let loadone = load1
        let loadtwo = load2
        let timedata = []
        let loaddata1 = []
        let loaddata2 = []
        for (let i = 0; i < 6; i++) {
          let j = parseInt(s.length - 2) - parseInt(i * t);
          if (j >= 0) {
            timedata[5 - i] = (s[i].split(' '))[0] + "\n" + (s[i].split(' '))[1];
            loaddata1[5 - i] = loadone[i];
            loaddata2[5 - i] = loadtwo[i];
          }
          else {
            timedata[5 - i] = '0000/00/00\n00:00:00';
            loaddata1[5 - i] = 0;
            loaddata2[5 - i] = 0;
          }
        }
        return {timeData: timedata, loadData1: loaddata1, loadData2: loaddata2}
      },
      changeData () {
        let obj = this.setChartData(this.allData)
        let val = this.loadSelect
        this.loadData = this.setLoadData(obj.time, obj.load1, obj.load2, val)
      },
      changePowData () {
        let obj = this.setImportantData(this.allData)
        let val = this.powSelect
        this.powData = this.setLoadData(obj.time, obj.pow1, obj.pow2, val)
      }
    },
    mounted () {
      this.getIndd()
      this.$store.commit('setIsNowTime', true)
      this.getimportant()
      this.getcurr()
    },
    components: {
      LineChart,
      DashBoard,
      BarChart,
      LineValuechart
    }
  }
</script>
<style scoped>
  #wellindex {
    background-color: #f0f0f1;
  }

  .breadcrumb {
    height: 40px;
    padding: 15px 15px 25px 10px;
    /*margin-bottom: 10px;*/
    box-sizing: border-box;
    background-color: #fff;
    font-size: 14px;
    display: flex;
    overflow: hidden;
  }

  .wi-content {
    padding: 0 10px;
  }

  .well-transform {
    height: 650px;
    padding: 10px;
    position: relative;
    z-index: 3;
  }

  @keyframes pidai1 {
    0% {
      height: 300px;
    }
    50% {
      height: 40px;
    }
    100% {
      height: 300px;
    }
  }

  @keyframes pidai2 {
    0% {
      height: 40px;
    }
    50% {
      height: 300px;
    }
    100% {
      height: 40px;
    }
  }

  @keyframes jingkou {
    0% {
      top: 25px;
    }
    50% {
      top: 286px;
    }
    100% {
      top: 25px;
    }
  }

  @keyframes line {
    0% {
      height: 380px;
    }
    50% {
      height: 100px;
    }
    100% {
      height: 380px;
    }
  }

  .pidai {
    width: 16px;
    height: 20px;
    background-color: #2d3032;
    top: 70px;
    display: inline-block;
    position: absolute;
  }

  .pidai1 {
    height: 300px;
    left: 40px;
    animation: pidai1 10s infinite;
  }

  .pidai2 {
    height: 300px;
    left: 30px;
    border-left: 1px solid black;
    animation: pidai2 10s infinite;
    z-index: 5;
  }

  .jingkou {
    position: relative;
    top: 70px;
    left: 20px;
    z-index: 6;
    animation: jingkou 10s infinite;
  }

  .top {
    width: 16px;
    height: 5px;
    background-color: #a07c0a;
    position: absolute;
    border-radius: 5px;
  }

  .huosai {
    width: 5px;
    height: 5px;
    display: inline-block;
    background-color: #cb0900;
    position: absolute;
    top: 75px;
    left: 6px;
    border-radius: 3px;
  }

  .huosai1 {
    width: 10px;
    height: 3px;
    top: 85px;
    left: 3px;
  }

  .line {
    width: 2px;
    position: absolute;
    top: 80px;
    left: 7px;
    height: 370px;
    animation: line 10s infinite;
  }

  .dis {
    display: inline-block;
    width: 70px;
    height: 30px;
    padding: 3px;
    position: absolute;
    top: 470px;
    text-align: center;
    z-index: 7;
    background-color: #fff;
    border-top: 3px solid #666;
    border-bottom: 3px solid #666;
  }

  .dis-line {
    display: inline-block;
    height: 45px;
    border-left: 1px solid #666;
    position: absolute;
    top: 500px;
    left: 38px;
  }

  .beng {
    position: absolute;
    top: 545px;
    left: 30px;
  }

  .beng-label {
    position: absolute;
    left: 70px;
    top: 580px;
  }

  .bengjing {
    display: inline-block;
  }

  .jingjia {
    width: 96%;
    position: absolute;
    z-index: 5;
  }

  .peizhong {
    position: absolute;
    z-index: 2;
    width: 50px;
    height: 40px;
    left: 25px;
    top: 10px;
    animation: peizhong 10s infinite;
  }

  .well-label {
    display: inline-block;
    width: 110px;
    background-color: #c9c9c9;
    position: absolute;
    top: 110px;
    left: 130px;
    padding: 4px 0 5px 5px;
    font-size: 12px;
    color: #676a6c;
    border-radius: 5px;
  }

  .margin {
    display: inline-block;
    margin-top: 20px;
  }

  @keyframes peizhong {
    0% {
      top: 365px;
    }
    50% {
      top: 100px;
    }
    100% {
      top: 365px;
    }
  }

  .wellindex-chart {
    padding: 10px;
    background-color: #fff;
  }

  .new-title {
    padding: 1px 15px 7px;
    height: 38px;
    min-height: 38px;
  }

  .right-select {
    float: right;
    margin-top: 5px;
    margin-right: 30px;
  }

  .first {
    width: 49%;
    display: inline-block;
  }

  .well-row {
    border-bottom: 1px solid #e7eaec;
    margin: 0;
    padding: 10px 0;
  }

  .chart {
    width: 100%;
    height: 260px !important;
  }

  .right {
    float: right;
    right: 40px;
  }

  .optimize {
    width: 100%;
    height: 25px;
    background-color: #2ea77f;
    color: #fff;
    border: none;
    margin-top: 30px;
    outline: none;
  }

  .launch {
    margin-top: 15px;
    height: 30px;
    background-color: #1f6dc0;
  }

  .stop {
    margin-top: 15px;
    height: 30px;
    background-color: #f09d39;
  }

  .control {
    margin-top: 15px;
    height: 31px;
    background-color: #df3e52;
  }

  .margin-bottom {
    margin-bottom: 0;
  }

  .slider {
    display: inline-block;
    width: 100%;
    margin: 25px 0 0 0;
    position: relative;
  }

  .slider-label-left {
    /*position: absolute;*/
    /*top: 0;*/
    display: inline-block;
    width: 35px;
    height: 20px;
    text-align: center;
    font-size: 12px;
    background-color: #f0f0f1;
    color: #333;
    padding: 3px;
    margin-left: -20px;
  }

  .slider-label-right {
    /*position: absolute;*/
    /*top: 0;*/
    display: inline-block;
    width: 35px;
    height: 20px;
    text-align: center;
    font-size: 12px;
    background-color: #f0f0f1;
    color: #333;
    padding: 3px;
    float: right;
    margin-right: -20px;
  }

  .dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: #2987fe;
    border-radius: 50%;
    position: absolute;
    top: 35px;
  }

  .slider-width {
    width: 50px;
  }

  .slider-title {
    font-size: 12px;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
