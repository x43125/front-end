import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import store from './store'
import Vuex from "vuex";
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(Vuex);

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store,
})
