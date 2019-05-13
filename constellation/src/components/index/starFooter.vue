<template>
    <div class="footer-content">
      <p class="footer-title">每日推荐</p>
      <div class="footer-posi">
        <img src="../../assets/images/footer.png">
      </div>
      <span class="footer-home">
        <img src="../../assets/images/icon_home.png" alt="">
        <p>首页</p>
      </span>
      <span class="footer-headline">
        <img src="../../assets/images/icon_headline.png">
        <p>头条</p>
      </span>

    </div>
</template>

<script>
    export default {
        name: "starFooter"
    }
</script>

<style scoped lang="less">
  .footer-content {
    /*width: 85%;*/
    margin: 0 auto 1rem;
    position: relative;
    .footer-title {
      font-size: .25rem;
      position: absolute;
      top: -.45rem;
      left: .9rem;
    }
    .footer-posi {
      width: 6.2rem;
      margin: .2rem auto;
    }
    img {
      display: block;
      width: 98%;
      border-radius: .1rem;
    }
    .footer-home {
      width: 1.2rem;
      height: 1.2rem;
      display: block;
      position: absolute;
      bottom: -.8rem;
      left: 1.2rem;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 0 .5rem rgba(165,55,222,.3);
      img {
        vertical-align: top;
        width: 45%;
        height: 45%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -70%);
      }
      p {
        font-size: .24rem;
        color: #d76ef9;
        position: absolute;
        bottom: .1rem;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .footer-headline {
      width: 1.2rem;
      height: 1.2rem;
      display: block;
      position: absolute;
      bottom: -1rem;
      right: 1.2rem;
      border-radius: 50%;
      background-color: #fff;
      img {
        vertical-align: top;
        width: .5rem;
        height: .5rem;
        margin-top: .5rem;
        position: absolute;
        top: -40%;
        left: 50%;
        transform: translateX(-30%);
      }
      p {
        font-size: .22rem;
        color: #6c6c6c;
        position: absolute;
        bottom: .33rem;
        left: 50%;
        transform: translateX(-30%);
      }
    }
  }
  .footer-content:before {
    content: '';
    width: .5rem;
    height: .5rem;
    display: block;
    background: url("../../assets/images/icon_crown.png")no-repeat center;
    background-size: cover;
    border-radius: 50%;
    position: absolute;
    top: -.6rem;
    left: .1rem;
  }
</style>
