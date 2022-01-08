<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="sayHello">sayHello</button>
    <button @click="testParam">testParam</button>
    <button @click="testBody">testBody</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {sayHello, testParam, testBody} from "@/test";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    sayHello() {
      sayHello();
    },
    testParam() {
      testParam("hello", "world");
    },
    testBody() {
      testBody("hello", "world");
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
