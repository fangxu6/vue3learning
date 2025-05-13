import { reactive, onMounted } from 'vue'
import axios from 'axios'

export default function () {
  //数据
  let dogList = reactive(['https://picsum.photos/200'])

  //方法
  async function getPicture() {
    try {
      let result = await axios.get('https://dog.ceo/api/breeds/image/random')
      console.log(result.data)
      dogList.push(result.data.message)
    } catch (error) {
      alert(error)
    }
  }

  //钩子
  onMounted(() => {
    getPicture()
  })
  //向外部提供数据和方法
  return { dogList, getPicture }
}
