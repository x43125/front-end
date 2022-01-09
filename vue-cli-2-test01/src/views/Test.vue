<template>
  <div>
    <el-container>
      <el-header>
        <h1>{{ msg }}</h1>
      </el-header>
      <el-main>
        <div>
          <el-input v-model="inputVal" placeholder="请输入内容"></el-input>
          <el-button @click="print(inputVal)">打印</el-button>
        </div>
        <div>
          <el-button @click="sayHello()">sayHello</el-button>
          <el-button @click="testGet()">testGet</el-button>
        </div>
        <div>
          <el-input v-model="param1" placeholder="请输入参数1"></el-input>
          <el-input v-model="param2" placeholder="请输入参数2"></el-input>
          <el-button @click="testParam(param1, param2)">testParam</el-button>
        </div>
        <div>
          <el-input v-model="requestBody.key1" placeholder="请输入参数1"></el-input>
          <el-input v-model="requestBody.key2" placeholder="请输入参数2"></el-input>
          <el-button @click="testBody(requestBody)">testBody</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {sayHello, testGet, testParam, testBody} from "@/api/test/test";

export default {
  name: "Test",
  data() {
    return {
      msg: "用于测试的页面",
      inputVal: "",
      param1: "",
      param2: "",
      requestBody: {
        key1: "",
        key2: ""
      }
    }
  },
  methods: {
    print(inputVal) {
      console.log(inputVal);
      alert(inputVal);
    },
    sayHello() {
      sayHello().then(res => {
          console.log(res);
          alert(res)
        }
      ).catch(error => {
        console.log(error);
      })
    },
    testGet() {
      testGet().then(res => {
          console.log(res);
          alert(res)
        }
      ).catch(error => {
        console.log(error);
      })
    },
    testParam(param1, param2) {
      console.log((param1 + param2));
      testParam(param1, param2).then(res => {
        console.log(res)
        alert(res)
      }).catch(error => {
        console.log(error)
      })
    },
    testBody(requestBody) {
      console.log(requestBody.param1 + requestBody.param2);
      testBody(requestBody).then(res => {
        console.log(res);
        alert(res)
      }).catch(error => {
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>

</style>
