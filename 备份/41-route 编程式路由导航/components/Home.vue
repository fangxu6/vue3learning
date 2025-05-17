<template>
  <div class="home">
    <h1>Home</h1>
    <p>Welcome to the home page!</p>
  </div>
</template>

<script lang="ts" setup name="Home">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  console.log('Home');
  setTimeout(() => {
    // 此处编写一段代码，让路由实现跳转
    // 这个也是开发中常用的路由跳转
    router.push('/news')
  }, 1000);
});

</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
