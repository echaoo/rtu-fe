/**
 * Created by lhy95 on 2017/2/25.
 */
import auth from '../../api/auth'

const state = {
  isLogin: null
}

const getters = {
  isLogin: state => state.isLogin
}

const actions = {
  doLogin(context, {name, password}) {
    return auth.doLogin(name, password).then(
      (res) => {
        if (res === '0') {
          context.commit('setLogin', true)
        }
        else {
          context.commit('setLogin', false)
        }
        return res
      },
      () => {
        return -1
      }
    )
  },
  checkLogin(context) {
    return new Promise ((resolve, reject) => {
      if (context.state.isLogin !== null) {
        resolve(context.state.isLogin)
      }
      else {
        auth.checkLogin().then(
          (res) => {
            if (res.data.status === '0') {
              context.commit('setLogin', true)
              resolve(context.state.isLogin)
            }

          }
        )
      }
    })

  }
}

const mutations = {
  setLogin(state, loginStatus) {
    state.isLogin = loginStatus;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
