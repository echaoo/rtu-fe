/**
 * Created by lhy95 on 2017/2/26.
 */

const state = {
  isSideBarOpen: true
}

const getters = {
  isSideBarOpen: state => state.isSideBarOpen
}

const actions = {
  changeSideBar(context) {
    context.commit('changeSideBar')
  }
}

const mutations = {
  changeSideBar(state) {
    state.isSideBarOpen = !state.isSideBarOpen;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
