import VueRouter from 'vue-router'
// 1. 定义 (路由) 组件 可以从其他文件 import 进来
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue';
import Template from '@/components/Template.vue'
import Home from '@/pages/Home'
import ProductList from '@/pages/products/ProductList'

// 定义路由
const routes = [
  {path:'/hello',component:HelloWorld},
  {path:'/login',component:Login},
  {path:'/',component:Template,
    children:[
      {
        path:"Home",
        component:Home
      },
      {
        path:'ProductList',
        component:ProductList
      },
    ]
  }
]

//  创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes :routes
})

export default router