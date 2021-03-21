export default {
    logo: 'MONDAY-MALL',
    navBar: {
        active: '0',
        list: [{
                name: "首页",
                subActive: "0",
                //子菜单
                submenu: [{
                        icon: "el-icon-s-home",
                        name: "后台首页"
                    },
                    {
                        icon: "el-icon-s-goods",
                        name: "商品列表"
                    }
                ]
            },
            {
                name: "商品管理",
                subActive: "0",
                //子菜单
                submenu: [{
                        icon: "el-icon-s-goods",
                        name: "商品列表"
                    }

                ]
            },
            {
                name: "订单管理"
            },
            {
                name: "用户管理"
            },
            {
                name: "设置"
            },

        ]

    }

}