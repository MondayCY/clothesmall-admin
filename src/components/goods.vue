<template>
    <div>
   <el-table
   border
    :data="products"
    style="width:100%"
    max-height="450"
    class="mt-4">
    <el-table-column
      fixed
      prop="kind"
      label="商品种类"
      width="90"
        align="center">
    </el-table-column>
    <el-table-column
      prop="product"
      label="商品名称"
      width="180">
    </el-table-column>
    <el-table-column
    prpo="image"
      label="商品图"
      width="180"
      align="center"
      >
        <template slot-scope="scope">
    <el-image :src="scope.row.image" style="width: 60px; height:60px" :preview-src-list="[scope.row.image]">
        <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
    </el-image>
  </template>
    </el-table-column>
    <el-table-column
      prop="pirce"
      label="商品单价"
      width="120"
        align="center">
    </el-table-column>
     <el-table-column
      fixed="right"
      label="商品操作"
      width="100"
        align="center">
      <template slot-scope="scope">
        <el-button @click="deletepro(scope.row)" type="text" size="small">下架商品</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
  background
  layout="prev, pager, next"
  :page-size="7"
  :total="total"
  @current-change="page"
  class="mt-3">
</el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
          total:null,
        products: [{
          kind: '',
          product: '',
          pirce:'',
          image:'',
        }],
        dialogFormVisible: false,
        formLabelWidth: '120px',
        kinds:[
          {
            index:'0',
            name:'上装'
          },
             {
            index:'1',
            name:'裙装'
          },
             {
            index:'2',
            name:'下装'
          }
        ]
      };   
    },
    mounted() {
        
    },
    created(){
      const _this = this;
      this.$axios.get('http://localhost:8282/product/findAll/1/7').then(function(resp){
       console.log(resp);
       _this.products=resp.data.content;
        _this.total= resp.data.totalElements;
      })
    },
    methods: {
      // 商品下架函数
        deletepro(row) {
          const _this=this;
                  _this.$confirm('此操作将下架该商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           _this.$axios.delete('http://localhost:8282/product/deleteById/'+row.id)
          .then(function(resp){
            // 删除成功后实现网页自动动态刷新
            window.location.reload()
          })
          _this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          _this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
         
      },
      // 商品列表分页展示
      page(currentPage)
      {
        const _this = this;
      this.$axios.get('http://localhost:8282/product/findAll/'+currentPage+'/7').then(function(resp){
        _this.products=resp.data.content;
        _this.total= resp.data.totalElements
      })
      }
    }
};
</script>

<style scoped>

</style>
