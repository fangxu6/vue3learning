<template>
  <div class="person">
    ???
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
  // import {teype PersonInterface} from '@/types/index'
  import  {type PersonInterface } from '../types'

  let person: PersonInterface = {
    id:'asyu1',
    name: '张三',
    age: 18
  }

</script>

// scoped局部样式，默认都加
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
