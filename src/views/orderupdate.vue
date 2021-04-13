<template>
<div>
<el-form ref="orders" :model="orders" label-width="140px" class="mt-5">
  <el-form-item label="订单商品名称" prop="product" >
    <el-input v-model="orders.product" disabled></el-input>
  </el-form-item>
  <el-form-item label="用户ID" prop="user">
    <el-input v-model="orders.user" disabled></el-input>
  </el-form-item>
   <el-form-item label="用户电话" prop="iphone">
    <el-input v-model="orders.iphone" disabled></el-input>
  </el-form-item>
   <el-form-item label="订单地址" prop="address">
    <el-input v-model="orders.address" disabled></el-input>
  </el-form-item>
     <el-form-item label="订单状态" prop="status">
    <el-select v-model="orders.status" placeholder="请选择订单状态">
      <el-option label="已发货" value="已发货"></el-option>
      <el-option label="未发货" value="未发货"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="edit('orders')">更新</el-button>
    <el-button @click="order">取消更新</el-button>
  </el-form-item>
</el-form>

</div>
  
</template>

<script>
export default {
    data() {
        return {
            orders:{
                product:'',
                user:'',
                iphone:'',
                address:'',
                status:''
        }
        }
    },
    created(){
       const _this =this;
       this.$axios.get("http://localhost:8383/order/findById/"+this.$route.query.id).then(
           function(resp){
               _this.orders=resp.data
           }
       )
    },
    methods:{
         edit(formName) { 
        const _this=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.$axios.put("http://localhost:8383/order/update",this.orders).then(function(resp){
              
               if(resp.data=='success')
               {  
                   _this.$alert('状态更新成功','订单状态',  {
          confirmButtonText: '确定',
          callback: action => {
           _this.$router.push('/orderslist')
          }
        });    
               }
               else{
                   _this.$message("状态更新失败")
               }
           })
          } else {
            return false;
          }
        });
      },
      order(){
          this.$router.push('/orderslist')
      }
                }
          
        }
</script>

<style>

</style>