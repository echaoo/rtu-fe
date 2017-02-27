import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/Index'
import Reg from 'components/reg/Reg'
import NotFound from 'components/404/NotFound'

import Main from 'components/main/Main'
import Map from 'components/main/map/Map'
import Indicator from 'components/main/indicator/Indicator'
import WarnLog from 'components/main/warnlog/WarnLog'

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
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/main',
      redirect: '/main/map',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'map',
          name: 'map',
          component: Map
        },
        {
          path: 'indicator',
          name: 'indicator',
          component: Indicator
        },
        {
          path: 'warnlog',
          name: 'warnlog',
          component: WarnLog
        },
      ]
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
