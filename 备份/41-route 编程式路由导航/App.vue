<template>
  <h2 class="title">Vue路由测试</h2>
  <!-- 导航区 -->
  <div class="navigate">
    <!-- <a href='#' class="active">首页</a>
    <a href='#'>新闻</a>
    <a href='#'>关于</a> -->
    <RouterLink replace to='/home' active-class="active">首页</RouterLink>
    <RouterLink replace :to="{ name: 'xinwen' }" active-class="active">新闻</RouterLink>
    <RouterLink replace to='/about' active-class="active">关于</RouterLink>
  </div>
  <!-- 展示区 -->
  <div class="main-content">
    <!-- 此处以后可能要展示各种组件，到底展示哪个组件，需要看路径 -->
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router'


</script>

<style>
.app {
  background-color: #f0f0f0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.title {
  text-align: center;
  word-spacing: 5px;
  margin: 20px 0;
  height: 70px;
  line-height: 70px;
  background-image: linear-gradient(45deg, #f3ec78, #af4261);
  color: #fff;
  font-size: 30px;
  box-shadow: 0 0 2px;
  border-radius: 10px;
}

.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}

.navigate a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  ;
  text-decoration: none;
  color: #333;
  font-size: 20px;
  padding: 10px;
  border-radius: 10cap;
  transition: background-color 0.3s, color 0.3s;
  background-color: gray;
  letter-spacing: 5px;
}

.navigate a.active {
  background-color: #4CAF50;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  ;
}

.main-content {
  margin: 0 auto;
  margin-top: 30px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 80%;
  height: 500px;
  border: 1px solid;
}



/* CSS */
</style>
