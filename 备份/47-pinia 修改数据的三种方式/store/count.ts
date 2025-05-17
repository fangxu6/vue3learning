import { defineStore } from 'pinia'

//暴露出去
export const useCountStore = defineStore('count', {
  // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
  actions:{
    increment(value){
      console.log('increment被调用了')
      //修改数据(this是当前的store对象)
      this.sum+=value;
    }
  },

  //真正存储数据的地方
  state() {
    return {
      sum: 6,
    }
  },
})
