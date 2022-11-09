<template>
  <div class="page-bar">
    <ul>
      <li v-if="cur>1"><a v-on:click="cur--,pageClick()">上一页</a></li>
      <li v-if="cur==1"><a class="banclick">上一页</a></li>
      <li v-for="index in indexs" v-bind:class="{ 'active': cur == index}">
        <a v-on:click="btnClick(index)">{{ index }}</a>
      </li>
      <li v-if="cur!=all"><a v-on:click="cur++,pageClick()">下一页</a></li>
      <li v-if="cur == all"><a class="banclick">下一页</a></li>
      <li><a>共<i>{{all}}</i>页</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PageBar",
  data () {
    return {
      all: 10, //总页数
      cur: 1,//当前页码
      totalPage: 0,//当前条数
    }
  },
  methods: {
//请求数据
    dataListFn: function(index){
      this.$axios.get("http://127.0.0.1:8090/demand/selectListByPage",
        {
          params:{
            page: index,
            limit:'10',
            state: 0
          }
        }).then((res) => {
        if(res.data.message == "success"){
          this.dataList=[];
          for(let i=0;i<res.data.data.length;i++){
            this.dataList.push(res.data.data[i])
          }
          this.all = res.data.totalPage;//总页数
          this.cur = res.data.pageNum;
          this.totalPage = res.data.totalPage;
        }

      });
    },
//分页
    btnClick: function(data){//页码点击事件
      if(data != this.cur){
        this.cur = data
      }
//根据点击页数请求数据
      this.dataListFn(this.cur.toString());
    },
    pageClick: function(){
//根据点击页数请求数据
      this.dataListFn(this.cur.toString());
    }
  },
  computed: {
//分页
    indexs: function(){
      var left = 1;
      var right = this.all;
      var ar = [];
      if(this.all>= 5){
        if(this.cur > 3 && this.cur < this.all-2){
          left = this.cur - 2
          right = this.cur + 2
        }else{
          if(this.cur<=3){
            left = 1
            right = 5
          }else{
            right = this.all
            left = this.all -4
          }
        }
      }
      while (left <= right){
        ar.push(left)
        left ++
      }
      return ar
    }
  }
}
</script>

<style scoped>
.page-bar{
  margin:40px auto;
  margin-top: 150px;

}
ul,li{
  margin: 0px;
  padding: 0px;
}
li{
  list-style: none
}
.page-bar li:first-child>a {
  margin-left: 0px
}
.page-bar a{
  border: 1px solid #ddd;
  text-decoration: none;
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #5D6062;
  cursor: pointer;
  margin-right: 20px;
}
.page-bar a:hover{
  background-color: #eee;
}
.page-bar a.banclick{
  cursor:not-allowed;
}
.page-bar .active a{
  color: #fff;
  cursor: default;
  background-color: #E96463;
  border-color: #E96463;
}
.page-bar i{
  font-style:normal;
  color: #d44950;
  margin: 0px 4px;
  font-size: 12px;
}
</style>
