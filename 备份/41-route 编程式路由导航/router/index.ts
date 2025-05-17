// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import { createRouter, createWebHistory } from 'vue-router'
// 引入一个一个可能要呈现组件
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import News from '@/components/News.vue'
import Detail from '@/components/Detail.vue'

// 第二步：创建路由器
const router = createRouter({
  history: createWebHistory(), //路由器的工作模式
  routes: [
    // 路由规则
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      name: 'xinwen',
      path: '/news',
      component: News,
      children: [
        {
          name: 'xinwenDetail',
          path: 'detail',
          component: Detail,
          // 传递参数

          props(route) {
            console.log('~~~route', route)
            return route.query
          }


        },
      ],
    },
    {
      path: '/',
      redirect: '/home',//重定向
    }
  ],
})

//暴露出去
export default router
