<template>
  <!-- html content 把对应元素拼合到一起-->
  <div class="app">
    <!-- <h2 id="title2">你好</h2>
    <Person /> -->
    <h2 ref="title2">你好</h2>

    <button @click="showLog">测试</button>
    <Person ref="personRef" />


  </div>
  <!-- html content -->
</template>

//改为Vue3
<script lnang="ts" setup name ="App" >
import Person from './components/Person.vue'
import { ref ,onMounted} from 'vue'

let title2 = ref()
let personRef = ref()

onMounted(() => {
  console.log(personRef.value.a);
  console.log(personRef.value.b);
  console.log(personRef.value.c);
})

const showLog = () => {
  // console.log(title2.value);
  console.log(personRef.value);
}


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
