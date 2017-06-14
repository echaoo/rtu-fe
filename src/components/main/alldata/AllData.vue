<template>
  <div>
    <!--<div class="breadcrumb">-->
      <!--<el-breadcrumb separator="/" style="align-items: center">-->
        <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
        <!--<el-breadcrumb-item>报警记录</el-breadcrumb-item>-->
      <!--</el-breadcrumb>-->
    <!--</div>-->
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="row">
        <div class="col-lg-12">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>全部数据</h5>
            </div>
            <div class="ibox-content" style="overflow: hidden">
              <el-table :data="warnList" border style="width: 100%"
                        :default-sort="{prop: ['IDCode', 'WELL_ID'], order: ['ascending', 'descending']}">
                <el-table-column prop="Datetime" label="时间" sortable width="180"></el-table-column>
                <el-table-column sortable prop="Identifier" label="标识位" width="180"></el-table-column>
                <el-table-column sortable prop="Parameter" label="参数名" width="180"></el-table-column>
                <el-table-column sortable prop="Value" label="参数值"></el-table-column>
                <el-table-column sortable prop="Range" label="取值范围"></el-table-column>
                <el-table-column sortable prop="Style" label="参数类型"></el-table-column>
              </el-table>
              <div class="page">
                <el-pagination v-bind:current-Page="pageIndex" v-bind:page-size="pageSize" :total="total"
                               layout="prev,pager,next,jumper" v-on:size-change="sizeChange"
                               v-on:current-change="pageIndexChange">

                </el-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import API from '../../../config/request'
  export default {
    data () {
      return {
        warnList: [],
        pageIndex: 0,
        pageSize: 10,
        total: 0
      }
    },
    created () {
      this.pageRequest(this.pageIndex);
    },
    mounted () {
      this.$store.commit('setIsNowTime', true)
      this.$store.commit('setNavSwitch', false)
    },
    methods: {
      pageIndexChange (pageIndex) {
        this.pageRequest(pageIndex);
      },
      sizeChange (pageSize) {
        this.pageSize = pageSize;
        this.pageRequest();
      },
      pageRequest () {
        let that = this;
        this.$http.post(API.allData, {wellid: 1}).then(
          function (res) {
            console.log(res)
            if (res.data.status === '0') {
              that.warnList = res.data.data;
              that.total = res.data.totalnum;
              //todo: 表格分页处理
            }
          });
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .page {
    float: right;
    margin-top: 20px;
  }

  .breadcrumb {
    height: 40px;
    padding: 25px 15px;
    margin-bottom: 10px;
    box-sizing: border-box;
    background-color: #fff;
    font-size: 14px;
    display: flex;
  }
</style>
