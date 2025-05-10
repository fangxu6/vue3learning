<template>
  <div class="app">
    <Person />

  </div>
  <!-- html content -->
</template>

<script lnang="ts">
import Person from './components/Person.vue';
// JS或TS
export default {
  name: 'App', // 组件名称
  components: {
    Person // 注册组件
  },
}
</script>

<style>
.app {
  background-color: #f0f0f0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
}

/* CSS */
</style>
