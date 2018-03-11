<template>
  <div class="container">
    <div class="col-12 mt-3">
      <h3>Routing</h3>
      <hr>
      <!-- <app-header class="my-3"></app-header> -->

      <!-- route'ları yükler -->
      <!-- 
        name kullanarak birden fazla router-view kullanabailiriz ve bunu ilgili componentlerde 
        çağırabiliriz (components object). 
      -->
      <router-view name="header-top" class="my-3"></router-view>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
      <router-view name="header-bottom" class="my-3"></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      appHeader: Header
    }
  }
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
  /* slide = transition name */
  .slide-enter{
    opacity: 0;
    /* transform: translateY(20px); */
  }
  .slide-enter-active{
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }
  .slide-leave{

  }
  .slide-leave-active{
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
  }
  @keyframes slide-in{
    from{
      transform: translateY(20px);
    }
    to{
      transform: translateY(0);
    }
  }
   @keyframes slide-out{
    from{
      transform: translateY(0);
    }
    to{
      transform: translateY(20px);
    }
  }
</style>