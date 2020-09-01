<template>
  <div class="container">
    <img :src="img" alt />
    <div class="la">yes!!</div>
    <img src="./static/images/img.jpg" alt="">
  </div>
</template>

<script>
import img from "img/img.jpg";
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
    height: 200px;
    background: url('img/img.jpg');
  }
  background: green;
}
</style>