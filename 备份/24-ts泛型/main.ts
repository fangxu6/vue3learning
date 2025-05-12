// 引入createApp用于创建Vue应用实例
import { createApp } from 'vue'
// 引入App组件作为根组件
import App from './App.vue'

// app和index.html中的id要一致
createApp(App).mount('#app')
