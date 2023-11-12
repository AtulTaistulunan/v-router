import Vue from 'vue'
import Router from 'vue-router'

// 使用路由插件
Vue.use(Router)

//導入組件
import MainRouter from './pages/main/indexRouter.vue'

//實例化路由
let router = new Router({
    mode: 'hash', //1.hash:url帶#號2history歷史:url不戴#號
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/", //url路徑"/"代表首頁, http://localhost:8080/
            name: 'main', //路由的名字
            component: MainRouter
        },
        {
            path: '/news',
            name: 'news',
            component: ()=> import('./pages/news') //異步導入
        },
        {
            path: '/goods',
            name: "goods",
            component: ()=>import('./pages/goods')
        },
        // {
        //     path: '/user/:id/:nickname',
        //     name: 'use',
        //     component: ()=>import('./pages/user')
        // },
        {
            path: '/user',
            name: 'use',
            component: ()=>import('./pages/user')
        }

    ]
})

export default router