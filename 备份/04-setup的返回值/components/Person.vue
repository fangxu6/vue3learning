<template>
  <div class="person">

    <p>姓名: {{ a }}</p>
    <p>年龄: {{ age }}</p>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">增加年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Person',
  beforeCreate() {
    console.log('beforeCreate')//在setup之后创建
  },
  setup() {
    console.log('setup')
    //console.log(this)
    // 使用 Composition API
    // 数据
    let name = '张三'  //不是响应式
    let age = 18
    let tel = "12345678901"

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

    // 将数据、方法返回，模板中才能使用
    // return { a: name, age, changeName, changeAge, showTel }
    // return function () {
    //   return '哈哈'
    // }

    // return () => {
    //   return '哈哈'
    // }

    // setup的返回值也可以是一个渲染函数
    return () => '哈哈'

  },
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
</style>
