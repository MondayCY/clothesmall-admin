<template>
    <div>
         <div style="margin-bottom:15px">
    <span class="text-secondary font-weight-bolder">商品订单查看</span>
  </div>
        <div>
            <el-table
            :cell-style="{ padding:'0px' }"
    :data="orders"
    border
    style="width: 100%"
    max-height="450">
    <el-table-column
      prop="image"
      label="订单商品图片"
      width="120"
      align="center">
       <template slot-scope="scope">
    <el-image :src="scope.row.image" style="width: 50px; height:50px" :preview-src-list="[scope.row.image]">
        <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
    </el-image>
  </template>
    </el-table-column>
        <el-table-column
      prop="product"
      label="订单商品名称"
      width="140">
    </el-table-column>
    <el-table-column
      prop="number"
      label="订单量"
      width="70" align="center">
    </el-table-column>
        <el-table-column
      prop="money"
      label="订单价"
      width="70" align="center">
    </el-table-column>
      <el-table-column
      prop="user"
      label="用户ID"
      width="80" align="center">
    </el-table-column>
    <el-table-column
      prop="iphone"
      label="用户电话"
      width="150"  align="center">
    </el-table-column>
    <el-table-column
      prop="address"
      label="订单地址"
      width="180"  align="center">
    </el-table-column>
     <el-table-column prop="status" label="订单状态" width="80" align="center">

   </el-table-column>   
   <el-table-column prop="status" label="状态操作" width="120" align="center">
 <template slot-scope="scope">
<el-button @click="edit(scope.row)" type="primary" plain size="small">编辑订单状态</el-button>
   </template>
   </el-table-column> 
  
 </el-table>
 <el-pagination
  background
  layout="prev, pager, next"
  :page-size="6"
  @current-change="page"
  :total="total"
  class="mt-3">
</el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          total:null,
            orders:[{
             image:'',
                product:'',
                number:'',
                money:'',
                user:'',
                iphone:'',
                address:'',
                status:''

            }],
            }
            
    },
    created(){
      const _this=this;
      this.$axios.get("http://localhost:8383/order/findAll/1/6").then(
        function(resp){
          _this.orders=resp.data.content;
          _this.total= resp.data.totalElements;

        }
      )
    },
    mounted() {
        
    },
    methods: {
        edit(row) {
          this.$router.push({
            path:'/orderupdate',
            query:{
              id:row.id
            }
          })
          
        
      },
      page(currentPage){
        const _this = this;
      this.$axios.get('http://localhost:8383/order/findAll/'+currentPage+'/6').then(function(resp){
        _this.orders=resp.data.content;
        _this.total= resp.data.totalElements
    })
      }
    }
}
</script>

<style scoped>

</style>
