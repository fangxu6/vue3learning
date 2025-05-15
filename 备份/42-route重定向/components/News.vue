<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newslist" :key="news.id">
        <!-- 第一种写法 -->
        <!-- <RouterLink to="/news/detail">{{ news.title }}
        </RouterLink> -->

        <!-- 第二种写法 -->
        <RouterLink :to="{
          path: '/news/detail',
          query: {
            id: news.id,
            title: news.title,
            content: news.content
          }
        }
          ">{{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="News">

import type { idText } from 'typescript';
import { reactive } from 'vue'
import { RouterView } from 'vue-router';

const newslist = reactive([
  { id: 1, title: '新闻1001', content: '新闻001的内容' },
  { id: 2, title: '新闻002', content: '新闻002的内容' },
  { id: 3, title: '新闻003', content: '新闻003的内容' },
  { id: 4, title: '新闻004', content: '新闻004的内容' }
])

</script>

<style scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
  ;
}

.new li {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
  ;
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>
