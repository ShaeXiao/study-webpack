<template>
  <div style="font-size:24px">
    this is vue1111222!
    <img :src="img" alt />
  </div>
</template>

<script>
import img from "img/img.jpg";
import css from "css/sass.css";
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
// div {
//   color: red;
// }
</style>>