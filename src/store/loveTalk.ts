import { defineStore } from 'pinia'

//暴露出去
export const useTalkStore = defineStore('talk', {
  //真正存储数据的地方
  state() {
    return {
      talkList: [
        { id: '1', content: '你是我的小呀小苹果1' },
        { id: '2', content: '你是我的小呀小苹果2' },
        { id: '3', content: '你是我的小呀小苹果3' },
      ],
    }
  },
})
