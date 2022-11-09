<template>
  <div>
    <h1>主页</h1>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in imgs" :key="item">
        <el-image
          :src="item"
          style="width: 100%; height: 100%"
          fit="scale-down"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import homeImg1 from "../assets/indexImages/1.jpg";
  import homeImg2 from "../assets/indexImages/2.jpg";
  import homeImg3 from "../assets/indexImages/3.jpg";
  import homeImg4 from "../assets/indexImages/4.jpg";
  import homeImg5 from "../assets/indexImages/5.jpg";
  import homeImg6 from "../assets/indexImages/6.jpg";
  import homeImg7 from "../assets/indexImages/7.jpg";

  export default {
    name: "Index",
    data() {
      return {
        imgs: [homeImg1, homeImg2, homeImg3, homeImg4, homeImg5, homeImg6, homeImg7]
      }
    }

  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
