<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>VUEX</h1>
        <!-- 
          <app-result :counter="counter"></app-result>
          <hr>
          <app-counter @updated="counter += $event"></app-counter>
         -->
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr>
        <app-counter></app-counter>
        <app-another-counter></app-another-counter>
        <hr>
        <input type="text" class="form-control" v-model="value">
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue';
  import Result from './components/Result.vue';
  import AnotherResult from './components/AnotherResult.vue';
  import AnotherCounter from './components/AnotherCounter.vue';
  export default {
    // data() {
    //   return {
    //    counter: 0
    //   }
    // },
    computed: {
      // value(){
      //   return this.$store.getters.value;
      // }

      value: {
        get() {
          return this.$store.getters.value;
        },
        set(value){
          this.$store.dispatch('updateValue', value);
        }
      }
    },
    methods: {
      updateValue(event){
        this.$store.dispatch('updateValue', event.target.value);
      }
    },
    components:{
      appCounter: Counter,
      appResult: Result,
      appAnotherResult: AnotherResult,
      appAnotherCounter: AnotherCounter
    }
  }
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
</style>