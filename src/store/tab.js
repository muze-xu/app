import Cookies from "js-cookie"
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
    menu: []

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
    },
    // 更新面包屑数据
    closeTag(state, index) {
      state.tableList.splice(index, 1)
    },
    setMenu(state, val) {
      state.menu = val
      Cookies.set('menu', JSON.stringify(val))
    },
    addMenu(state, router) {
      if (!Cookies.get('menu')) {
        return
      }
      const menu = JSON.parse(Cookies.get('menu'))
      console.log(menu,'menu')
      state.menu = menu
      // 组装动态路由的数据
      const menuArray = []
      menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            item.component = () => import(`../views/${item.url}`)
            return item
          })
          menuArray.push(...item.children)
        }else{
          item.component = () => import(`../views/${item.url}`)
          menuArray.push(item)
        }
      });
      console.log(menuArray,'menuArray')
      menuArray.forEach(item =>{
        router.addRoute('main',item)
      })
      console.log(router)
    }
  }
}