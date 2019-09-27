import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/sub1',
    component: r =>  {
        require(['./subpage/subpage.vue'], r)
      }
},{
    path: '/sub2',
    component: r =>  {
        require(['./subpage/sub2.vue'], r)
      }
},{
    path: '/sub3',
    component: r =>  {
        require(['./subpage/sub3.vue'], r)
      }
},{
    path: '/sub4',
    component: r =>  {
        require(['./subpage/sub4.vue'], r)
      }
}]

export default new VueRouter({
    routes
})