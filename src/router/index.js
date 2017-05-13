import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/Index'
import Reg from 'components/reg/Reg'
import NotFound from 'components/404/NotFound'
import Oilwell from 'components/oilwell/Oilwell'

import Main from 'components/main/Main'
import Map from 'components/main/map/Map'
import Indicator from 'components/main/indicator/Indicator'
import WarnLog from 'components/main/warnlog/WarnLog'
import WellList from 'components/main/welllist/WellList'
import Curve from 'components/main/curve/Curve'
import RealCurve from 'components/main/curve/RealCurve'
import HistoryCurve from 'components/main/curve/HistoryCurve'
import WellWarnLog from 'components/main/record/WellWarnLog'
import WellOperationLog from 'components/main/record/WellOperationLog'

Vue.use(Router)

export default new Router({
  routes: [
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
        {
          path: 'welllist',
          name: 'welllist',
          component: WellList
        },
        {
          path: 'curve',
          name: 'curve',
          component: Curve
        },
        {
          path: 'realcurve',
          name: 'realcurve',
          component: RealCurve
        },
        {
          path: 'historycurve',
          name: 'historycurve',
          component: HistoryCurve
        },
        {
          path: 'wellwarnlog',
          name: 'wellwarnlog',
          component: WellWarnLog
        },
        {
          path: 'welloperationlog',
          name: 'welloperationlog',
          component: WellOperationLog
        }
      ]
    },
    {
      name: 'oilwell',
      path: '/oilwell/:wellid',
      component: Oilwell
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
