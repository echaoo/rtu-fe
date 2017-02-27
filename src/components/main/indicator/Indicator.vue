<template>
  <div id="indicator">
    <div class="wrapper animated fadeInRight">
      <div class="row">
        <div class="col-md-6">
          <div class="row" v-for="item in rederEven(chartMsgEven)">
            <div class="col-md-12">
              <div class="ibox float-e-margins">
                <div class="ibox-title">
                  <h5>油井{{ item.Well_ID }}</h5>
                </div>
                <div class="ibox-content">
                  <div id="ct-chart1" class="ct-perfect-fourth">sds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row" v-for="item in rederOdd(chartMsgOdd)">
            <div class="col-md-12">
              <div class="ibox float-e-margins">
                <div class="ibox-title">
                  <h5>油井{{ item.Well_ID }}</h5>
                </div>
                <div class="ibox-content">
                  <div id="ct" class="ct-perfect-fourth">sds</div>
                </div>
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
    data() {
        return {
          chartMsgOdd: [],
          chartMsgEven: []
        }
    },
    created() {
      let that = this;
      let body = {
        blockid: '1',
        page: '1',
        size: '6'
      };
      this.$http.post(API.indicator, body).then(
        response => {
          if (response.data.status === '0') {
            that.chartMsgOdd = response.data.data;
            that.chartMsgEven = response.data.data;
          }
        })
    },
    methods: {
      rederOdd (chartMsgOdd) {
        return chartMsgOdd.filter(function (item, index) {
          return index % 2 === 1;
        })
      },
      rederEven (chartMsgEven) {
        return chartMsgEven.filter(function (item, index) {
          return index % 2 === 0;
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  #indicator {
    background-color: #f3f3f4;
  }

  .wrapper {
    padding: 20px 10px 40px;
  }

  .ibox {
    clear: both;
    margin-bottom: 25px;
    margin-top: 0;
    padding: 0;
  }

  .ibox.collapsed .ibox-content {
    display: none;
  }

  .ibox.collapsed .fa.fa-chevron-up:before {
    content: "\f078";
  }

  .ibox.collapsed .fa.fa-chevron-down:before {
    content: "\f077";
  }

  .ibox:after,
  .ibox:before {
    display: table;
  }

  .ibox-title {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background-color: #ffffff;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 3px 0 0;
    color: inherit;
    margin-bottom: 0;
    padding: 14px 15px 7px;
    min-height: 48px;
  }

  .ibox-content {
    background-color: #ffffff;
    color: inherit;
    padding: 15px 20px 20px 20px;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0;
  }

  .ibox-footer {
    color: inherit;
    border-top: 1px solid #e7eaec;
    font-size: 90%;
    background: #ffffff;
    padding: 10px 15px;
  }

</style>
