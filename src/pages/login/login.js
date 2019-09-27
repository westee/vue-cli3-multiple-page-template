import Vue from 'vue'
import router from './router'
import Login from './Login.vue'

new Vue({
    router,
    render: h => h(Login)
}).$mount('#login')