import { ref, onMounted, computed } from 'vue'

export default function () {
  //数据
  let sum = ref(0)
  let bigSum = computed(() => {
    return sum.value * 10
  })

  //方法
  function add() {
    sum.value++
  }

  //狗子
  onMounted(() => {
    add()
    sum.value += 10
  })

  //向外部提供数据和方法
  return { sum, add, bigSum }
}
