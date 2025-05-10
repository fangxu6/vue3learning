<template>
  <div class="person">
    <h2>汽车信息一辆{{ car.brand }}车，价值{{ car.price }}万 </h2>
    <button @click="changeBrand">修改品牌</button>
    <button @click="changePrice">修改价格</button>
    <button @click="changeCar">修改汽车</button>
    <br>

  </div>
</template>

<!-- <script lang="ts">
// 组件名称 注释掉的话文件名会作为组件名称
export default {
  name: 'Person1'
}
</script> -->

<script lang="ts" setup name="Person">
/**
 * 组件名: Person
 */
import { ref,reactive } from 'vue';

let car = reactive({
  brand: '奔驰',
  color: 'red',
  price: 100
})

//方法
function changePrice() {
  car.price = car.price + 10
}

function changeBrand() {
  car.brand = '宝马'
}

const changeCar=() => {
  // 因为这是一个新的对象，不是
  // car = {
  //   brand: 'BYD',
  //   color: 'blue',
  //   price: 200
  // }
  // 下面这个写法可以更改属性
  Object.assign(car, {
    brand: 'BYD',
    color: 'blue',
    price: 200
  })
}


</script>

<style scoped>
.person {
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
