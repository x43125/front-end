<template>
  <div class="hello">
   <!-- <div v-for="(item,index) in items" :key="index">
    <div> {{item.key}} </div>
   </div> -->
   <button @click="increment">Count is : {{ count }}</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
