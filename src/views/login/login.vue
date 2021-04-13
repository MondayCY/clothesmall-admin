<template>
<div class="box">
    <div class="container">
        <div class="row">
            <!--12-->
            <div  class="col-12 col-sm-9 col-md-7 col-lg-5 m-auto pt-5">
        <div class="border-0 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                <h3 class="text-center mb-0 text-secondary">Monday-Mall</h3>
            <div class="card-body">
                <el-form ref="form" :model="form" :rules="rules">
                   <el-form-item prop="admin">
                       <el-input v-model="form.admin" size="medium"  placeholder="请输入管理员账号"></el-input>
                        </el-form-item>
                   <el-form-item prop="password">
                       <el-input v-model="form.password" size="medium"  placeholder="请输入管理员密码" type="password"></el-input>
                        </el-form-item>
                      <el-form-item>
                         
                          <el-checkbox v-model="checked" >记住我</el-checkbox>
                       <el-button class="w-100" type="primary" size="medium" @click="submit">立即登录</el-button>
                          </el-form-item>
                </el-form>
            </div>
        </div></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            captchaUrl:"",
            form:{
                admin:"",
                password:"",
            },
            checked:true,
            rules:{
                admin:[
                    {
                required:true,message:"请输入管理员账号",trigger:'blur'
                    }
                ],
                password:[
                    {
                required:true,message:"请输入管理员密码",trigger:'blur'      
                    }
                ]
            }
            }
    },
    created(){
        // const _this=this
        // this.$axios.get('http://localhost:8181/login/findAll').then(res =>{
        //     console.log(res);
        // })
    },
    mounted() {
        
    },
    methods: {
        submit(){
            this.$refs.form.validate(async e=>
            {
             if(e) 
             {  
          const {data: res} = await this.$axios.get("http://localhost:8181/login/findAll",this.form)
          if(res[0].id == this.form.admin && res[0].pwd == this.form.password)
              {this.$router.push('/index')} 
               else 
               {
                this.$message.error('账号或者密码输入错误！');   
               }
            }    //  
                   //.提交表单 
                // 
             else{
            this.$message.error('请输入所有字段');
             return false;
             }
            })
        }
    },
};
</script>

<style scoped>

.box{
    background-image: url('../../static/login.jpg');
    background-size: 100%;
}

</style>