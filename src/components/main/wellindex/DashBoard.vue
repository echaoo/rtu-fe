<template>
  <div v-bind:id="chartId" class="test"></div>
</template>

<script>
  //  import $ from 'jquery'
  export default {
    data() {
      return {test: 'test1'}
    },
    props: {
      chartId: {
        type: String,
        default: 'dash1'
      },
      data: 0,
      title: ''
    },
    mounted () {
      this.paintChart()
    },
    methods: {
      paintChart () {
        c3.generate({
          bindto: '#' + this.chartId,
          title: {
            left: 'center',
            text: this.title,
            textStyle: {
              fontSize: 13
            }
          },
          data: {
            columns: [
              [this.title, this.data]
            ],

            type: 'gauge'
          },
          color: {
            pattern: ['#1ab394', '#BABABA']

          }
        });
      },
      drawtenthcharts(data) {
        c3.generate({
          bindto: '#Xitongxiaolv',
          title: {
            left: 'center',
            text: '系统效率',
            textStyle: {
              fontSize: 13
            }
          },
          data: {
            columns: [
              ['系统效率', data]
            ],

            type: 'gauge'
          },
          color: {
            pattern: ['#1ab394', '#BABABA']

          }
        });
      },
      drawninethcharts(data) {
        c3.generate({
          bindto: '#Pinghenglv',
          title: {
            left: 'center',
            text: '平衡率',
            textStyle: {
              fontSize: 13
            }
          },
          data: {
            columns: [
              ['平衡率', data]
            ],

            type: 'gauge'
          },
          color: {
            pattern: ['#1ab394', '#BABABA']

          }
        });
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .test {
    width: 100%;
    height: 150px;
  }
</style>
