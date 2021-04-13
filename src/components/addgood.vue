<template>
  <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm mt-2">
    <el-form-item label="商品编号" prop="proid">
    <el-input v-model="ruleForm.proid"></el-input>
  </el-form-item>
  <el-form-item label="商品名称" prop="product">
    <el-input v-model="ruleForm.product"></el-input>
  </el-form-item>
  <el-form-item label="商品种类" prop="kind">
    <el-select v-model="ruleForm.kind" placeholder="请选择商品类别">
      <el-option label="上装" value="上装"></el-option>
      <el-option label="裙装" value="裙装"></el-option>
      <el-option label="下装" value="下装"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="商品图片地址" prop="image">
    <el-input v-model="ruleForm.image"></el-input>
  </el-form-item>
  <el-form-item label="商品单价" prop="pirce">
    <el-input v-model="ruleForm.pirce"></el-input>
  </el-form-item>
  <el-form-item label="商品详情图地址" prop="introduce">
    <el-input v-model="ruleForm.introduce"></el-input>
  </el-form-item>
   <el-form-item label="商品库存" prop="number">
    <el-input v-model="ruleForm.number"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
             ruleForm: {
         proid:'',
          kind: '',
          product: '',
          pirce:'',
          image:'',
          number:'',
          introduce:''
        },
        rules:{
          proid:[
            {required:true,message:"商品编号不能为空",trigger:'blur'}
          ],
          kind:[
                    {
                required:true,message:"请选择商品种类",trigger:'blur'
                    }
                ],
          product:[
                    {
                required:true,message:"商品名称不能为空",trigger:'blur'      
                    }
                ],
                introduce:[
                    {
                required:true,message:"请输入商品详情",trigger:'blur'      
                    }
                ],
                pirce:[
                    {
                required:true,message:"请输入商品单价",trigger:'blur'      
                    }
                ],
                image:[
                    {
                required:true,message:"请输入商品图片地址",trigger:'blur'      
                    }
                ],
                number:[
                    {
                required:true,message:"请输入商品库存",trigger:'blur'      
                    }
                ]
            },
            
        }
    },
methods:{ 
    submitForm(formName) { 
        const _this=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.$axios.post("http://localhost:8282/product/save",_this.ruleForm).then(function(resp){
               console.log(resp);
               if(resp.data=='success')
               {  
                   _this.$alert('商品上架成功','上架商品',  {
          confirmButtonText: '确定',
          callback: action => {
           _this.$router.push('/goodslist')
          }
        });
                   
               }
               else{
                   _this.$message("商品上架失败")
               }
           })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }}
}
</script>

<style>
</style>