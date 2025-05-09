<template>
  <div class="person1">
    <h2>汽车信息一辆{{ car.brand }}车，价值{{ car.price }}万 </h2>
    <button @click="changePrice">修改价格</button>
    <br>
    <h2>游戏列表</h2>
    <ul>
      <li v-for="game in games" v-bind:key="game.id">
        {{ game.name }}
      </li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
  </div>
</template>

<!-- <script lang="ts">
// 组件名称 注释掉的话文件名会作为组件名称
export default {
  name: 'Person1'
}
</script> -->

<script lang="ts" setup>
/**
 * 组件名: Person123
 */
import { reactive } from 'vue';

let car = reactive({
  brand: '奔驰',
  color: 'red',
  price: 100
})

let games = reactive([
  {
    id: '1', name: '游戏1'
  },
  { id: '2', name: '游戏2' },
  { id: '3', name: '游戏3' },
  { id: 4, name: '游戏4' }
])

console.log(car)
console.log(Proxy)

//方法
function changePrice() {
  car.price = car.price + 10
}

function changeFirstGame() {
  games[0].name = '修改后的游戏1'
  console.log(games)
}

</script>

<style scoped>
.person1 {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 5px;
  padding: 10px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

li {
  font-size: 20px;
}
</style>
