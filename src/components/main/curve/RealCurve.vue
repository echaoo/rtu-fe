<template>
  <div>
    <div class="head-title">
      <span class="head-left">实时曲线</span>
      <span class="head-right">
        <span>选择曲线参数</span>
        <span>
          <select v-model="selected">
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>
<style>
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
</style>
