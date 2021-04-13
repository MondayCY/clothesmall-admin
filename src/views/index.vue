<template>
    <div style="width:100%" class="back">
        <div>
            <p class="index text-center font-weight-bolder" >Monday-Mall后台管理</p>
            <p class="index2 text-center">Monday-Mall，一个为消费者准备的品牌服装商城后台管理库</p>
     </div>
     <div class="mt-3" style="margin-left:180px;">
       <div class="card float-left mr-5" style="width: 14rem;">
  <img src="https://gd3.alicdn.com/imgextra/i3/2401435696/O1CN01WKkHIa1rwoeSkWYSe_!!2401435696.jpg_400x400.jpg" class="card-img-top" title="卫衣、外套、T恤">
  <div class="card-body">
    <h4 class="card-title text-center font-weight-bold">上装</h4>
    <p class="card-text font-weight-light">追求内心的梦，希望努力之后实现的光辉，照进现实</p>
  </div>
</div>
  <div class="card float-left mr-5" style="width: 14rem;">
  <img src="https://gd3.alicdn.com/imgextra/i1/2401435696/O1CN01npk2Eo1rwodIboFmK_!!2401435696.jpg_400x400.jpg" class="card-img-top" title="半身裙、连衣裙">
  <div class="card-body">
     <h4 class="card-title text-center font-weight-bold">裙装</h4>
    <p class="card-text font-weight-light">每个人的时光都是不断前进，看似重放，但用不重播的独家电影...</p>
  </div>
</div>
  <div class="card mr-5" style="width: 14rem;">
  <img src="https://gd2.alicdn.com/imgextra/i4/2401435696/O1CN01jpIiFF1rwoeY1RJnr_!!2401435696.jpg_400x400.jpg" class="card-img-top" title="牛仔裤、休闲裤">
  <div class="card-body">
    <h4 class="card-title text-center font-weight-bold">下装</h4>
    <p class="card-text font-weight-light">春的气息渐渐袭近，愿你与我们一样，美好、简单...</p>
  </div>
</div>
</div>
     </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style>
.back{
  background: url('../static/登录界面.jpg');
  background-size: 100%;
}
.index{
     color:#555;
     font-size:34px;
     font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
}
 .index2{
     font-weight:400;
     font-size:18px;
     color: #888;
     font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
 }
</style>