<template>
  <div>
    <div class='pin'><span class="num">01</span></div>
    <div class='pulse'></div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" rel="stylesheet/less">
  .num {
    display: block;
    /*color: #fff;*/
    transform: rotate(45deg);
    position: absolute;
    left: 6px;
    z-index: 99;
    top: 5px;
  }


  body {
    background: #222222;
  }

  .pin {
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 50% 0;
    background: #02daaf;
    position: absolute;
    transform: rotate(-45deg);
    left: 50%;
    top: 50%;
    margin: -20px 0 0 -20px;
  }

  .pin:hover {
    width: 40px;
    height: 40px;
    margin: -32px 0 0 -26px;


    .num {
      position: absolute;
      left: 12px;
      z-index: 99;
      top: 11px;
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
    position: absolute;
    left: 50%;
    top: 50%;
    margin: 11px 0px 0px -12px;
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
    box-shadow: 0 0 1px 2px #02daaf;
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

</style>
