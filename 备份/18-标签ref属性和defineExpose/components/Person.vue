<template>
  <div class="person">
    <!-- <h1>中国</h1>
    <h2 id="title2">北京</h2>
    <h3>朝阳区</h3>
    <button @click="showLog">点我输出h2这个元素    </button> -->
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <h3>朝阳区</h3>
    <button @click="showLog">点我输出h2这个元素    </button>
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

import { ref,reactive,defineExpose } from 'vue';
 //数据
 let title2 =ref()

 let a = ref(0)
  let b = ref(1)
  let c = ref(2)

  defineExpose({a:a.value, b, c}) // 组件暴露给父组件的属性

 function showLog() {
  // //会有冲突问题，别的template也有同样的id
  // console.log(document.querySelector('h2'))
  // console.log(document.getElementById('title2'))
  console.log(title2.value)

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
