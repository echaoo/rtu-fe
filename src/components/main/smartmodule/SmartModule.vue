<template>
  <div class="checkbox-item bottom">
    <span class="check-title"><el-button type="primary" @click="load">加载/关停</el-button>
      <span style="margin-left: 4%;display: inline-block;" v-if="!isHide">
        <span class="checkbox-left">
          <input type="checkbox" id="one" value="0" v-model="loaditems1">
        <label for="one">阶梯电价定时模块</label>
       </span>
        <span class="checkbox-left">
          <input type="checkbox" id="two" value="1" v-model="loaditems2">
          <label for="two">根据载荷改变冲程模块</label>
        </span>
        <span class="checkbox-left">
          <input type="checkbox" id="three" value="2" v-model="loaditems3">
        <label for="three">缓下模块</label>
        </span>
      </span>
    </span>
    <div class="module-item bottom" v-if="loaditems1[0]">
      <div class="title">阶梯电价定时模块</div>
      <div class="content">
        <span class="vertical">请选择低电价时段以便优化生产成本:</span>
        <span class="slider">
          <span class="slider-label-left">0:00</span>
          <span class="slider-label-right">24:00</span>
          <el-slider
            v-model="sliderValue"
            range
            show-stops
            :max="24">
          </el-slider>
        </span>
        <span class="negative-margin">改变冲次为:</span>
        <span><input type="text"></span>
        <span>次/分</span>
      </div>
      <div class="footer">
        <button class="save" @click="save">保存选择并在该时段加大冲次</button>
      </div>
    </div>
    <div class="module-item" v-if="loaditems2[0]">
      <div class="title">根据载荷改变冲程模块</div>
      <div class="content">
        <span class="negative-margin">载荷/冲程比: 载荷</span>
        <span><input type="text"></span>
        <span>/冲程</span>
        <span><input type="text"></span>
        <button class="save" @click="adjustLoad">调节冲程</button>
      </div>
    </div>
    <div class="module-item" v-if="loaditems3[0]">
      <div class="title">缓下模块</div>
      <div class="content">
        <span class="negative-margin">上行/下行速率比: 上行</span>
        <span><input type="text"></span>
        <span>/下行</span>
        <span><input type="text"></span>
        <button class="save" @click="adjustSpeed">调节速率</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loaditems1: [],
        loaditems2: [],
        loaditems3: [],
        sliderValue: [0, 24],
        isHide: true
      }
    },
    methods: {
      load () {
        this.loaditems1 = []
        this.loaditems2 = []
        this.loaditems3 = []
        this.isHide = !this.isHide
      },
      save () {},
      adjustLoad () {},
      adjustSpeed () {}
    }
  }
</script>
<style>
  .checkbox-item {
    margin: 20px 0;
  }

  .check-title {
    margin: 0 0 30px 30px;
    display: inline-block;
    width: 100%;
  }

  .module-item {
    width: 94%;
    margin-left: 3%;
    border: 1px solid #2ea77f;
    border-radius: 3px;
    min-width: 978px;
    margin-top: 20px;
    /*padding: 20px;*/
  }

  .bottom {
    padding-bottom: 20px;
  }

  .checkbox-left {
    margin-left: 50px;
  }

  .title {
    width: 100%;
    height: 35px;
    color: #fff;
    background-color: #2ea77f;
    padding: 7px 0 0 10px;
    text-align: left;
  }

  .content {
    padding: 40px 0 30px 10px;
  }

  .footer {
    text-align: right;
    margin-right: 40px;
  }

  .vertical {
    position: relative;
    top: 50%;
    transform: translateY(-50%)
  }

  .slider {
    display: inline-block;
    width: 35%;
    margin: 0 40px;
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

  .save {
    background-color: #2ea77f;
    color: #fff;
    border: none;
    outline: none;
    padding: 3px 7px;
    font-size: 14px;
  }
</style>
