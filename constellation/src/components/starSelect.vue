<template>
  <div class="sl-parent">
    <h1>选择星座</h1>
    <ul class="clearfix" v-if="obj">
      <div class="sl-layout" v-for="(item, index) in  obj" :key="item.id">
        <img :src="skip(item.imgUrl)" @click="over(item.name, item.english, item.date, item.imgUrl)">
        <li>{{item.name}}<br>{{item.english}}<br>{{item.date}}</li>
      </div>
    </ul>
    <span class="sl-close" @click="close()"></span>
  </div>
</template>

<script>
  export default {
    name: "starSelect",
    data () {
      return {
        // obj: null,
        img: '',
        arr: []
      }
    },
    computed: {
      obj () {
        return this.$store.state.constell
      }

    },
    methods: {
      skip (val) {
        return require ('../assets' + val)
      },
      close () {
        this.$router.push ({path: '/index', name: 'index'})
      },
      over (myName, myEng, myDate, myImg) {
        this.$router.push ({
          path: '/index',
          name: 'index',
          params: {name: myName, eng: myEng, date: myDate, imgUrl: myImg}
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .sl-parent {
    min-height: 100vh;
    overflow: hidden;
    background: linear-gradient(#a254f7, #8325ff, 80%, #a254f7);
    ul {
      list-style-type: none;
      margin-bottom: 2rem;
      .sl-layout {
        width: 33%;
        float: left;
        text-align: center;
      }
      img {
        vertical-align: top;
        width: 1.22rem;
        height: 1.22rem;
        border-radius: .1rem;
        background-size: cover;
      }
      li {
        font-size: .3rem;
        color: #fffbf9;
        line-height: .4rem;
        margin: .2rem 0 .4rem;
      }
    }
    .sl-close {
      font-family: 'icomoon';
      font-size: .4rem;
      width: .4rem;
      height: .4rem;
      color: #fff;
      display: block;
      margin: 0 auto 2rem;
    }
    h1 {
      font-size: .3rem;
      color: #fefefe;
      margin: 1.08rem auto 1.43rem;
      text-align: center;
    }
  }
</style>
