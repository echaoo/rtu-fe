<template>
  <div class="reg-container">
    <h1>用户注册</h1>
    <el-form :model="regForm" :rules="rules" ref="regForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账户" prop="name">
        <el-input v-model.number="regForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="regForm.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="regForm.checkPass" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('regForm')">提交</el-button>
        <el-button @click="resetForm('regForm')">重置</el-button>
        <el-button @click="goLogin">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import API from '../../config/request'
  export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.regForm.checkPass !== '') {
            this.$refs.regForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.regForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        regForm: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          name: [
            {validator: checkName, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      doReg() {
        let that = this
        let data = {
          name: this.regForm.name,
          password: this.regForm.pass
        }
        this.$http.post(API.reg, data).then(res => {
          if (res.data.status === '0') {
            that.$notify({
              title: '成功',
              message: '注册成功，即将转入登录页面',
              type: 'success'
            });
            setTimeout(function () {
              that.$router.push('/');
            }, 1000);
          }
          else {
            this.$notify({
              title: '错误',
              message: '服务器端错误，请重试',
              type: 'error'
            });
          }
        }, () => {
          this.$notify({
            title: '错误',
            message: '服务器端错误，请重试',
            type: 'error'
          });
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 正式注册
            this.doReg();
          } else {
            this.$notify({
              title: '错误',
              message: '请正确填写表单',
              type: 'error'
            });
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      goLogin() {
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .reg-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      border-left: 1px solid grey;
      margin-left: 20px;
    }
  }
</style>
