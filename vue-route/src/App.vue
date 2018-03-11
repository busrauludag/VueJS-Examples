<template>
  <div class="container">
    <div class="col-12 mt-3">
      <h3>Routing</h3>
      <hr>
      <app-header class="my-3"></app-header>
      <!-- route'ları yükler -->
      <router-view></router-view>
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