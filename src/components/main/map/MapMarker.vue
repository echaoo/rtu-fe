<template>
  <div class="mark-container" v-bind:style="{'left': markConf.left, 'top': markConf.top}">
    <div class='pin' :style="{background: statusToColor(markConf.status)}"><span class="num">{{markConf.name}}</span>
    </div>
    <div :class='statusToClass(markConf.status)'></div>
  </div>
</template>

<script>
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
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @breathe-color: #0cda32;
  @dead-color: #000000;
  @bad-color: #da020f;
  @warn-color: #e8be04;

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
