<template>
    <div>
        <el-container style="position: absolute;left:0;top:0;bottom:0;right:0;overflow:hidden;">
     <el-header class="d-flex align-items-center" style="background:#545c64;">
         <a href="/index" class="h5 text-light mb-0 mr-auto text-decoration-none">Monday-Mall</a>
<!-- <el-menu
  :default-active="navBar.active"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item :index="index.toString()" v-for="(item,index) in navBar.list" :key="index">{{item.name}}</el-menu-item>
</el-menu> -->
<el-dropdown @command="commander">
  <el-avatar  size="small" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2392153847,2334643711&fm=26&gp=0.jpg" ></el-avatar>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="logout">退出登录</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
     </el-header>
     <el-container style="height:100%;">
         <!-- 侧边布局 -->
    <el-aside width="200px">

          <!-- <el-menu style="height:100%"
      default-active="2" @select="slideSelect">
      <el-menu-item v-for="(item,index) in slideMenus" :key="index" :index="index|numToString()">
        <i :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item> -->
    <!-- </el-menu> -->
    <el-menu @select="menuclick"
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" style="height:100%;margin-right:30px">
     <el-menu-item index="/index" >
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/goodslist">
        <i class="el-icon-menu"></i>
        <span slot="title">商品列表</span>
      </el-menu-item>
      <el-menu-item index="/orderslist">
        <i class="el-icon-document"></i>
        <span slot="title">订单列表</span>
      </el-menu-item>
      <el-menu-item index="/userslist">
        <i class="el-icon-user"></i>
        <span slot="title">用户列表</span>
      </el-menu-item>
          <el-menu-item index="/goodadmin">
        <i class="el-icon-s-cooperation"></i>
        <span slot="title">商品上架管理</span>
      </el-menu-item>
          <el-menu-item index="/orderupdate" style="display:none">
      </el-menu-item>
    
    </el-menu>
    </el-aside>
    <!-- 主内容 -->
  <router-view class="ml-auto mr-auto" style="padding-top:10px;height:100%"></router-view>
  </el-container>
</el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
          dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
        };
    }, 
    created(){
    },
    mounted() {
        
    },
    computed:{
    //     slideMenuActive:{
    //         get(){
    //           return this.navBar.list[this.navBar.subActive].subActive || '0'
    //         },
    //         set(val){
    //       this.navBar.list[this.navBar.active].subActive=val
    //         }
    //     },

    //     slideMenus(){
    //         return this.navBar.list[this.navBar.active].submenu||''
    //     }

    },
    methods: {
        menuclick(index)
        {
                 this.$router.push(index);
        },

//         handleSelect(key, keyPath) {
//         this.navBar.active=key;
//       },
//       slideSelect(key,keyPath)
//       {
//       this.slideMenuActive=key
//       },
      commander(command){
          if(command=='logout')
          {
              this.$router.replace('/login')
          }
      }
      
  }
}
</script>

<style scoped>
.monday{
    text-align: center;
    font-size: 38px;
}
</style>