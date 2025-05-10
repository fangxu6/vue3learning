<template>
  <div class="person">
    <!-- 姓:<input type="text" v-bind:value="firstName"> <br>  单向绑定 -->
    姓:<input type="text" v-model="firstName"> <br> <!-- 双向绑定 -->
    名:<input type="text" v-model="lastName"> <br>
    全名: <span>{{fullName}}</span> <br>
    <button @click="changeFullName"> 修改全名 </button>

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

 import {ref,computed} from 'vue'

 let firstName = ref('zhang')
  let lastName = ref('san')

  // // 这么定义的fullName是个计算属性，不能修改
  // let fullName = computed(() => {
  //   console.log('计算属性被调用了') // 有缓存，没有改动，只调用一次
  //   return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1)
  //   + ' '
  //   + lastName.value
  // }
  // )

   // 这么定义的fullName是个计算属性， 可读可写
   let fullName = computed({
    get(){
      return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1)
      + ' '
      + lastName.value
    },
    set(val){
      const [str1,str2]=val.split(' ')
      firstName.value= str1,
      lastName.value =str2,
      console.log('set',val)
    }
  })

   function changeFullName() {
    fullName.value='li si'
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
