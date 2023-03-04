export default {
  state: {
    isCollapse: false,  // 控制菜单的展开还是收起
    tableList: [
      {
        path: "/home",
        name: "home",
        label: "首页",
        icon: "s-home",
        url: "Home/Home",
      },
    ],  // 面包屑的数据

  },
  mutations: {
    // 修改菜单展示收起的方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    // 更新面包屑数据
    selectMenu(state, val) {
      // 判断添加的数据是否为首页
      if (val.name === "home") {
        return
      }
      const index = state.tableList.findIndex(item => item.name === val.name)
      if (index !== -1) {
        return
      }
      state.tableList.push(val)
      // console.log(state.tableList)
    }
  }
}