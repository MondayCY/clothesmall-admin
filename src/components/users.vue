<template>
    <div>
        <div style="margin-bottom:15px">
    <span class="text-secondary font-weight-bolder">已注册用户信息</span>
  </div>
        <div>
    <el-table
    :data="users"
    border
    style="width: 100%"
    max-height="450">
    <el-table-column
      prop="userimage"
      label="用户头像"
      width="180"
        align="center">
          <template slot-scope="scope">
    <el-image :src="scope.row.userimage" style="width: 50px; height:50px" :preview-src-list="[scope.row.userimage]">
        <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
    </el-image>
  </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户名"
      width="180"
        align="center">
    </el-table-column>
        <el-table-column
      prop="iphone"
      label="用户电话"
      width="180"
        align="center">
    </el-table-column>
      <el-table-column
      prop="address"
      label="用户地址"
      width="180"
        align="center">
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
             users:[{
               userimage:'',
               name:'',
               iphone:'',
               address:''
            }]
        };
    },
    created(){
      const _this = this;
      this.$axios.get("http://localhost:8585/user/findAll/1/6").then(function(resp){
       _this.users=resp.data.content;
        _this.total= resp.data.totalElements
      })
    },
    mounted() {
        
    },
    methods: {
          page(currentPage)
      {
        const _this = this;
      this.$axios.get('http://localhost:8585/user/findAll/'+currentPage+'/6').then(function(resp){
        _this.users=resp.data.content;
        _this.total= resp.data.totalElements
      })
      }
        
    },
};
</script>

<style scoped>

</style>
