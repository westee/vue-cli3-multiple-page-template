import './index.css'
import Vue from 'vue'
import router from './router'
import Index from './Index.vue'

new Vue({
    router,
    render: h => h(Index)
}).$mount('#app')