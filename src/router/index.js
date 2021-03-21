import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout.vue'
import index from '../views/index.vue'
import login from '../views/login/login.vue'
import goodslist from '../views/login/goodslist.vue'


Vue.use(Router)

//获取路由信息
// let getRoutes =function () {
//     //生成路由信息
//     createRoute(routes)
//     return routes

// }
// function createRoute(arr) {
// for (let i = 0; i < arr.length; i++) {
// if (!arr[i].component)
//  {return}
// let componentFun = import(`../views/${arr[i].component}.vue`)
// arr[i].component = ()=>componentFun 
// if (arr[i].children && arr[i].children.length>0) {
//     createRoute(arr[i].children)

// }
// }
export default new Router({
    routes: [{
            path: '/',
            name: 'layout',
            redirect: { name: 'index' },
            component: layout,
            children: [{
                    path: '/index',
                    name: 'index',
                    meta: { title: '后台首页' },
                    component: index
                },
                {
                    path: '/goodslist',
                    name: 'goodslist',
                    meta: { title: '商品列表' },
                    component: goodslist
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '*',
            redirect: { name: 'index' },
        }
    ]

})