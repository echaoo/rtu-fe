/**
 * Created by lhy95 on 2017/2/25.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import user from './modules/user'

Vue.use(Vuex)
Vue.use(VueResource)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user
  },
  strict: debug
})
