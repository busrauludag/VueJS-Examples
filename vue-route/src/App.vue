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
      <router-view></router-view>
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
</style>