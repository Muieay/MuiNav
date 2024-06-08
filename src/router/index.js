import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/view/home";
const Edit = () => import(/* webpackChunkName: "edit" */ '@/view/edit');
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/', component: Home,
        },
        {
            path: '/edit',component: Edit
        }
    ]
})

