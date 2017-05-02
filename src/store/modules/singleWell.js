/**
 * Created by echaoo on 2017/4/17.
 */
const state = {
  isNowTime: false
}

const getters = {
  isNowTime: state => state.isNowTime
}

const mutations = {
  setIsNowTime (state, bool) {
    state.isNowTime = bool
  }

}

export default {
  state,
  getters,
  // actions,
  mutations
}
