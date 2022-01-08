import Vue from 'vue'
import App from './App.vue'

// import {sayHello, testParam, testBody} from "@/test";

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

// sayHello()
// testParam("hello", "world")
// testBody("hello", "world")