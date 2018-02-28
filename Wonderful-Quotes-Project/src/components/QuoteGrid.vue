<template>
  <div class="row">
    <app-quote v-for="(quote, index) in quotes" :key="quote.id" @click.native="deleteQuote(index)">
      {{ quote }}
    </app-quote>
  </div>
</template>

<script>
  import Quote from './Quote.vue';
  export default {
    props: ['quotes'],
    components: {
      appQuote: Quote
    },
    data() {
      return {

      }
    },
    methods: {
      deleteQuote(ind){
        this.$emit('quoteDeleted', ind);
      }
    }
  }
</script>

<style>
  
</style>