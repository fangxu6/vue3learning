<template>
  <div class="person">
<h2>个人信息</h2>
    <ul>
      <li>姓名: {{ name}},{{person.name }}</li>
      <li>年龄: {{ age }}</li>
    </ul>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
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
 import { reactive,toRefs } from "vue"

// 数据
let person = reactive({
  name: '张三',
  age: 18
})

let {
  name,
  age
} = toRefs(person) //引用赋值


//方法
function changeName() {
  person.name = person.name+'~'
}
function changeAge() {
  person.age = person.age + 1
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
