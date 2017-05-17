import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/Index'
import Reg from 'components/reg/Reg'
import NotFound from 'components/404/NotFound'
import Oilwell from 'components/oilwell/Oilwell'

import Main from 'components/main/Main'
import Map from 'components/main/map/Map'
import Indicator from 'components/main/indicator/Indicator'
import HistoryIndicator from 'components/main/indicator/HistoryIndicator'
import CompareIndicator from 'components/main/indicator/CompareIndicator'
import WarnLog from 'components/main/warnlog/WarnLog'
import WellList from 'components/main/welllist/WellList'
import WellIndex from 'components/main/wellindex/WellIndex'
import SmartModule from 'components/main/smartmodule/SmartModule'
import RealCurve from 'components/main/curve/RealCurve'
import HistoryCurve from 'components/main/curve/HistoryCurve'
import WellWarnLog from 'components/main/record/WellWarnLog'
import WellOperationLog from 'components/main/record/WellOperationLog'
import AllData from 'components/main/alldata/AllData'
import Adjust from 'components/main/adjust/Adjust'
import Print from 'components/main/print/Print'

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
          path: 'wellindex',
          name: 'wellindex',
          component: WellIndex
        },
        {
          path: 'smartmodule',
          name: 'smartmodule',
          component: SmartModule
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
        },
        {
          path: 'alldata',
          name: 'alldata',
          component: AllData
        },
        {
          path: 'adjust',
          name: 'adjust',
          component: Adjust
        },
        {
          path: 'historyindicator',
          name: 'historyindicator',
          component: HistoryIndicator
        },
        {
          path: 'compareindicator',
          name: 'compareindicator',
          component: CompareIndicator
        }
      ]
    },
    {
      name: 'oilwell',
      path: '/oilwell/:wellid',
      component: Oilwell
    },
    {
      path: '/print',
      name: 'print',
      component: Print
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
