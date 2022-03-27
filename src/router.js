import Vue from 'vue'
import Router from 'vue-router'

import Home from "./views/HomeTest2.vue"
import Users from "./views/UsersTest2.vue"


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Home },
        { path: '/users', component: Users }
    ]
})