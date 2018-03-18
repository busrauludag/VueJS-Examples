<template>
  <p>
    Counter is: {{ counter }}
  </p>
</template>

<script>
  export default {
    //props: ['counter']
    computed: {
      counter() {
        // with Satate
        //return this.$store.state.counter * 2;

        // with Getters
        return this.$store.getters.doubleCounter;
      }
    }
  }
</script>