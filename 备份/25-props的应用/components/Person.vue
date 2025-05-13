<template>
  <div class="person">
    <!-- <h2> {{ a }}</h2>> -->
    <!-- <h2> {{ list }}</h2> -->
    <ul>
      <li v-for="person in list" :key="person.id">
        {{ person.name }}--{{ person.age }}
      </li>
    </ul>
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
import { defineProps, withDefaults } from 'vue';
import { type Persons } from '@/types';



// // 接收a,同时将props保存起来
// let x = defineProps(['a', 'list']);
// console.log(x);
// console.log(x.a);


//只接收list
// defineProps(['a', 'list']);
// // 接收list 并限制
// defineProps<{ list: Persons }>();

// 接收list + 限制  + 限制必要性(空值) + 指定默认值
withDefaults(defineProps<{ list?: Persons }>(), {
  list: () => [{
    id: 'asyu11',
    name: '张三1',
    age: 181
  }]
})


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
