import Vue from 'vue'
import VueRouter from 'vue-router'
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import main from '../views/vMain'
import home from '../views/vHome'
import login from '../views/vLogin'
import mall from '../views/vMall'
import user from '../views/vUser'
import pageOne from '../views/pageOne'
import pageTwo from '../views/pageTwo'

Vue.use(VueRouter)

// 2. 定义路由'
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', 
  component: main,
  redirect: '/home',
  children: [
    { path: 'home', name:"home", component: home },
    { path: 'login', name:"login", component: login },
    { path: 'mall', name:"mall",component: mall },
    { path: 'user', name:"user", component: user },
    { path: '/page1', name:"page1", component: pageOne },
    { path: '/page2', name:"page2", component: pageTwo },
  ]
 },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router

