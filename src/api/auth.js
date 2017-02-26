/**
 * Created by lhy95 on 2017/2/25.
 */

import API from '../config/request'
import Vue from 'vue'

export default {
  doLogin(name, password) {
    let data = {name, password}
    return Vue.http.post(API.login, data)
  },
  checkLogin() {
    return Vue.http.get(API.isLogin)
  }
}
