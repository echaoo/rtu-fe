/**
 * Created by lhy95 on 2017/2/26.
 */

import layout from '../../api/layout'

const state = {
  isSideBarOpen: true,
  sideBarList: [],
  selectedSide: 0
}

const getters = {
  isSideBarOpen: state => state.isSideBarOpen,
  sideBarList: state => state.sideBarList,
  selectedSide: state => state.selectedSide
}

const actions = {
  changeSideBar(context) {
    context.commit('changeSideBar')
  },
  getSideBarList(context) {
    new Promise((resolve, reject) => {
      layout.getSideBarList().then(
        (res) => {
          if (res.data.status === '0') {
            context.commit('setSideBar', res.data.data)
          }
        }
      )
    })
  }
}

const mutations = {
  changeSideBar(state) {
    state.isSideBarOpen = !state.isSideBarOpen;
  },
  setSideBar(state, newSideBarArr) {
    state.sideBarList = newSideBarArr
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
