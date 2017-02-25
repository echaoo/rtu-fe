// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css/animate.css'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;
Vue.http.options.credentials = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
