<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
  </div>
</template>

<script>
  // import { mapMutations } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    methods: {
      // ...mapMutations([
      //   'increment',
      //   'decrement'
      // ]),

      ...mapActions([
        'increment',
        'decrement'
      ]),
      // actions function
      // aslında buna gerek yoktur, otomatik çağırır
      // increment(by){
      //   this.$store.dispatch('increment', by);
      //   // by = kaç adet artıracağını belirtir
      // }

      // increment() {
      //   //this.$emit('updated', 1);
      //   // this.$store.state.counter++;
      //   this.$store.commit('increment'); // mutation kullanımı
      // },
      // decrement() {
      //   //this.$emit('updated', -1);
      //   // this.$store.state.counter--;
      //   this.$store.commit('decrement'); // mutation kullanımı
      // }

    }
  }
</script>