<template>
    <div>
        <el-container style="position: absolute;left:0;top:0;bottom:0;right:0;overflow:hidden;">
     <el-header class="d-flex align-items-center" style="background:#545c64;">
         <a href="" class="h5 text-light mb-0 mr-auto text-decoration-none">{{$conlog.logo}}</a>
<el-menu
  :default-active="navBar.active"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item :index="index.toString()" v-for="(item,index) in navBar.list" :key="index">{{item.name}}</el-menu-item>
   <el-submenu index="6">
    <template slot="title">
            <el-avatar size="small" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3380722148,1946438640&fm=26&gp=0.jpg"></el-avatar>
        xiaocheng</template>
    <el-menu-item index="6-1">修改</el-menu-item>
    <el-menu-item index="6-2">退出</el-menu-item>
  </el-submenu>
</el-menu>
     </el-header>
     <el-container style="height:100%;">
         <!-- 侧边布局 -->
    <el-aside width="200px">

          <el-menu style="height:100%"
      default-active="2" @select="slideSelect">
      <el-menu-item v-for="(item,index) in slideMenus" :key="index" :index="index|numToString()">
        <i :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <!-- 主内容 -->
    <el-main>
        <!-- 面包屑导航 -->
    <div style="padding:20px;margin:-20px" class="border-bottom">
        <el-breadcrumb>
        <el-breadcrumb-item v-for="(item,index) in bran" :key="index" :to="{ path: item.path }">{{item.title}}</el-breadcrumb-item>
</el-breadcrumb>
   </div> </el-main>
  </el-container>
</el-container>
    </div>
</template>

<script>
import common from "@/common/mixins/common.js"
export default {
    mixins:[common],
    data() {
        return {
            navBar:[],
            bran:[]
        };
    }, 
    created(){
        this.navBar=this.$conlog.navBar
        //获取面包屑导航
        this.getRouterBran()
    },
    mounted() {
        
    },
    computed:{
        slideMenuActive:{
            get(){
              return this.navBar.list[this.navBar.subActive].subActive || '0'
            },
            set(val){
          this.navBar.list[this.navBar.active].subActive=val
            }
        },

        slideMenus(){
            return this.navBar.list[this.navBar.active].submenu||''
        }

    },
    methods: {
        //获取面包屑导航
        getRouterBran(){
            let arr=[]
            let b =this.$route.matched.filter(v=>v.name)
            b.forEach((v,k)=>
            {
                if(v.name === 'index' || v.name==='layout')
                return
                arr.push({
                    name:v.name,
                    path:v.path,
                    title:v.meta.title
                })
            })
            if(arr.length > 0)
            {
                arr.unshift({
                    name:'index',
                    path:'/index',
                    title:'后台首页'
                })
            }
            this.bran=arr,
            console.log(arr);

        },

        handleSelect(key, keyPath) {
        this.navBar.active=key;
      },
      slideSelect(key,keyPath)
      {
      this.slideMenuActive=key
      }
      
    },
};
</script>

<style scoped>

</style>