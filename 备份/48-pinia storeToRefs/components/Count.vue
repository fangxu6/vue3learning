<template>
  <div class="count">
    <h2>当前求和为：{{ sum }} </h2>
    <h3>欢迎来到:{{ school }}, 坐落于{{ address }}</h3>
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
import { ref, toRefs } from 'vue';
//引入useCountStore
import { useCountStore } from '@/store/count'
//使用useCountStore，得到一个专门保存count相关的store
const countStore = useCountStore(); //引入store
// const {sum,school,address} = countStore; //解构store中的数据

import { storeToRefs } from 'pinia'; //引入storeToRefs
//和toRefs不同，storeToRefs将store中的数据转为ref
//而toRefs只是将store中的所有数据和方法转为ref
const {sum,school,address} = storeToRefs(countStore); //解构store中的数据



//数据

let n = ref(1); //用户选择数据

//方法
function add() {
  countStore.increment(n.value); //调用store中的方法
}
function minus() {
  countStore.sum -= n.value; //直接修改数据
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
