<template>
  <div class="content-parent">
    <div class="week-content">
      <div class="week-health">
        <h5>健康</h5>
        <p v-text="health?health:'暂无数据'"></p>
      </div>
      <div class="week-job">
        <h5>求职</h5>
        <p v-text="job?job:'暂无数据'"></p>
      </div>
      <div class="week-love">
        <h5>恋情</h5>
        <p v-text="love?love:'暂无数据'"></p>
      </div>
      <div class="week-money">
        <h5>财运</h5>
        <p v-text="money?money:'暂无数据'"></p>
      </div>
      <div class="week-work">
        <h5>工作</h5>
        <p v-text="work?work:'暂无数据'"></p>
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
    name: "week",
    created() {
      // console.log(this);
      // console.log(this.$store.state.resp);
    },
    computed: {
      health() {
        let str = this.$store.state.week.health
        if (str) {
          console.log(str);
          return str.substring(3,);
        }else {
          return this.$store.state.week.health
        }
      },
      job() {
        let str = this.$store.state.week.job
        if (str) {
          return str.substring(3,);
        }else {
          return this.$store.state.week.job
        }
      },
      love() {
        let str = this.$store.state.week.love
        if (str) {
          return str.substring(3,);
        }else {
          return this.$store.state.week.love
        }
      },
      money() {
        let str = this.$store.state.week.money
        if (str) {
          return str.substring(3,);
        }else {
          return this.$store.state.week.money
        }
      },
      work() {
        let str = this.$store.state.week.work
        if (str) {
          return str.substring(3,);
        }else {
          return this.$store.state.week.work
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
      .week-health,
      .week-job,
      .week-love,
      .week-money,
      .week-work {
        padding-top: .2rem;
        border-radius: .2rem;
        margin-bottom: .4rem;
        position: relative;
        box-shadow: 0 0 .5rem rgba(165,55,222,.3);
        h5 {
          position: absolute;
          top: .3rem;
          left: .7rem;
          font-size: .3rem;
        }
        p {
          padding: .25rem .3rem .3rem .7rem;
          font-size: .28rem;
          letter-spacing: .03rem;
          line-height: .4rem;
          color: #6c6c6c;
        }
      }
      .week-health:before,
      .week-job:before,
      .week-love:before,
      .week-money:before,
      .week-work:before {
        content: '';
        width: .55rem;
        height: .55rem;
        display: block;
        background-size: cover;
        border-radius: 50%;
      }
      .week-health:before {
        background: url("../../assets/images/icon_health.png")no-repeat center;
      }
      .week-job:before {
        background: url("../../assets/images/icon_job.png")no-repeat center;
      }
      .week-love:before {
        background: url("../../assets/images/icon_love.png")no-repeat center;
      }
      .week-money:before {
        background: url("../../assets/images/icon_money.png")no-repeat center;
      }
      .week-work:before {
        background: url("../../assets/images/icon_work.png")no-repeat center;
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

