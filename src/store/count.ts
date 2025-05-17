import { defineStore } from 'pinia'

//暴露出去
export const useCountStore = defineStore('count', {
  //真正存储数据的地方
  state() {
    return {
      sum: 6,
    }
  },
})
