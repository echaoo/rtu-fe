// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'animate.css/animate.css'
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'vue-echarts/dist/vue-echarts'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import store from './store'

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(ECharts)
Vue.http.options.emulateJSON = true;
Vue.http.options.credentials = true;

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
