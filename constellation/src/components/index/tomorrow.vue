<template>
  <div class="content-parent">
    <ul class="clearfix">
      <li>综合指数:
        <star :score=all  :size="'xs'" class="star-component"></star>
      </li>
      <li>健康指数:
        <star :score=health  :size="'xs'" class="star-component2"></star></li>
      <li>爱情指数:
        <star :score=love  :size="'xs'" class="star-component3"></star></li>
      <li>财运指数:
        <star :score=money  :size="'xs'" class="star-component4"></star></li>
      <li>工作指数:
        <star :score=all  :size="'xs'" class="star-component5"></star></li>
      <li>速配星座:<span class="color">{{QFriend}}</span></li>
      <li>幸运颜色:<span class="color2">{{color}}</span></li>
      <li>幸运数字:<span class="color">{{number}}</span></li>
    </ul>
    <div class="content-color">
      <div class="today-content">
        <div class="today-summary">
          <p class="today-title">今日概述</p>
          <p v-text="summary" class="today-desc"></p>
        </div>
      </div>
      <div class="synthesize-content">
        <div class="synthesize-summary">
          <p class="synthesize-title">综合运势</p>
          <p class="synthesize-desc">
            开始新年新的工作,不要继续沉浸在节日的欢乐当中,赶紧回归吧!一天都不算太忙,现在只是工作的准备阶段.爱情是需要争取的,空想而不劳动也是徒劳的.有获得赚钱的好机会,若能抓住必有收获
          </p>
        </div>
      </div>

    </div>

    <div class="temp">
      <star-footer class="today-footer"></star-footer>
    </div>

  </div>
</template>

<script>
  import star from './star'
  import starFooter from './starFooter'

  export default {
    name: "tomorrow",
    created() {
    },
    computed: {
      all() {
        return parseInt(this.$store.state.tomorrow.all)*0.05
      },
      health() {
        return parseInt(this.$store.state.tomorrow.health)*0.05
      },
      love() {
        return parseInt(this.$store.state.tomorrow.love)*0.05
      },
      money() {
        return parseInt(this.$store.state.tomorrow.money)*0.05
      },
      number() {
        return this.$store.state.tomorrow.number
      },
      color() {
        return this.$store.state.tomorrow.color
      },
      QFriend() {
        return this.$store.state.tomorrow.QFriend
      }
      ,
      summary() {
        return this.$store.state.tomorrow.summary
      }
    },
    components: {
      star,
      starFooter
    }

  }
</script>

<style scoped lang="less">
  .content-parent {
    margin-top: .2rem;
    ul {
      border-bottom: .01rem solid #eee;
      padding-bottom: .2rem;
    }
    li {
      float: left;
      list-style-type: none;
      width: 3rem;
      font-size: .24rem;
      color: #6d6d6d;
      margin-left: .62rem;
      line-height: .6rem;
      position: relative;
      .star-component,
      .star-component2,
      .star-component3,
      .star-component4,
      .star-component5 {
        position: absolute;
        top: .15rem;
        left: .3rem;
      }
      .color2 {
        color: #b68f76;
        margin-left: .1rem;
      }
      .color {
        color: #ccc;
        margin-left: .1rem;
      }
    }
    .today-content {
      .today-summary {
        width: 85%;
        margin: .3rem auto 0;
        padding: .1rem;
        border-radius: .2rem;
        box-shadow: 0 0 .5rem rgba(165,55,222,.3);
        background-color: #ffffff;
        position: relative;
      }
      .today-summary:before {
        content: '';
        width: .5rem;
        height: .5rem;
        display: block;
        background: url("../../assets/images/icon_todayfortune.png")no-repeat center;
        background-size: cover;
        border-radius: 50%;
      }
      .today-title {
        font-size: .28rem;
        color: #4e4e4e;
        position: absolute;
        top: .23rem;
        left: .9rem;
      }
      .today-desc {
        font-size: .28rem;
        color: #a7a7a6;
        padding: .3rem .1rem .1rem;
        line-height: .38rem;
        letter-spacing: .05rem;
      }
    }
    .synthesize-content {
      .synthesize-summary {
        width: 85%;
        margin: .4rem auto;
        padding: .1rem;
        border-radius: .2rem;
        box-shadow: 0 0 .5rem rgba(165,55,222,.3);
        background-color: #ffffff;
        position: relative;
      }
      .synthesize-summary:before {
        content: '';
        width: .5rem;
        height: .5rem;
        display: block;
        background: url("../../assets/images/icon_all.png")no-repeat center;
        background-size: cover;
        border-radius: 50%;
      }
      .synthesize-title {
        font-size: .28rem;
        color: #4e4e4e;
        position: absolute;
        top: .23rem;
        left: .9rem;
      }
      .synthesize-desc {
        font-size: .28rem;
        line-height: .38rem;
        color: #a7a7a6;
        padding: .3rem .1rem .1rem;
        letter-spacing: .05rem;
      }
    }
    .temp {
      height: 3rem;
    }
    .today-footer {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
}
</style>

