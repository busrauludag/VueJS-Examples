<template>
  <div>
    <h5>The User Edit Page</h5>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <hr>
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>

    <div style="height: 500px;"></div>
    <p id="data">Ekstra Data</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        confirmed: false
      }
    },
    beforeRouteLeave: (to, from, next) => {
      console.log('user edit before leave');
      // this.confirmed kullanabiliriz çünkü component oluşmuş durumda
      if(this.confirmed){
        next();
      }else{
        if(confirm('Are you sure?')){
          next();
        }else{
          next(false);
        }
      }
    }
  }
</script>

<style>
</style>