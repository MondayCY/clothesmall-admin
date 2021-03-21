<template>
<div>
    <div class="container">
        <div class="row">
            <!--12-->
            <div class="col-12 col-sm-9 col-md-7 col-lg-5 m-auto pt-5">
        <div class="card mt-5">
            <div class="card-header bg-white">
                <h3 class="text-center mb-0 text-secondary">{{$conlog.logo}}</h3>
            </div>
            <div class="card-body">
                <el-form ref="form" :model="form" :rules="rules">
                   <el-form-item prop="admin">
                       <el-input v-model="form.admin" size="medium"  placeholder="请输入管理员账号"></el-input>
                        </el-form-item>
                   <el-form-item prop="password">
                       <el-input v-model="form.password" size="medium"  placeholder="请输入管理员密码" type="password"></el-input>
                        </el-form-item>
                      <el-form-item>
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
            form:{
                admin:"",
                password:""
            },
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
    mounted() {
        
    },
    methods: {
        submit(){
            this.$refs.form.validate((e)=>
            {
             if(!e) return;
             //提交表单
             this.$router.push({name:'layout'})
            })
        }
    },
};
</script>

<style>

</style>