import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'

import { Form, Button, FormItem, Input } from 'element-ui'
Vue.use({ Form, Button, FormItem, Input })
Vue.component(Form.name, Form)
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(FormItem.name, FormItem)
Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    router,
    beforeCreate() {
        Vue.prototype.$axios = axios
    }
}).$mount('#app')