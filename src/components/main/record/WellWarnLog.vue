<template>
  <div>
    <div class="breadcrumb">
      <el-breadcrumb separator="/" style="align-items: center">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>报警记录</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="row">
        <div class="col-lg-12">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>油井报警信息记录</h5>
            </div>
            <div class="ibox-content" style="overflow: hidden">
              <el-table :data="warnList" border style="width: 100%"
                        :default-sort="{prop: ['IDCode', 'WELL_ID'], order: ['ascending', 'descending']}">
                <el-table-column prop="IDCode" label="报警信息" sortable width="180"></el-table-column>
                <el-table-column prop="ActionTime" label="报警开始时间" width="180"></el-table-column>
                <el-table-column prop="  ErrorEndTime" label="报警结束时间" width="180"></el-table-column>
                <el-table-column prop="isCheck" label="报警状态记录"></el-table-column>
                <el-table-column label="操作">
                  <template scope="scope">
                    <el-button
                      size="small"
                      type="primary"
                      @click="notice(scope.row)">通知
                    </el-button>
                    <el-button
                      size="small"
                      type="primary"
                      @click="ignore(scope.row)">忽略
                    </el-button>
                  </template>
                </el-table-column>
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
      pageRequest (pageIndex) {
        let body = {
          wellid: 1,
          // Todo: 获取井id
          size: this.pageSize,
          page: pageIndex
        };
        let that = this;
        this.$http.post(API.getwarn, body).then(
          function (res) {
            console.log(res)
            if (res.data.status === '0') {
              that.warnList = res.data.data;
              that.total = res.data.totalnum;
            }
          });
      },
      notice (row) {
        console.log(row)
        //TODO: 通知处理
      },
      ignore () {
        console.log(row)
        //TODO: 忽略处理
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
