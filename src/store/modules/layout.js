/**
 * Created by lhy95 on 2017/2/26.
 */

import layout from '../../api/layout'

const state = {
  isSideBarOpen: true,
  isRightMenuOpen: false, // 控制区块列表的开合
  // sideBarList: [],
  sideBarList: [
    {
      ID: 1,
      MapPath: "202.194.155.189:9999/Upload/1.png",
      Name: "油井区块一",
      Sort: null
    },
    {
      ID: 2,
      MapPath: "202.194.155.189:9999/Upload/2.png",
      Name: "油井区块二",
      Sort: null
    },
    {
      ID: 3,
      MapPath: "202.194.155.189:9999/Upload/3.png",
      Name: "油井区块三",
      Sort: null
    },
    {
      ID: 4,
      MapPath: "202.194.155.189:9999/Upload/4.png",
      Name: "油井区块四",
      Sort: null
    },
    {
      ID: 5,
      MapPath: "202.194.155.189:9999/Upload/5.png",
      Name: "油井区块五",
      Sort: null
    },
    {
      ID: 6,
      MapPath: "202.194.155.189:9999/Upload/6.png",
      Name: "油井区块六",
      Sort: null
    },
    {
      ID: 7,
      MapPath: "202.194.155.189:9999/Upload/6.png",
      Name: "油井区块七",
      Sort: null
    },
    {
      ID: 8,
      MapPath: "202.194.155.189:9999/Upload/8.png",
      Name: "油井区块八",
      Sort: null
    },
    {
      ID: 9,
      MapPath: "202.194.155.189:9999/Upload/2.png",
      Name: "油井区块九",
      Sort: null
    }
  ],
  selectedSide: 0,
  showIndex: true, //是否显示左侧主菜单
  blockId: 1 //油井ID
}

const getters = {
  isSideBarOpen: state => state.isSideBarOpen,
  sideBarList: state => state.sideBarList,
  selectedSide: state => state.selectedSide,
  isRightMenuOpen: state => state.isRightMenuOpen,
  showIndex: state => state.showIndex,
  blockId: state => state.blockId
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
  },
  setNavSwitch(context) {
    context.commit('setNavSwitch')
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
  },
  setNavSwitch(state) {
    state.showIndex = !state.showIndex
  },
  getBlockId(state, id) {
    state.blockId = id
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
