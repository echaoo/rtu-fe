<template>
  <div class="login-panel-container">
    <h1>系统登录</h1>
    <input type="text" v-model="username" placeholder="请输入经过授权的用户名">
    <input type="password" v-model="password" placeholder="请输入密码">
    <button @click="login">同意相关协定，授权并登录</button>
    <p>
      该系统处于研发更新阶段，如遇到临时无法登陆的情况，请联系公司技术人员。如需获取授权的用户名及密码，请联系山东创新石油技术有限公司相关人员。
    </p>
  </div>
</template>

<script>
  import API from '../../config/request'
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        let param = {
          username: this.username,
          password: this.password
        };
        this.$http.post(API.login, param).then(res => {
            console.log(res);
        })
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
      width: 100%;
      height: 30px;
      margin-bottom: 10px;
      border: none;
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
