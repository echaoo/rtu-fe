<template>
  <div id="wellindex">
    <div class="breadcrumb">
      <el-breadcrumb separator="/" style="align-items: center">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <el-row :gutter="20">
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
          <div class="grid-content" style="background-color: #fff">sds</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    computed: {},
    mounted () {
      this.$store.commit('setIsNowTime', true)
    }
  }
</script>
<style>
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

  .well-transform {
    height: 650px;
    padding: 10px;
    position: relative;
    z-index: 3;
  }

  @keyframes pidai1 {
    0% { height: 300px; }
    50% { height: 40px; }
    100% { height: 300px; }
  }

  @keyframes pidai2 {
    0% { height: 40px; }
    50% { height: 300px; }
    100% { height: 40px; }
  }

  @keyframes jingkou {
    0% { top: 25px; }
    50% { top: 286px; }
    100% { top: 25px; }
  }

  @keyframes line {
    0% { height: 380px; }
    50% { height: 100px; }
    100% { height: 380px; }
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
    animation:pidai1 10s infinite;
  }

  .pidai2 {
    height: 300px;
    left: 30px;
    border-left: 1px solid black;
    animation:pidai2 10s infinite;
    z-index: 5;
  }

  .jingkou {
    position: relative;
    top: 70px;
    left: 20px;
    z-index: 6;
    animation:jingkou 10s infinite;
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
    animation:line 10s infinite;
  }

  .dis {
    display:  inline-block;
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
    animation:peizhong 10s infinite;
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
    0% { top: 365px; }
    50% { top: 100px; }
    100% { top: 365px; }
  }
</style>
