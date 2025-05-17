// 引入createApp用于创建Vue应用实例
import { createApp } from 'vue'
// 引入App组件作为根组件
import App from './App.vue'
// 引入路由器
import router from './router'

// app和index.html中的id要一致
// createApp(App).mount('#app')
// 创建Vue应用实例
const app = createApp(App)
// 使用路由器
app.use(router)
// 挂载整个应用到app容器中
app.mount('#app')
