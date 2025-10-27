<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <!-- <li>xxx</li> -->
      <li v-for="talk in talkStore.talkList" :key="talk.id">
        {{ talk.content }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { reactive } from 'vue';
import axios from "axios";
import { nanoid } from 'nanoid'
import { storeToRefs } from 'pinia';

import { useTalkStore } from '@/store/loveTalk'

const talkStore = useTalkStore(); //引入store
// const {talkList} = storeToRefs(talkStore); //解构store中的数据

talkStore.$subscribe(
  (mutate,state) =>{
    console.log('talkStore数据发生变化了',mutate,state);
    localStorage.setItem('talkList',JSON.stringify(state.talkList));
    console.log('talkList',localStorage.getItem('talkList'));
    // console.log('talkList',state.talkList);
  }
)

function getLoveTalk() {
  talkStore.getATalk(); //调用store中的方法
  // console.log(talkStore.talkList); //打印store中的数据
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
