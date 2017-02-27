/**
 * Created by lhy95 on 2017/2/26.
 */

import API from '../config/request'
import Vue from 'vue'

export default {
  getSideBarList() {
    return Vue.http.get(API.block)
  }
}
