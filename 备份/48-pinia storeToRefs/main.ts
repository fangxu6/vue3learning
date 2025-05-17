import { createApp } from 'vue'
import App from './App.vue'

// 引入pinia
import { createPinia } from 'pinia'

const app = createApp(App)

//创建pinia实例，在App创建之后(建议)
const pinia = createPinia()
// 第三步：安装pinia
app.use(pinia)

// 挂载整个应用到app容器中
app.mount('#app')
