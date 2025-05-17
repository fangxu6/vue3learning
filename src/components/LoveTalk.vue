<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <!-- <li>xxx</li> -->
      <li v-for="talk in talklist" :key="talk.id">
        {{ talk.content }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { reactive } from 'vue';
import axios from "axios";
import { nanoid } from 'nanoid'

//数据
let talklist = reactive([
  { id: '1', content: '你是我的小呀小苹果1' },
  { id: '2', content: '你是我的小呀小苹果2' },
  { id: '3', content: '你是我的小呀小苹果3' },
]);

//方法
async function getLoveTalk() {
  //发请求
  // let result = await axios.get('http://api.uomg.com/api/rand.qinghua?format=json');
  // console.log(result);
  // //解构
  // let { data } = await axios.get('http://api.uomg.com/api/rand.qinghua?format=json');
  // let obt = { id: nanoid(), content: data.content }

  //进一步解构 :还可以重命名比如content: title，重命名为title
  //解构和重命名主要是为了和定义的变量一致
  let { data: { content } } = await axios.get('http://api.uomg.com/api/rand.qinghua?format=json');
  // let obt = { id: nanoid(), content: content }
  //因为content一样，所以可以去除后面的:
  let obj = { id: nanoid(), content }

  console.log(obj);
  //将获取到的内容添加到数组中
  talklist.unshift(obj);
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
