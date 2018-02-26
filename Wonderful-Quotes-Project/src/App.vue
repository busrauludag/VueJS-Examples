<template>
  <div class="container">
    <app-quote-grid :quotes="quotes"></app-quote-grid>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
export default {
  components: {
    appQuoteGrid: QuoteGrid
  },
  data () {
    return {
      quotes: [
        'Quote 1'
      ],
      maxQuotes: 10
    }
  }
}
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
</style>
