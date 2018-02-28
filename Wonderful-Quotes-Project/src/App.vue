<template>
  <div class="container">
    <br><br>
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <br>
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <br><br>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a Quote to delete it.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import Header from './components/Header.vue';

export default {
  data () {
    return {
      quotes: [
        'Quote 1'
      ],
      maxQuotes: 10
    }
  },
  methods:{
    newQuote(quote){
      if(this.quotes.length >= this.maxQuotes){
        return alert('Please delte quote first');
      }
      this.quotes.push(quote);
    },
    deleteQuote(ind){
      this.quotes.splice(ind, 1);
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  }
}
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
</style>
