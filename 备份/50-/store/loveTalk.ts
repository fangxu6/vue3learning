import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'

//暴露出去
export const useTalkStore = defineStore('talk', {
actions:{
  async getATalk(){
  //发请求
  let { data: { content } } = await axios.get('http://api.uomg.com/api/rand.qinghua?format=json');
  //返回一个对象
  console.log('获取到的内容', content)
  let obj = { id: nanoid(), content }
  //将获取到的内容添加到数组中
  this.talkList.unshift(obj);
  }

},

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
