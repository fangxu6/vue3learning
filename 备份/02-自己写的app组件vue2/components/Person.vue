<template>
  <div class="person">
    <h1>你好啊!</h1>
    <p>姓名: {{ name }}</p>
    <p>年龄: {{ age }}</p>
    <button @click="changeName">修改姓名</button>
    <button @click="age++">增加年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Person',
  data() {
    return {
      name: '张三',
      age: 25,
      tel: "12345678901"
    }
  },
  methods: {
    changeName() {
      this.name = '李四'
    },
    showTel() {
      alert(this.tel);
    }
  }
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
