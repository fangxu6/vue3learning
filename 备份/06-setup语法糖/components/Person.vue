<template>
  <div class="person1">
    <p>姓名: {{ name }}</p>
    <p>年龄: {{ age }}</p>
    <p>地址：{{ address }}</p>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">增加年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<!-- <script lang="ts">
// 组件名称 注释掉的话文件名会作为组件名称
export default {
  name: 'Person1'
}
</script> -->

<script lang="ts" setup>

console.log('setup')
//console.log(this)
// 使用 Composition API
// 数据
let name = ref('张三')  //不是响应式
let age = ref(18)
let address = '北京市海淀区'
let tel = "12345678901"


// 监听数据变化

// 定义方法
function changeName() {
  console.log('changeName')
  name = 'zhang-san'
  console.log(name)
}

function changeAge() {
  console.log('changeAge')
  age += 1
  console.log(age)
}

function showTel() {
  console.log('showTel')
  alert(tel)
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
</style>
