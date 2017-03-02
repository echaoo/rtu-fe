<template>
  <div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
      <div class="col-lg-12">
        <div class="ibox float-e-margins">
          <div class="ibox-title">
            <h5>Basic Data Tables example with responsive plugin</h5>
          </div>
          <div class="ibox-content">
            <el-table :data="warnList" border style="width: 100%" :default-sort="{prop: ['IDCode', 'WELL_ID'], order: ['ascending', 'descending']}">
              <el-table-column prop="RecordeID" label="ID" sortable></el-table-column>
              <el-table-column prop="WELL_ID" label="井号" sortable></el-table-column>
              <el-table-column prop="ActionTime" label="报警开始时间" ></el-table-column>
              <el-table-column prop="IDCode" label="报警信息" sortable></el-table-column>
              <el-table-column prop="ErrorEndTime" label="报警结束时间"></el-table-column>
              <el-table-column prop="isCheck" label="报警状态记录"></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dataTables from 'datatables.net'
  import dataTablesBs from 'datatables.net-bs'
  import 'datatables.net-bs/css/dataTables.bootstrap.css'
  import API from '../../../config/request'
  export default {
      data () {
        return {
          warnList: []
        }
      },
      created () {
          let body = {
            blockid: 0,
            size: 2
          };
          let that = this;
        this.$http.post(API.wellLog, body).then(
          function (res) {
            if (res.data.status === '0')
            {
              that.warnList = res.data.data;
            }
          });
      },
    mounted () {
//      $('.dataTables-example').DataTable({
//        dom: '<"html5buttons"B>lTfgitp'
//      });
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
</style>
