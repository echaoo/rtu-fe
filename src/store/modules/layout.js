/**
 * Created by lhy95 on 2017/2/26.
 */

import layout from '../../api/layout'

const state = {
  isSideBarOpen: true,
  isRightMenuOpen: false,
  sideBarList: [],
  selectedSide: 0
}

const getters = {
  isSideBarOpen: state => state.isSideBarOpen,
  sideBarList: state => state.sideBarList,
  selectedSide: state => state.selectedSide,
  isRightMenuOpen: state => state.isRightMenuOpen
}

const actions = {
  toggleRightMenu(context) {
    context.commit('toggleRightMenu')
  },
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
  },
  setSideBarIndex(state, newSideBarIndex) {
    state.selectedSide = newSideBarIndex
  },
  toggleRightMenu(state) {
    state.isRightMenuOpen = !state.isRightMenuOpen
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
