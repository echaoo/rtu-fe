import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/Index'
import Main from 'components/main/Main'
import NotFound from 'components/404/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
