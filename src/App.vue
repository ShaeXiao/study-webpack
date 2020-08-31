<template>
  <div style="font-size:24px">
    this is vue1111222!
    <img :src="img" alt />
  </div>
</template>

<script>
import img from "./img.jpg";
import saccs from "./sass.css";
import Axios from "axios";
console.log(img);
export default {
  data() {
    return {
      img: img,
    };
  },
  created() {
    Axios({
      method: "get",
      url: "/data/login",
    }).then(res => {
      console.log(res)
    })
  },
};
</script>

<style lang="scss">
// div {
//   color: red;
// }
</style>>