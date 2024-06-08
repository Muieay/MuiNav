import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/view/home";
import {caesarDecrypt} from '@/utils/GithubUtil'

const env = process.env;
const check = `${env.VUE_APP_USER}` + caesarDecrypt(`${env.VUE_APP_PWD}`, `${env.VUE_APP_KEY}`)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', component: Home,
        },
        {
            path: '*', redirect: '/'
        },
        {
            path: '/edit',
            component: () => import('@/view/edit')
        },
        {
            path: '/404',
            component: () => import('@/view/404')
        },
        {
            path: '/admin',
            component: () => import('@/view/admin')
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path == '/edit') {
        const token = sessionStorage.getItem('check')
        if (token == check) {
            next()
        } else {
            next('/404')
        }
    } else {
        next()
    }
})

export default router
