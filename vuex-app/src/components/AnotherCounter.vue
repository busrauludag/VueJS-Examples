<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
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