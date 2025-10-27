<template>
  <Person a="哈哈" v-bind:list="5" />
  <Person a="哈哈" :list="personList" />
  <Person a="哈哈" />


</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { reactive } from 'vue';
import { type Persons } from '@/types'

let personList = reactive<Persons>([
  {
    id: 'asyu1',
    name: '张三',
    age: 18
  },
  {
    id: 'asyu2',
    name: '李四',
    age: 28
  }
])

console.log(personList);

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
