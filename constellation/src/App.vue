<template>
  <div id="app">
    <div  v-if=list>
      <router-view></router-view>
    </div>
    <div v-else>
      <home></home>
    </div>
  </div>
</template>

<script>
  import home from './components/home'
  export default {
    name: 'App',
    data() {
      return {
        timer: 0,
        list: false
      }
    },
    created() {
      this.$store.dispatch('getCon')
      if(this.timer){
        clearInterval(this.timer)
      }else{
        this.timer = setInterval(()=>{
          // 调用相应的接口，渲染数据
          this.list = true
        }, 5000)
      }
    },
    components: {
      home
    },
    destroyed(){
      clearInterval(this.timer)
    }
  }
</script>

<style lang="less">
  .clearfix:after {
    content:"";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  #app {
    width: 7.5rem;
    overflow: hidden;
  }
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'icomoon';
    src:  url('./assets/fonts/icomoon.eot?adfi6b');
    src:  url('./assets/fonts/icomoon.eot?adfi6b#iefix') format('embedded-opentype'),
    url('./assets/fonts/icomoon.ttf?adfi6b') format('truetype'),
    url('./assets/fonts/icomoon.woff?adfi6b') format('woff'),
    url('./assets/fonts/icomoon.svg?adfi6b#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }
</style>
