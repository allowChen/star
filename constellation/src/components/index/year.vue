<template>
  <div class="content-parent">
    <div class="week-content">
      <div class="week-pass">
        <h5>年度密码</h5>
        <p class="pass-info">
          {{passInfo}}
        </p>
        <h4 class="pass-text-title">年度说明</h4>
        <p v-text="passText?passText:'暂无数据'"></p>
      </div>
      <div class="week-career">
        <h5>事业运</h5>
        <p v-text="career?career:'暂无数据'"></p>
      </div>
      <div class="week-love">
        <h5>爱情运</h5>
        <p v-text="love?love:'暂无数据'"></p>
      </div>
      <div class="week-money">
        <h5>财运</h5>
        <p v-text="money?money:'暂无数据'"></p>
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
    name: "year",
    created() {
      // console.log(this.$store.state.resp);
    },
    computed: {
      passInfo() {
        let obj = this.$store.state.year.mima.info
        if (obj) {
          return obj;
        } else {
          return null
        }
      },
      passText() {
        let arr = this.$store.state.year.mima.text
        let val
        if (arr) {
          arr.forEach((el) => {
            val = el
          })
          return val
        } else {
          return null
        }
      },
      love() {
        let love = this.$store.state.year.love
        let val
        if (love) {
          love.forEach((el) => {
            val = el
          });
          return val
        } else {
          return null
        }
      },
      money() {
        let val
        let money = this.$store.state.year.finance
        if (money) {
          money.forEach((el) => {
            val = el
          });
          return val;
        } else {
          return null
        }
      },
      career() {
        let career = this.$store.state.year.career
        let val
        if (career) {
          career.forEach((el) => {
            val = el
          });
          return val;
        } else {
          return null
        }
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
    .week-content {
      width: 6.8rem;
      margin: .2rem auto .2rem;
      .week-pass,
      .week-career,
      .week-love,
      .week-money {
        padding-top: .2rem;
        border-radius: .2rem;
        margin-bottom: .4rem;
        position: relative;
        box-shadow: 0 0 .5rem rgba(165, 55, 222, .3);
        h5 {
          position: absolute;
          top: .3rem;
          left: .7rem;
          font-size: .3rem;
          color: #5c5c5c;
        }
        p {
          padding: .25rem .3rem .3rem .7rem;
          font-size: .28rem;
          letter-spacing: .03rem;
          line-height: .4rem;
          color: #747674;
        }
      }
      .week-pass {
        .pass-text-title {
          margin-top: .06rem;
          margin-left: .7rem;
          font-size: .3rem;
          color: #5c5c5c;
        }
        .pass-info {
          font-size: .28rem;
          padding: .12rem .3rem .3rem .7rem;
          color: #747674;
        }
      }
      .week-pass:before,
      .week-career:before,
      .week-love:before,
      .week-money:before {
        content: '';
        width: .55rem;
        height: .55rem;
        display: block;
        background-size: cover;
        border-radius: 50%;
      }
      .week-pass:before {
        background: url("../../assets/images/icon_pass.png") no-repeat center;
      }
      .week-career:before {
        background: url("../../assets/images/icon_work.png") no-repeat center;
      }
      .week-love:before {
        background: url("../../assets/images/icon_love.png") no-repeat center;
      }
      .week-money:before {
        background: url("../../assets/images/icon_money.png") no-repeat center;
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

