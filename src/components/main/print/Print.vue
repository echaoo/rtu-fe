<template>
  <div>
    <button v-on:click="print" class="print">打印</button>
    <el-table
      :data="configInfo"
      border
      style="width: 100%">
      <el-table-column
        prop="Key"
        label="参数名">
      </el-table-column>
      <el-table-column
        prop="Value"
        label="参数值">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import API from '../../../config/request'
  export default {
    data () {
      return {
        configInfo: []
      }
    },
    created () {
      this.getConfig(1, 'IMPORTANT')
    },
    methods: {
      getConfig () {
        let that = this;
        let id = sessionStorage.getItem('wellid')
        let sensor = sessionStorage.getItem('sensorname')
        this.$http.post(API.configration, {wellid: id, sensorname: sensor}).then(
          function (res) {
            if (res.data.status === '0') {
              that.configInfo = res.data.data
            }
          });
      },
      print () {
        window.print()
      }
    }
  }
</script>

<style>
  .print {
    width: 98%;
    height: 50px;
    background-color: #eaedf5;
    font-size: 18px;
    border: none;
    outline: none;
    margin: 10px 0 10px 1%;
  }
</style>
