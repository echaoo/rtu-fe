<template>
  <div class="mark-container" v-bind:style="{'left': markConf.left, 'top': markConf.top}">
    <el-popover
      ref="popover2"
      placement="right"
      width="400"
      trigger="click"
      @hide="hideEle">
      <div class="well-title">
        <span style="margin: 0 20px 0 10px;color: #1f6dc0;font-size: 14px">当前油井：{{markConf.name}}</span>
        <span v-if="!done">
          <el-button size="small" type="primary" @click="goWellindex(markConf.name)">现场</el-button>
        </span>
      </div>
      <div class="well-body" v-if="done">
        <p><span>当前油井:{{markConf.name}}</span><span>时间：{{alldata.Datetime}}</span></p>
        <div style="width: 350px;">
          <line-chart :chart-data="chartData" :chart-id="chartId"></line-chart>
          <p>
            <span class="text">冲程：{{ alldata.Stroke }}</span>
            <span>冲次：{{ alldata.Jig }}</span>
          </p>
          <p>
            <span class="text">上行冲刺：{{ alldata.Up_Jig }}</span>
            <span>下行冲刺：{{ alldata.Down_Jig }}</span>
          </p>
        </div>
      </div>
      <div v-if="!done" style="margin-top: 20px"><p>该油井不存在！</p></div>
    </el-popover>
    <div class='pin' v-on:click="getWellData(markConf.name)" v-popover:popover2
         :style="{background: statusToColor(markConf.status)}"><span class="num">{{markConf.name}}</span>
    </div>
    <div :class='statusToClass(markConf.status)'></div>
  </div>
</template>

<script>
  import LineChart from '../indicator/LineChart.vue'
  import API from '../../../config/request'
  export default {
    props: {
      markConf: {
        type: Object,
        default() {
          return {
            name: '02',
            id: 1,
            top: '20%',
            left: '50%',
            status: 'dead'
          }
        }
      }
    },
    data () {
      return {
        chartData: {
          axisData: [],
          yaxisData: [],
          id: ''
        },
        alldata: {Datetime: ''},
        done: false,
        chartId: 'chart0'
      }
    },
    methods: {
      statusToClass(status) {
        switch (status) {
          case 'breathe':
            return 'pulse-breathe'
          case 'bad':
            return 'pulse-bad'
          case 'warn':
            return 'pulse-warn'
          case 'dead':
            return 'pulse-dead'
        }
      },
      statusToColor(status) {
        switch (status) {
          case 'breathe':
            return '#0cda32'
          case 'bad':
            return '#da020f'
          case 'warn':
            return '#e8be04'
          case 'dead':
            return '#000000'
        }
      },
      goWellindex (id) {
        this.$store.commit('getBlockId', id);
        this.$router.push('wellindex')
      },
      getWellData (id) {
        this.$http.post(API.getWellData, {wellid: id}).then(
          function (res) {
            if (res.data.status === '0') {
              console.log(res.data.data)
              this.alldata = res.data.data
              let tempx = [];
              let tempy = [];
//              console.log(this.alldata.Data_Disp[10])
              tempx.push(this.alldata.Data_Disp);
              tempy.push(this.alldata.Data_Load);
              this.chartData.axisData = tempx;
              this.chartData.yaxisData = tempy;
              this.done = true
            }
          },
          function () {
            this.done = false
          }
        )
      },
      hideEle () {
        this.chartData.axisData = [];
        this.chartData.yaxisData = [];
        this.done = false
      }
    },
    components: {
      LineChart
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @breathe-color: #0cda32;
  @dead-color: #000000;
  @bad-color: #da020f;
  @warn-color: #e8be04;

  .well-title {
    height: 50px;
    background-color: #f5f5f5;
    margin: -10px;
    padding: 10px 0;
  }

  .well-body {
    text-align: center;
    margin-top: 15px;

    .text {
      display: inline-block;
      width: 180px;
      text-align: left;
    }
  }

  .pulse-after(@color) {
    content: "";
    border-radius: 50%;
    height: 40px;
    width: 40px;
    position: absolute;
    margin: -13px 0 0 -13px;
    animation: pulsate 1s ease-out;
    animation-iteration-count: infinite;
    opacity: 0;
    box-shadow: 0 0 1px 2px @color;
  }

  .mark-container {
    display: inline-block;
    position: relative;

    .num {
      display: block;
      transform: rotate(45deg);
      position: absolute;
      left: 6px;
      z-index: 99;
      top: 5px;
      width: 100%;
      margin-left: -7px;
      text-align: center;
    }

    body {
      background: #222222;
    }

    .pin {
      width: 30px;
      height: 30px;
      border-radius: 50% 50% 50% 0;
      background: red;
      position: absolute;
      transform: rotate(-45deg);
      margin: -33px 0 0 -8px;
    }

    .pin:hover {
      width: 40px;
      height: 40px;
      margin: -46px 0 0 -13px;
      z-index: 2;

      .num {
        position: absolute;
        left: 12px;
        z-index: 99;
        top: 11px;
        width: 100%;
        margin-left: -13px;
        text-align: center;
      }
    }

    .pin:hover:after {
      width: 20px;
      height: 20px;
      margin: 10px 0 0 10px;
    }

    .pin:after {
      content: "";
      width: 14px;
      height: 14px;
      margin: 8px 0 0 8px;
      background: #eef1f6;
      position: absolute;
      border-radius: 50%;
    }

    .pulse {
      background: #37353a;
      border-radius: 50%;
      height: 14px;
      width: 14px;
      -webkit-transform: rotateX(55deg);
      z-index: 1;
    }

    .pulse:after {
      content: "";
      border-radius: 50%;
      height: 40px;
      width: 40px;
      position: absolute;
      margin: -13px 0 0 -13px;
      animation: pulsate 1s ease-out;
      animation-iteration-count: infinite;
      opacity: 0;
      box-shadow: 0 0 1px 2px rebeccapurple;
    }

    .pulse-breathe,
    .pulse-warn,
    .pulse-dead,
    .pulse-bad {
      .mark-container .pulse;
    }

    /*四种状态对应的颜色不同*/
    .pulse-breathe:after {
      .pulse-after(@breathe-color);
    }
    .pulse-warn:after {
      .pulse-after(@warn-color);
    }
    .pulse-dead:after {
      .pulse-after(@dead-color);
    }
    .pulse-bad:after {
      .pulse-after(@bad-color);
    }

    @keyframes pulsate {
      0% {
        transform: scale(0.1, 0.1);
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      100% {
        transform: scale(1.2, 1.2);
        opacity: 0;
      }
    }
  }

</style>
