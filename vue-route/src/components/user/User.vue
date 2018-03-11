<template>
  <div>
    <h5>The User Page</h5>
    <hr>
    <p>Loaded ID: {{ id }}</p>
    <button class="btn btn-dark" @click="navigateToHome">Go To Home</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // router parametresi alınır
        id: this.$route.params.id
      }
    },
    // componentlerdeki değişiklikleri izlemesi için kullanılır
    // user'lara ait farklı id değişimlerini algılar.
    watch: {
      '$route'(to, from){
        this.id = to.params.id;
      }
    },
    methods: {
      navigateToHome() {
        this.$router.push('/');
      }
    }
  }
</script>

<style>
</style>