<template>
  <div class="wrapper">
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
    <div class="page-wrapper">
      <div class="row border-bottom">
        <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i>
            </a>
            <form role="search" class="navbar-form-custom" action="search_results.html">
              <div class="form-group">
                <input type="text" placeholder="Search for something..." class="form-control"
                       name="top-search" id="top-search">
              </div>
            </form>
          </div>
          <ul class="nav navbar-top-links navbar-right">
            <li>
              <span class="m-r-sm text-muted welcome-message">Welcome to INSPINIA+ Admin Theme.</span>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                <i class="fa fa-envelope"></i> <span class="label label-warning">16</span>
              </a>
              <ul class="dropdown-menu dropdown-messages">
                <li>
                  <div class="dropdown-messages-box">
                    <a href="profile.html" class="pull-left">
                      <img alt="image" class="img-circle" src="img/a7.jpg">
                    </a>
                    <div class="media-body">
                      <small class="pull-right">46h ago</small>
                      <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>.
                      <br>
                      <small class="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                    </div>
                  </div>
                </li>
                <li class="divider"></li>
                <li>
                  <div class="dropdown-messages-box">
                    <a href="profile.html" class="pull-left">
                      <img alt="image" class="img-circle" src="img/a4.jpg">
                    </a>
                    <div class="media-body ">
                      <small class="pull-right text-navy">5h ago</small>
                      <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica
                      Smith</strong>. <br>
                      <small class="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                    </div>
                  </div>
                </li>
                <li class="divider"></li>
                <li>
                  <div class="dropdown-messages-box">
                    <a href="profile.html" class="pull-left">
                      <img alt="image" class="img-circle" src="img/profile.jpg">
                    </a>
                    <div class="media-body ">
                      <small class="pull-right">23h ago</small>
                      <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br>
                      <small class="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                    </div>
                  </div>
                </li>
                <li class="divider"></li>
                <li>
                  <div class="text-center link-block">
                    <a href="mailbox.html">
                      <i class="fa fa-envelope"></i> <strong>Read All Messages</strong>
                    </a>
                  </div>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                <i class="fa fa-bell"></i> <span class="label label-primary">8</span>
              </a>
              <ul class="dropdown-menu dropdown-alerts">
                <li>
                  <a href="mailbox.html">
                    <div>
                      <i class="fa fa-envelope fa-fw"></i> You have 16 messages
                      <span class="pull-right text-muted small">4 minutes ago</span>
                    </div>
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="profile.html">
                    <div>
                      <i class="fa fa-twitter fa-fw"></i> 3 New Followers
                      <span class="pull-right text-muted small">12 minutes ago</span>
                    </div>
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="grid_options.html">
                    <div>
                      <i class="fa fa-upload fa-fw"></i> Server Rebooted
                      <span class="pull-right text-muted small">4 minutes ago</span>
                    </div>
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                  <div class="text-center link-block">
                    <a href="notifications.html">
                      <strong>See All Alerts</strong>
                      <i class="fa fa-angle-right"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </li>


            <li>
              <a href="login.html">
                <i class="fa fa-sign-out"></i> Log out
              </a>
            </li>
          </ul>

        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import API from '../../config/request'

  export default {
    data () {
      return {
        blockInfo: []
      }
    },
    created () {
      this.$http.get(API.block).then(
        response => {
        if (response.data.status === '0'
    ){
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
