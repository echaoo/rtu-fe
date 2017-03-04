<template>
  <div class="top-container" v-bind:class="{'fadeMiniTop': !iconSwitch, 'fadeFullTop': iconSwitch}">
    <button class="switch-btn" @click="changeSideBar">
      <i v-if="iconSwitch" class="el-icon-d-arrow-left"></i>
      <i v-if="!iconSwitch" class="el-icon-d-arrow-right"></i>
    </button>
    <span v-on:click="logout" class="logout"><i class="fa fa-sign-out">登出</i></span>
  </div>
</template>

<script>
  export default {
    computed: {
      iconSwitch() {
        return this.$store.state.layout.isSideBarOpen;
      }
    },
    methods: {
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

<style lang="less" rel="stylesheet/less">
  .top-container {
    height: 60px;
    background-color: #f3f3f4;

    .logout {
      float: right;
      height: 60px;
      line-height: 60px;
      margin: 0 50px 0 0;
      cursor: pointer;
      position: relative;
      box-sizing: border-box;
      border-bottom: 5px solid transparent;
    }

  }

  .side-bar-open {
    margin-left: 220px;
  }

  .side-bar-close {
    margin-left: 70px;
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
</style>
