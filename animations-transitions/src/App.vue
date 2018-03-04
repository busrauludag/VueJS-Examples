<template>
  <div class="container">
    <h2>Animations and Transitions</h2>
    <hr>
    <button class="btn btn-primary" @click="show = !show">
      Show Alert
    </button>
    <transition>
      <div class="alert alert-info mt-2" v-if="show">
        This is some Info !
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    }
  }
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
</style>