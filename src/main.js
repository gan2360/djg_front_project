import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'


import Swiper from 'swiper'
import "swiper/css/swiper.css";


Vue.use(VueRouter)
Vue.config.productionTip = false



new Vue({
    render: h => h(App),
    router,
    beforeCreate() {
        Vue.prototype.$axios = axios
    }
}).$mount('#app')