<template>
  <div>
    <div class="star-gradual">
      <div class="star-sun">
      </div>
      <div class="star-content">
        <p>每天&nbsp;&nbsp;从这里开始</p>
        <p>美好的时刻从现在开始</p>
      </div>
      <div class="star-footer">
        <p>星座伴侣</p>
        <p>专业•有趣•专注</p>
      </div>
      <p class="star-countdown">倒计时: {{num}}s</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "home",
        data() {
          return {
            num: 4,
            timer: 0,
          }
        },
        created(){
          if (this.timer) {
            clearInterval(this.timer)
          }else {
            this.timer = setInterval(() => {
              this.num--;
              if (this.num < 0) {
                clearInterval(this.timer)
                this.num = 4
              }
            }, 1000);
          }
        },
        destroyed() {
          clearInterval(this.timer)
        }
    }
</script>

<style scoped lang="less">
  .star-gradual {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(#8c3de7, 25%, #cb6ce6);
    .star-sun {
      width: 5.1rem;
      height: 5.1rem;
      border-radius: 50%;
      position: absolute;
      top: 1.56rem;
      left: 50%;
      transform: translateX(-50%);
      background: url("../assets/images/sun.png")no-repeat center;
      background-size: cover;
    }
    .star-content,
    .star-footer {
      font-size: .5rem;
      color: #ffffff;
      font-family: "楷体","楷体_GB2312";
      text-align: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .star-content {
      width: 5.14rem;
      top: 8.1rem;
    }
    .star-footer {
      font-size: .32rem;
      bottom: .5rem;
    }
    .star-countdown {
      font-size: .26rem;
      color: #fff;
      position: absolute;
      right: .5rem;
      bottom: 3rem;
    }
  }
</style>
