<template>

  <div class="scrollerWrap">
    <scroller height="100%" :on-refresh="refresh" ref="myscroller">
      <div class="today-parent">
        <div class="today-top">
          <p class="today-title">星座伴侣</p>
          <img src="../assets/images/icon_back.png" class="back-image" @click="skip">
          <img :src="myImgUrl" class="host-image">
          <div class="today-const">
            <p class="today-name">{{myName}}{{myEng}}</p>
            <p class="today-date">{{myDate}}</p>
          </div>
        </div>

        <transition name="s">
          <swiper-imgs v-if="show"></swiper-imgs>
        </transition>


        <div class="temp" v-if="!show">
          <div v-if="hide">
            <div class="temp-msg">啊哦,您的网络好像有问题---</div>
            <img src="../assets/images/timg.gif" alt="">
          </div>
          <div v-else>
            <div class="temp-hide">加载中---</div>
            <img src="../assets/images/timg.gif" alt="">
          </div>
        </div>
      </div>
    </scroller>

  </div>
</template>

<script>
  import store from '../store'
  import swiperImgs from './index/swiperImgs'

  export default {
    name: "index",
    data () {
      return {
        myName: '',
        myEng: '',
        myDate: '',
        myImgUrl: '',
        hide: false
      }
    },
    components: {
      swiperImgs
    },
    created () {
      setTimeout(() => {
        this.hide = true
      }, 3000)

      this.$store.dispatch('getData', this.$route.params.name ? this.$route.params.name : '白羊座')
      let params = this.$route.params

      this.myName = params.name ? params.name : '白羊座'

      this.myEng = params.eng ? params.eng : 'Aries'

      this.myDate = params.date ? params.date : '(3.21-4.19)'

      this.myImgUrl = params.imgUrl ? require('../assets' + params.imgUrl) : require('../assets/images/sl_aries.png')
    },
    computed: {
      show () {
        return this.$store.state.today
      }
    },
    methods: {
      skip () {
        this.$router.push({path: '/select', name: 'select'})
      },
      refresh () {
        this.$store.dispatch('getData', this.$route.params.name ? this.$route.params.name : '白羊座')

        let timeId = setInterval(function () {
          if (this.$store.state.count > 1) {
            console.log(this.$store.state.count);
            this.$refs.myscroller.finishPullToRefresh();//刷新完毕关闭刷新的转圈圈
            clearInterval(timeId)
          }
        }.bind(this), 1000)
      }
    }
  }
</script>

<style scoped lang="less">

  .scrollerWrap {
    position: absolute;
    width: 100%;
    /*height: 100%;*/
    min-height: 100vh;
    top: 0;
    bottom: 20px;
  }

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
    .s-enter,
    .s-leave-to {
      transform: scale(0);
    }
    .s-enter-active,
    .s-leave-active {
      transition: transform 1s;
    }
    .temp-msg,
    .temp-hide {
      font-size: .4rem;
      text-align: center;
    }
  }
</style>
