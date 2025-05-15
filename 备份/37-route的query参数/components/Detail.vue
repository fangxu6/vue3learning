<template>
  <ul class="news-list">
    <!-- <li>编号：{{ route.query.id }}</li>
    <li>标题：{{ route.query.title }}</li>
    <li>内容：{{ route.query.content }}</li> -->

    <li>编号：{{route.query.id}}</li>
    <li>标题：{{route.query.title}}</li>
    <li>内容：{{route.query.content}}</li>
  </ul>
</template>

<script lang="ts" setup name="Detail">
  // defineProps(['id', 'title', 'content'])
  import { useRoute } from 'vue-router'
  let route = useRoute()



</script>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
  ;
}

.news-list li {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
</style>
