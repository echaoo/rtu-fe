<template>
  <div class="wrapper animated fadeInRight">
    <div class="row" v-for="(item, index) in wellList">
      <div class="col-lg-12">
        <div class="ibox float-e-margins">
          <div class="ibox-title">
            <h5>区块 {{item[0].BLOCK_ID}}</h5>
          </div>
          <div class="ibox-content">
            <el-table :data="wellList[index]" border style="width: 100%" v-loading="loading">
              <el-table-column prop="ID" label="油井编号" width="180"></el-table-column>
              <el-table-column prop="Name" label="油井名称" width="180"></el-table-column>
              <el-table-column label="油井状态" width="180">
                <template scope="scope">
                  <p>{{ statusToText(scope.row.Status) }}</p>
                </template>
              </el-table-column>
              <el-table-column label="监控链接">
                <template scope="scope">
                  <el-button size="small" @click="handleWell(scope.row)">云监控

                  </el-button>
                  <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">现场</el-button>
                </template>
              </el-table-column>
            </el-table>
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
        wellList: [],
        loading: true
      }
    },
    mounted () {
      this.getwellList();
    },
    methods: {
      getwellList () {
        let that = this;
        this.$http.get(API.wellInfo).then(
          function (res) {
            if (res.data.status === '0') {
              let temp = res.data.data;
              that.dealData(temp)
              that.loading = false;
            }
          });
      },

      statusToText (status) {
        switch (status) {
          case 'breathe':
            return '正常';
          case 'warn':
            return '警告';
          case 'dead':
            return '停用';
          case 'bad':
            return '故障';
        }
      },

      dealData(temp) {
        let arr = [];
        for (let i = 0; i < temp.length; i++) {
          if (i === 0) {
            arr = [];
            arr.push(temp[i]);
          } else if (i !== 0 && temp[i].BLOCK_ID !== temp[i - 1].BLOCK_ID) {
            this.wellList.push(arr);
            arr = [];
            arr.push(temp[i]);
          } else if (temp[i].BLOCK_ID === temp[i - 1].BLOCK_ID) {
            arr.push(temp[i]);
          }
        }
      },

      handleWell(row) {
        this.$store.dispatch('setNavSwitch');
        this.$store.commit('getBlockId', row.Name);
        this.$router.push('curve');
      }
      // Todo: 现场按钮事件处理
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .wrapper {
    background-color: #f3f3f4;
  }
</style>
