<template>
  <div class="today-parent" >
    <div class="today-top">
      <p class="today-title">星座伴侣</p>
      <img src="../assets/images/icon_back.png" class="back-image" @click="skip">
      <img :src="myImgUrl" class="host-image">
      <div class="today-const">
        <p class="today-name">{{myName}}{{myEng}}</p>
        <p class="today-date">{{myDate}}</p>
      </div>
    </div>
    <swiper-imgs v-if="show"></swiper-imgs>
    <div class="temp" v-else>
      <img src="../assets/images/timg.gif" alt="">
    </div>
  </div>
</template>

<script>
    import store from '../store'
    import swiperImgs from './index/swiperImgs'
    export default {
        name: "index",
        data() {
          return {
            myName: '',
            myEng: '',
            myDate: '',
            myImgUrl: ''
          }
        },
        components: {
          swiperImgs
        },
        created(){

          let date = new Date();
          let arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
          let num = date.getDate() < arr[date.getMonth()] ? date.getMonth() - 3 : date.getMonth() - 2;
          // let obj = JSON.parse(window.localStorage.getItem('item'));

          this.$store.dispatch('getData', this.$route.params.name?this.$route.params.name:'白羊座')
          let params = this.$route.params
          // console.log(this.$store.state.constell);
          if (params.name) {
            this.myName = params.name;
          } else {
            // this.myName = '白羊座'
            this.myName = this.$store.state.constell[num].name;
          }
          if (params.eng) {
            this.myEng = params.eng;
          } else {
            // this.myEng = 'Aries'
            this.myEng = this.$store.state.constell[num].english;
          }
          if (params.date) {
            this.myDate = params.date;

          } else {
            // this.myDate = '(3.21-4.19)'
            this.myDate = this.$store.state.constell[num].date;
          }
          if (params.imgUrl) {
            this.myImgUrl = require('../assets' + params.imgUrl);
          } else {
            // this.myImgUrl = require('../assets/images/sl_aries.png')
            this.myImgUrl = require('../assets' + this.$store.state.constell[num].imgUrl);
          }

        },
        computed: {
          show(){
            return this.$store.state.today
          }
        },
        methods: {
          skip() {
            this.$router.push({path: '/select', name: 'select'})
          }
        }
    }
</script>

<style scoped lang="less">
  .today-parent {
    width: 7.5rem;
    min-height: 100vh;
    background: url("../assets/images/top.png") no-repeat top;
    background-size: cover;
    position: relative;
    .today-title {
      font-size: .3rem;
      letter-spacing: .1rem;
      color: #ffffff;
      position: absolute;
      top: 1rem;
      left: 50%;
      transform: translateX(-50%);
    }
    .back-image {
      background-size: cover;
      vertical-align: top;
      width: .4rem;
      height: .4rem;
      position: absolute;
      top: 1rem;
      left: .5rem;
    }
    .host-image {
      width: .8rem;
      height: .8rem;
      background-size: cover;
      vertical-align: top;
      position: absolute;
      top: 2rem;
      left: 50%;
      transform: translateX(-50%);
    }
    .today-const {
      width: 2.3rem;
      height: .65rem;
      font-size: .26rem;
      text-align: center;
      color: #333;
      line-height: .35rem;
      font-weight: 200;
      letter-spacing: .05rem;
      position: absolute;
      top: 3rem;
      left: 50%;
      transform: translateX(-50%);
    }
    .today-top {
      height: 4.5rem;
    }
  }
</style>
