<template>
  <div>
    <div class="breadcrumb" style="position: relative;">
      <el-breadcrumb separator="/" style="align-items: center">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>遥调控制</el-breadcrumb-item>
      </el-breadcrumb>
      <button class="showAndHide">显示/隐藏</button>
    </div>
    <div class="hideItem">
      <span v-for="(item, index) in tempData" style="padding: 0 6%">
        <input type="checkbox" :id="'item' + index" :value="item.SensorName" v-model="hideItem">
        <label :for="'item' + index">{{ item.SensorChina }}</label>
      </span>
    </div>
    <div class="wrapper wrapper-content animated fadeInRight" style="padding-top: 10px">
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
      <div class="row" v-for="(item, index) in sensorItem">
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
        total: 0,
        hideItem: [],
        tempData: [],
        sensorItem: [],
        sensorData: {}
      }
    },
    watch: {
      hideItem: function () {
          for (let i = 0; i < this.hideItem.length; i++) {
            console.log(this.warnList.concat(this.sensorData[this.hideItem[i]]))
            this.sensorItem[i] = this.sensorData[this.hideItem[i]]
          }
      }
    },
    created () {
      this.pageRequest(this.pageIndex)
      this.$store.commit('setNavSwitch', false)
    },
    computed: {
      blockId() {
        return this.$store.state.layout.blockId
      }
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
        this.$http.post(API.fixedSensor, {wellid: that.blockId}).then(
          function (res) {
            if (res.data.status === '0') {
              that.warnList = res.data.data
            }
          });
        this.$http.post(API.sensor, {wellid: that.blockId}).then(
          function (res) {
            if (res.data.status === '0') {
              let data = res.data.data
              this.tempData = res.data.data
              for (let i = 0; i < data.length; i++) {
                this.sensorData[data[i].SensorName] = data[i]
              }
            }
          });
      },
      reconstructionData (data) {
        for (let i = 0; i < data.length; i++) {
          let parm = data[i].Scaler + data[i].Unit
          data[i].parm = parm
        }
        return data
      },
      configInfo (wellId, sensorname) {
        sessionStorage.setItem('wellid', wellId)
        sessionStorage.setItem('sensorname', sensorname)
        window.open("/#/print", "a", "height=600, width=800, top=50, left=300, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
      },
      adjust () {
        let r = confirm("确定修改吗？")
        if (r === true) {
          let that = this
          this.$http.post(API.adjust, {data: 1}).then(
            //todo: data值的获取
            function (res) {
              if (res.data.status === 0) {
                console.log(res)
                const h = that.$createElement
                that.$notify({
                  title: '遥调',
                  message: h('i', {style: 'color: teal'}, '遥调成功')
                })
              }
            })
        }
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
    height: 20px;
    padding: 15px 15px;
    margin-bottom: 10px;
    box-sizing: border-box;
    background-color: #fff;
    font-size: 14px;
    display: flex;
  }

  .hideItem {
    text-align: center;
  }

  .showAndHide {
    width: 80px;
    height: 35px;
    color: #fff;
    outline: none;
    border: none;
    background-color: #20a0ff;
    position: absolute;
    right: 30px;
    top: 7px;
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
