<template>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- Optional controls -->

      <!-- slides -->

      <swiper-slide>
        <today></today>
      </swiper-slide>
      <swiper-slide>
        <tomorrow></tomorrow>
      </swiper-slide>
      <swiper-slide>
        <week></week>
      </swiper-slide>
      <swiper-slide>
        <next-week></next-week>
      </swiper-slide>
      <swiper-slide>
        <month></month>
      </swiper-slide>
       <swiper-slide>
        <year></year>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import today from './today'
  import tomorrow from './tomorrow'
  import week from './week'
  import nextWeek from './nextWeek'
  import month from './month'
  import year from './year'
  export default {
    name: 'swiperImgs',
    data() {
      return {
        swiperOption: {
          autoHeight: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className, text) {
              switch (index) {
                case 0:
                  text = '今日';
                  break;
                case 1:
                  text = '明日';
                  break;
                case 2:
                  text = '本周';
                  break;
                case 3:
                  text = '下周';
                  break;
                case 4:
                  text = '本月';
                  break;
                case 5:
                  text = '本年';
                  break;
              }
              return '<span class="' + className + '">' + text + '</span>';
            },
          }
        },
      }
    },
    components: {
      swiper,
      swiperSlide,
      today,
      tomorrow,
      week,
      nextWeek,
      month,
      year
    },
  }
</script>

<style lang="less">
  .swiper-container {
     position: relative;
     padding-top: 0.8rem !important;
   }
  .swiper-pagination-bullet-active {
    border-bottom: .05rem solid red;
    border-radius: 0;
  }
  .swiper-pagination-bullet{
    color: blueviolet;
    font-size:0.4rem;
    width: 1rem !important;
    background: transparent !important;
    height: 0.5rem !important;
    line-height: 0.5rem;
    position: relative;
    top: -0.4rem;
  }
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
  }


</style>
