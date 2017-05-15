<template>
  <div>
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="row" v-for="item in warnList">
        <div class="col-lg-12">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>{{ item.SensorChina }}</h5>
            </div>
            <div class="ibox-content" style="overflow: hidden">
              <button class="basebtn config-btn" v-on:click="configInfo(item.WellId, item.SensorName)">产品配置信息</button>
              <span class="adjust">
                <el-button
                  plain
                  @click="adjust">
                遥调
              </el-button>
              </span>
              <el-table :data="reconstructionData(item.SensorValue)" border style="width: 100%"
                        :default-sort="{prop: ['IDCode', 'WELL_ID'], order: ['ascending', 'descending']}">
                <el-table-column sortable prop="Name" label="参数名" width="180"></el-table-column>
                <el-table-column sortable prop="Range" label="取值范围"></el-table-column>
                <el-table-column sortable prop="parm" label="当前参数值"></el-table-column>
                <el-table-column
                  label="遥调值"
                  width="180">
                  <template scope="scope"><input type="text" class="input-vulue"></template>
                </el-table-column>
                <el-table-column sortable prop="others" label="其他"></el-table-column>
              </el-table>
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
        this.$http.post(API.fixedSensor, {wellid: 1}).then(
          function (res) {
            console.log(res)
            if (res.data.status === '0') {
              that.warnList = res.data.data;
              that.total = res.data.totalnum;
              //todo: 表格分页处理
            }
          });
        this.$http.post(API.sensor, {wellid: 1}).then(
          function (res) {
            console.log(res)
//            if (res.data.status === '0') {
//              that.warnList = res.data.data;
//              that.total = res.data.totalnum;
//              //todo: 表格分页处理
//            }
          });
      },
      reconstructionData (data) {
        for (let i = 0; i < data.length; i++) {
          let parm = data[i].Scaler + data[i].Unit
          data[i].parm = parm
        }
        console.log(data)
        return data
      },
      configInfo (wellId, sensorname) {
        sessionStorage.setItem('wellid', wellId)
        sessionStorage.setItem('sensorname', sensorname)
        window.open("/#/print", "a", "height=600, width=800, top=50, left=300, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
      },
      adjust () {
        let that = this
        this.$http.post(API.adjust, {data: 1}).then(
          //todo: data值的获取
          function (res) {
            if (res.data.status === 0) {
              console.log(res)
              const h = that.$createElement
              that.$notify({
                title: '遥调',
                message: h('i', { style: 'color: teal'}, '遥调成功')
              })
            }
          })
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

  .basebtn {
    height: 35px;
    background-color: #eaedf5;
    border: none;
    margin-bottom: 15px;
    outline: none;
  }

  .config-btn {
    width: 180px;
  }

  .adjust {
    float: right;
  }

  .input-vulue {
    outline: none;
  }
</style>
