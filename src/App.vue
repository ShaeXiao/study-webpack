<template>
  <div class="container">
    <img :src="img" alt />
    <div class="la">yes!!</div>
    <img src="~img/img.jpg" alt="">
  </div>
</template>

<script>
import img from "img/img.jpg";
console.log(img)
// import css from "css/sass.scss";
import Axios from "axios";
export default {
  data() {
    return {
      img: img,
    };
  },
  created() {
    Axios({
      method: "get",
      url: "/api/data/user",
    }).then(res => {
      console.log(res,1111)
    })
    // Axios({
    //   method: "get",
    //   url: "/apu/login",
    // }).then(res => {
    //   console.log(res,2222)
    // })
  },
};
</script>

<style lang="scss">
.container{
  .la{
    height: 250px;
    background: url('~img/img.jpg');
  }
  // background: green;
}
</style>