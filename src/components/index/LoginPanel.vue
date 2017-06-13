<template>
  <div class="login-panel-container">
    <h1>系统登录</h1>
    <el-input autocomplete type="text" v-model="username" placeholder="请输入经过授权的用户名"></el-input>
    <el-input autocomplete type="password" v-model="password" placeholder="请输入密码"></el-input>
    <button @click="login" type="button">同意相关协定，授权并登录</button>
    <router-link to="/reg">注册</router-link>
    <p>
      该系统处于研发更新阶段，如遇到临时无法登陆的情况，请联系公司技术人员。如需获取授权的用户名及密码，请联系山东创新石油技术有限公司相关人员。
    </p>
  </div>
</template>

<script>
  import API from '../../config/request'
  import { Loading } from 'element-ui';

  export default {
    data() {
      return {
        username: '123@123.com',
        password: 'Admin-123'
      }
    },
    methods: {
      login() {
        let loadingInstance = Loading.service({ fullscreen: true });
        let that = this;
        let param = {
          name: this.username,
          password: this.password
        };
        this.$store.dispatch('doLogin', param).then(
          (rs) => {
            if (rs === '0') {
              setTimeout(function () {
                that.$router.push('main');
              }, 1000)
            }
            else {
              this.$notify({
                title: '错误',
                message: '账户或密码错误',
                type: 'error'
              })
            }
            loadingInstance.close()
          },
          () => {
            loadingInstance.close()
          }
        )
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .login-panel-container {
    width: 330px;
    border-radius: 10px;
    padding: 20px 20px;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;

    h1 {
      margin-top: 0;
      color: white;
      margin-bottom: 20px;
    }

    input {
      margin-bottom: 10px;
    }

    button {
      width: 100%;
      background-color: #1c8de0;
      border: none;
      color: white;
      padding: 10px;
      margin-bottom: 10px;
      margin-top: 10px;
    }

    p {
      color: white;
    }

  }
</style>
