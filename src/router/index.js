import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout.vue'
import index from '../views/index.vue'
import login from '../views/login/login.vue'
import goodslist from '../views/goodslist.vue'
import orderslist from '../views/orderslist.vue'
import userslist from '../views/userslist.vue'
import axios from 'axios'
import goodadmin from '../views/goodadmin.vue'
import orderupdate from '../views/orderupdate.vue'

Vue.prototype.$axios = axios;
Vue.use(Router)
export default new Router({
    mode: "history",
    routes: [{
            path: '/',
            name: 'layout',
            component: layout,
            redirect: { name: 'login' },
            children: [{
                    path: '/index',
                    name: 'index',
                    component: index
                },
                {
                    path: '/goodslist',
                    name: 'goodslist',
                    component: goodslist,

                },
                {
                    path: '/goodadmin',
                    name: 'goodadmin',
                    component: goodadmin
                }, {
                    path: '/orderslist',
                    name: 'orderslist',
                    component: orderslist
                },
                {
                    path: '/orderupdate',
                    name: 'orderupdate',
                    component: orderupdate,
                },
                {
                    path: '/userslist',
                    name: 'userslist',
                    component: userslist
                },
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