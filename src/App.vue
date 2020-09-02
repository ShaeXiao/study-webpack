<template>
  <div class="container">
    <img :src="img" alt />
    <!-- <div class="la">yes!!</div> -->
    <!-- <img src="~img/img.jpg" alt=""> -->
    <a-date-picker />
    <a-button type="primary">
      Primary
    </a-button>
    <!-- <a-input placeholder="Basic usage" /> -->
    <!-- <DatePicker></DatePicker> -->
  </div>
</template>

<script>
import img from "img/img.jpg";
import { Button,DatePicker,Input } from 'ant-design-vue';

// console.log(img)
// import css from "css/sass.scss";
import Axios from "axios";
export default {
  components:{
    ADatePicker:DatePicker,
    AButton:Button,
    AInput:Input
  },
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