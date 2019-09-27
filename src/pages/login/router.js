import Vue from 'vue'
import VueRouter from 'vue-router'
// import sub from './sub/sub.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/sub',
    // component: sub
    component: r =>  {
        require(['./sub/sub.vue'], r)
      }
}]

export default new VueRouter({
    routes
})