<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }} </h2>
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
import { useCountStore } from '@/store/count'

const countStore = useCountStore(); //引入store
console.log('@@@', countStore); //打印store中的数据

//以下两种都可以拿到state中的数据，第一种更加合适
// console.log('@@@', countStore.sum); //打印store中的数据
// console.log('@@@', countStore.$state.sum); //打印store中的数据

//数据

let n = ref(1); //用户选择数据

//方法
function add() {
  //第一种修改方式
  // countStore.sum +=1

  //第二种修改方式 对象形式修改
  // countStore.$patch({
  //   sum:888
  // })

  //第三种修改方式 方法在count.ts中定义
  // actions或者说pinia的意义，把一些共用的部分放在state中，
  // 相应的控制逻辑放在actions中
  // 这样就可以在不同的组件中使用
  // 提升代码复用度
  countStore.increment(n.value); //调用store中的方法
}
function minus() {
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
