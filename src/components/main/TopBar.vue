<template>
  <div class="top-container" v-bind:class="{'fadeMiniTop': !iconSwitch, 'fadeFullTop': iconSwitch}">
    <el-button class="toggle-side-menu" type="primary" @click="changeSideBar"><i class="fa fa-bars"></i></el-button>
    <div class="right-menu">
      <div class="block" v-if="isNowTime">当前：{{ isblockId }}</div>
      <div class="time" v-if="isNowTime">{{ nowTime }}</div>
      <el-button type="danger" @click="logout"><i class="fa fa-sign-out"></i> 登出</el-button>
      <el-button type="primary" @click="showRightMenu"><i class="fa fa-tasks"></i></el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        nowTime: '',
        blockId: ''
      }
    },
    computed: {
      iconSwitch() {
        return this.$store.state.layout.isSideBarOpen;
      },
      isNowTime () {
        return this.$store.state.singleWell.isNowTime
      },
      isblockId() {
        return this.$store.state.layout.blockId
      }
    },
    mounted () {
      let that = this
      setInterval(function () {
        let myDate = new Date()
        that.nowTime = myDate.toLocaleString()
      }, 1000)
    },
    methods: {
      showRightMenu() {
        this.$store.dispatch('toggleRightMenu')
      },
      changeSideBar() {
        this.$store.dispatch('changeSideBar')
      },
      logout() {
        this.$store.dispatch('doLogout').then(
          (rs) => {
            if (rs) {
              this.$notify({
                title: '成功',
                message: '登出成功',
                type: 'success'
              })
              this.$router.push({name: 'index'});
            }
          }
        )
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .top-container {
    height: 60px;
    background-color: #f3f3f4;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .toggle-side-menu {
      margin-left: 20px;
    }

    .right-menu {
      margin-right: 20px;
    }

  }

  @-webkit-keyframes fadeMiniTop {
    from {
      margin-left: 220px;
    }

    to {
      margin-left: 70px;
    }
  }

  @keyframes fadeMiniTop {
    from {
      margin-left: 220px;
    }

    to {
      margin-left: 70px;
    }
  }

  .fadeMiniTop {
    -webkit-animation-name: fadeMiniTop;
    animation-name: fadeMiniTop;
  }

  @-webkit-keyframes fadeFullTop {
    from {
      margin-left: 70px;
    }

    to {
      margin-left: 220px;
    }
  }

  @keyframes fadeFullTop {
    from {
      margin-left: 70px;
    }

    to {
      margin-left: 220px;
    }
  }

  .fadeFullTop {
    -webkit-animation-name: fadeFullTop;
    animation-name: fadeFullTop;
  }

  .block, .time {
    display: inline-block;
    margin-right: 20px;
  }
</style>
