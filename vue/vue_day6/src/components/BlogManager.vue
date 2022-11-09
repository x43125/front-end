<template>
  <div>
    <div>
      <h3>{{msg}}</h3>
    </div>
    <div>
      <div id="uploadBlog">
        <input type="file" @change="getFile($event)"/>
        <button @click="uploadBlog">上传</button>
        <div>{{result}}</div>
        <div v-show="uping==1">正在上传中</div>
      </div>
      <div id="downloadBlog">
        

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogManager",
  data() {
    return {
      msg: "blogManger",
      upath,
    }
  },
  methods: {
    uploadBlog: function () {
      var zipFormData = new FormData();
      zipFormData.append('filename', this.upath);
      let config = {headers: {'Content-Type':'multipart/form-data'}};
      this.uping = 1;
      this.$http.post('http://localhost:8081/blogManager/uploadBlog', zipFormData, config).then(function (response) {
        console.log(response);
        console.log(response.data);
        console.log(response.data);

        var resultObj = response.data;
        this.uping = 0;
        this.result = resultObj.msg;
      });
    },
    getFile: function (event){
      this.upath = event.target.files[0];
      console.log(event);
      console.log(event.target.files);
      console.log(event.target.files[0].name);
    }
  }
}
</script>

<style scoped>

</style>
