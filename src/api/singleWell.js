/**
 * Created by echaoo on 2017/4/25.
 */

import API from '../config/request'
import Vue from 'vue'

export default {
  getCurveParameter() {
    return Vue.http.get(API.parameter)
  }
}
