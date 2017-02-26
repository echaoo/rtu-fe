<template>
  <div class="wrapper" v-if="isSideBarOpen">
    <nav class="navbar-default navbar-static-side" role="navigation">
      <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu" style="min-height: 100vh">
          <li class="nav-header">
            <div class="dropdown profile-element">
              <span><img alt="image" class="img-circle" src="../../assets/main/logo_final_cn_white.png"/></span>
              <a data-toggle="dropdown" href="#">
                            <span class="clear"> <span class="block m-t-xs"> <strong style="color: #fff;">创新石油</strong>
                             </span><br/> <span class="text-muted text-xs block" style="color: #fff;">CHUANGXIN PETROLEUM</span> </span>
              </a>
            </div>
            <div class="logo-element">
              <img alt="image" class="img-circle" src="../../assets/main/logo_final_cn_white.png"/>
            </div>
          </li>
          <li v-for="block in blockInfo">
            <i class="fa fa-th-large"></i>
            <span class="nav-label">{{ block.Name }}</span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import API from '../../config/request'

  export default {
    computed: {
      isSideBarOpen() {
        return this.$store.state.layout.isSideBarOpen;
      }
    },
    data () {
      return {
        blockInfo: []
      }
    },
    created () {
      this.$http.get(API.block).then(
        response => {
          if (response.data.status === '0'
          ) {
//        console.log(response.data.data)
            this.blockInfo = response.data.data;
          }
        })
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .text-muted {
    font-size: 13px;
  }

  .active {
    background-color: #1e2c39;
  }

  @media (min-width: 768px) {
    .nav-header {
      padding: 33px 25px;
    }

    .img-circle {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    .sidebar-collapse .fa {
      color: #919ab0;
    }

    .navbar-form-custom .form-control {
      background: none repeat scroll 0 0 rgba(0, 0, 0, 0);
      border: medium none;
      font-size: 14px;
      height: 60px;
      margin: 0;
      z-index: 2000;
    }

    .form-control, .single-line {
      background-color: #FFFFFF;
      background-image: none;
      border: 1px solid #e5e6e7;
      border-radius: 1px;
      color: inherit;
      display: block;
      padding: 6px 12px;
      transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
      width: 100%;
      font-size: 14px;
    }

    .navbar-static-side {
      z-index: 2007;
      position: absolute;
      width: 220px;
    }

    .navbar-default {
      background-color: #25303f;
      border-color: #2f4050;
    }

    .pace-done .navbar-static-side, .pace-done .nav-header, .pace-done li.active, .pace-done #page-wrapper, .pace-done .footer {
      -webkit-transition: all 0.4s;
      -moz-transition: all 0.4s;
      -o-transition: all 0.4s;
      transition: all 0.4s;
    }

    .pace-done .nav-header {
      transition: all 0.4s;
    }

    .nav li span {
      color: #7b829c;
    }

    .border-bottom {
      border-bottom: 1px solid #e7eaec !important;
    }

    .navbar-fixed-top, .navbar-static-top {
      background: #f3f3f4;
    }

    .navbar-header {
      float: left;
    }

    .btn-primary {
      background-color: #1ab394;
      border-color: #1ab394;
      color: #FFFFFF;
    }

    ul.navbar-top-links li {
      display: inline-block;
    }

    .page-wrapper {
      margin: 0 0 0 220px;
      min-height: 1200px;
      padding: 0 15px;
      position: relative !important;
    }

    .navbar-form-custom {
      float: left;
      height: 50px;
      padding: 0;
      width: 200px;
      display: inline-table;
      outline: none;
      box-shadow: none !important;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .minimalize-styl-2 {
      padding: 4px 12px;
      margin: 14px 5px 5px 20px;
      font-size: 14px;
      float: left;
    }

    .nav > li > span {
      color: #a7b1c2;
      font-weight: 600;
      padding: 14px 20px 14px 25px;
    }

    .nav > li {
      position: relative;
      display: block;
      padding: 10px 15px;
    }
  }
</style>
