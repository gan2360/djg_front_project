import VueRouter from 'vue-router'
import LoginPage from '../pages/LoginPage'

export default new VueRouter({
    routes: [{
        name: 'Login',
        path: '/',
        component: LoginPage
    }]
})