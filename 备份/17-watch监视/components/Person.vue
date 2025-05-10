<template>
  <div class="person">
    <!-- <h1>情况1:监视【ref】定义的【基本类型】的值</h1>
    <h2>当前求和为 {{ sum }}</h2>
    <button @click="changeSum">sum+1</button>
    <br> -->
    <h1>情况2:监视【ref】定义的【对象】的值</h1>
    <ul>
      <li>姓名: {{person.name }}</li>
      <li>年龄: {{ person.age }}</li>
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
import {ref,watch,reactive, watchEffect} from 'vue'
// 数据
let sum =ref(0)

// 数据
let person = reactive({
  name: '张三',
  age: 18
})

// 方法
function changeSum(){
  sum.value = sum.value + 1
}

function changeName() {
  person.name = person.name+'~'
}
function changeAge() {
  person.age = person.age + 1
}
// 监视watch 只能监控对应的地址
// 监视{deep:true} 监视对象的深层属性
// getters: 监视对象的getter 对应的返回地址
// watch(监视的数据,回调函数)
watch(sum,(newValue,oldValue)=>{ // newValue:变化后的值,oldValue:变化前的值
  console.log('sum变化了',newValue,oldValue)
  if(newValue > 10) {
    stop()
    console.log('sum大于10了，停止监视')
  }
})

// watch(person,(newValue,oldValue)=>{ // newValue:变化后的值,oldValue:变化前的值
//   console.log('person变化了',newValue,oldValue)
// })

//只监视name
watch(() =>person.name,(newValue,oldValue)=>{ // newValue:变化后的值,oldValue:变化前的值
  console.log('name变化了',newValue,oldValue)
})


// 监视数组
watch([() =>person.name,() =>person.age],(newValue,oldValue)=>{ // newValue:变化后的值,oldValue:变化前的值
  console.log('name变化了',newValue,oldValue)
})

//watchEffect
//不需要指明需要监控的信息，会自适应监控
watchEffect(()=>{
  if(person.age > 20) {
    console.log('年龄大于20')
  } else {
    // console.log('年龄小于20')
  }
})

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
