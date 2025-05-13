<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}，放大十倍后:{{ bigSum }}</h2>
    <button @click="add">点我+1</button>
    <hr>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index">
    <button @click="getPicture">再来一站</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import useSum1 from "@/hooks/useSum";
import useDog from "@/hooks/useDog";

const { sum, add, bigSum } = useSum1();
const { dogList, getPicture } = useDog();

</script>


// scoped局部样式，默认都加
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

img {
  height: 100px;
  margin-right: 10px;
}
</style>
