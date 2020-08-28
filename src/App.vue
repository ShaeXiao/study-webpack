<template>
  <div>
      this is vue!
      <img :src="img" alt="">
  </div>
</template>

<script>
import img from './img.jpg'
console.log(img)
export default {
  data(){
    return{
      img:img
    }
  }
}
</script>

<style lang="scss">
  div {
    color: red;
  }
</style>>