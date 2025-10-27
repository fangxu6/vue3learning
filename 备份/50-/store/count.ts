import { defineStore } from 'pinia'

//暴露出去
export const useCountStore = defineStore('count', {
  // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
  actions:{
    //指定value的类型
    increment(value:number){
      console.log('increment被调用了')
      //修改数据(this是当前的store对象)
      this.sum+=value;
    }
  },

  //真正存储数据的地方
  state() {
    return {
      sum: 6,
      school:'jsen',
      address:'jiangyin'
    }
  },
  getters: {
    //计算属性
    // doubleSum2(state) {
    //   return this.sum * 2
    // },
    //上面的可以改为剪头函数
    doubleSum:state => state.sum * 2,
    upperSchool(state) {
      // return state.school.toUpperCase()
      return this.school.toUpperCase()

    }

  }
})
