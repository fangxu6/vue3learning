<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newslist" :key="news.id">
        <!-- 第一种写法 -->
        <!-- <RouterLink to="/news/detail">{{ news.title }}
        </RouterLink> -->

        <button @click="showNewsDetail(news)">查看新闻</button>
        <!-- 第二种写法 -->
        <RouterLink :to="{
          path: '/news/detail',
          query: {
            id: news.id,
            title: news.title,
            content: news.content
          }
        }">
          {{ news.title }}
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
import { RouterView, useRouter } from 'vue-router';

const newslist = reactive([
  { id: 1, title: '新闻1001', content: '新闻001的内容' },
  { id: 2, title: '新闻002', content: '新闻002的内容' },
  { id: 3, title: '新闻003', content: '新闻003的内容' },
  { id: 4, title: '新闻004', content: '新闻004的内容' }
])

const router = useRouter();

// function showNewsDetail() {
//   console.log('查看新闻');
// 此处编写一段代码，让路由实现跳转
// 这个也是开发中常用的路由跳转
// 可以字符串可以对象，可以用RouterLink
// router.push('/news/detail')

// 对象写法，需要传对象
// news需要指明类型
interface NewsInterface {
  id: number;
  title: string;
  content: string;
}

function showNewsDetail(news: NewsInterface) {
  console.log('查看新闻');
  router.push({
    path: '/news/detail',
    query: {
      id: news.id,
      title: news.title,
      content: news.content
    }
  })
}

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
