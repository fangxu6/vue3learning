<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>>
    <!-- n表示用户选择的数据，也需要用ref定义 -->
    <!-- <select v-model.number 表示选择的值是数值类型="n"> -->
    <!-- 不加表示默认字符串类型 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from 'vue';

//数据
let sum = ref(0); //当前求和
let n = ref(1); //用户选择数据

//方法
function add() {
  sum.value += n.value;
}

function minus() {
  sum.value -= n.value;
}

</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

select,
button {
  /* 上下和左右 */
  margin: 0 5px;
  height: 30px;
}
</style>
